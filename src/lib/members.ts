import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const PHOTO_BUCKET = "private-files";
const SIGNED_URL_TTL = 60 * 60; // 1 hour
// Browsers cannot render these; they need a server-side conversion first.
const UNRENDERABLE = /\.(heic|heif)$/i;

export type Role = "Talent" | "Mentor" | "Internal";

export type MemberSummary = {
  id: string;
  firstName: string;
  lastName: string;
  expertise: string | null;
  role: Role | null;
  photoUrl: string | null;
  available: boolean;
  joinedAt: string;
};

export type MemberDetail = MemberSummary & {
  title: string | null;
  mantra: string | null;
  location: string | null;
  yearsOfExperience: number | null;
  linkedin: string | null;
  expertises: string[];
  experiences: {
    id: number;
    title: string | null;
    company: string | null;
    yearFrom: number | null;
    yearTo: number | null;
    expertises: string[];
  }[];
  projects: { id: number; title: string | null; yearFrom: number | null; yearTo: number | null; link: string | null }[];
  websites: { name: string; url: string }[];
};

const ROLE_BY_STATUS: Record<string, Role> = { Talent: "Talent", Mentor: "Mentor", Corporate: "Internal" };

type Supabase = Awaited<ReturnType<typeof createClient>>;

/** Returns the signed-in member's id, or sends the visitor to /login. */
export async function requireViewerId(supabase: Supabase): Promise<string> {
  const { data } = await supabase.auth.getClaims();
  const id = data?.claims?.sub;
  if (!id) redirect("/login");
  return id;
}

export const getViewer = cache(async () => {
  const supabase = await createClient();
  const id = await requireViewerId(supabase);
  const { data } = await supabase
    .from("users__profiles")
    .select("id, first_name, last_name, profile")
    .eq("id", id)
    .maybeSingle();
  const [photoUrl] = await signPhotos(supabase, [data?.profile ?? null]);
  return { id, firstName: data?.first_name?.trim() || null, photoUrl };
});

async function signPhotos(supabase: Supabase, paths: (string | null)[]): Promise<(string | null)[]> {
  const usable = [...new Set(paths.filter((p): p is string => Boolean(p) && !UNRENDERABLE.test(p!)))];
  if (usable.length === 0) return paths.map(() => null);
  const { data, error } = await supabase.storage.from(PHOTO_BUCKET).createSignedUrls(usable, SIGNED_URL_TTL);
  if (error || !data) return paths.map(() => null);
  const byPath = new Map(data.filter((d) => !d.error && d.signedUrl).map((d) => [d.path, d.signedUrl]));
  return paths.map((p) => (p ? byPath.get(p) ?? null : null));
}

type ExperienceRow = { id: number; user: string | null; year_from: number | null; year_to: number | null };

/**
 * Primary expertise = the expertise a member lists most often across their experiences,
 * ties broken by the most recent experience. Profiles carry no expertise of their own.
 */
function primaryExpertise(entries: { name: string; yearTo: number; yearFrom: number }[]): string | null {
  if (entries.length === 0) return null;
  const stats = new Map<string, { count: number; recent: [number, number] }>();
  for (const e of entries) {
    const s = stats.get(e.name) ?? { count: 0, recent: [0, 0] as [number, number] };
    s.count += 1;
    if (e.yearTo > s.recent[0] || (e.yearTo === s.recent[0] && e.yearFrom > s.recent[1])) s.recent = [e.yearTo, e.yearFrom];
    stats.set(e.name, s);
  }
  return [...stats.entries()].sort(
    ([, a], [, b]) => b.count - a.count || b.recent[0] - a.recent[0] || b.recent[1] - a.recent[1],
  )[0][0];
}

async function loadExpertiseIndex(supabase: Supabase, userIds?: string[]) {
  let expQuery = supabase.from("users__experiences").select("id, user, year_from, year_to");
  if (userIds) expQuery = expQuery.in("user", userIds);
  const [{ data: experiences }, { data: links }, { data: expertises }] = await Promise.all([
    expQuery,
    supabase.from("users__experiences__expertises__attr").select("experience, expertise"),
    supabase.from("users__expertises").select("id, expertise"),
  ]);
  const nameById = new Map((expertises ?? []).map((e) => [e.id, e.expertise]));
  const expById = new Map<number, ExperienceRow>((experiences ?? []).map((e) => [e.id, e]));
  const byUser = new Map<string, { name: string; yearTo: number; yearFrom: number }[]>();
  const byExperience = new Map<number, string[]>();
  for (const l of links ?? []) {
    const exp = l.experience != null ? expById.get(l.experience) : undefined;
    const name = l.expertise != null ? nameById.get(l.expertise) : undefined;
    if (!exp?.user || !name) continue;
    const list = byUser.get(exp.user) ?? [];
    list.push({ name, yearTo: exp.year_to ?? 9999, yearFrom: exp.year_from ?? 0 });
    byUser.set(exp.user, list);
    byExperience.set(exp.id, [...(byExperience.get(exp.id) ?? []), name]);
  }
  return { byUser, byExperience };
}

async function loadStatusNames(supabase: Supabase) {
  const { data } = await supabase.from("users__status").select("id, status");
  return new Map((data ?? []).map((s) => [s.id, s.status ?? ""]));
}

const hasName = (p: { first_name: string | null; last_name: string | null }) =>
  Boolean(p.first_name?.trim() && p.last_name?.trim());

/** Every member with a name, newest first. Members with a photo and an expertise lead. */
export const listMembers = cache(async (): Promise<MemberSummary[]> => {
  const supabase = await createClient();
  await requireViewerId(supabase);

  const [{ data: profiles }, statusNames, { byUser }, { data: slots }] = await Promise.all([
    supabase
      .from("users__profiles")
      .select("id, first_name, last_name, profile, status_main, created_at")
      .order("created_at", { ascending: false }),
    loadStatusNames(supabase),
    loadExpertiseIndex(supabase),
    // Absences are private to each member, so availability = has weekly slots.
    supabase.from("users__availabilities__attr").select("user"),
  ]);

  const named = (profiles ?? []).filter(hasName);
  const photos = await signPhotos(supabase, named.map((p) => p.profile));
  const withSlots = new Set((slots ?? []).map((s) => s.user));

  const members = named.map<MemberSummary>((p, i) => ({
    id: p.id,
    firstName: p.first_name!.trim(),
    lastName: p.last_name!.trim(),
    expertise: primaryExpertise(byUser.get(p.id) ?? []),
    role: ROLE_BY_STATUS[statusNames.get(p.status_main ?? -1) ?? ""] ?? null,
    photoUrl: photos[i],
    available: withSlots.has(p.id),
    joinedAt: p.created_at,
  }));

  const rank = (m: MemberSummary) => (m.photoUrl ? 0 : 2) + (m.expertise ? 0 : 1);
  return members.sort((a, b) => rank(a) - rank(b)); // stable: keeps newest first within a rank
});

export async function getMember(id: string): Promise<MemberDetail | null> {
  const supabase = await createClient();
  await requireViewerId(supabase);

  const { data: p } = await supabase
    .from("users__profiles")
    .select("id, first_name, last_name, profile, status_main, created_at, title, mantra, location, min_xp, linkedin")
    .eq("id", id)
    .maybeSingle();
  if (!p || !hasName(p)) return null;

  const [statusNames, { byUser, byExperience }, { data: experiences }, { data: projects }, { data: websites }, { count }] =
    await Promise.all([
      loadStatusNames(supabase),
      loadExpertiseIndex(supabase, [id]),
      supabase
        .from("users__experiences")
        .select("id, title, company, year_from, year_to")
        .eq("user", id)
        .order("year_from", { ascending: false }),
      supabase.from("users__projects").select("id, title, year_from, year_to, link").eq("user", id).order("year_from", { ascending: false }),
      supabase.from("users__websites").select("name, url").eq("user", id),
      supabase.from("users__availabilities__attr").select("id", { count: "exact", head: true }).eq("user", id),
    ]);
  const [photoUrl] = await signPhotos(supabase, [p.profile]);
  const entries = byUser.get(id) ?? [];

  return {
    id: p.id,
    firstName: p.first_name!.trim(),
    lastName: p.last_name!.trim(),
    expertise: primaryExpertise(entries),
    expertises: [...new Set(entries.map((e) => e.name))],
    role: ROLE_BY_STATUS[statusNames.get(p.status_main ?? -1) ?? ""] ?? null,
    photoUrl,
    available: (count ?? 0) > 0,
    joinedAt: p.created_at,
    title: p.title,
    mantra: p.mantra,
    location: p.location,
    yearsOfExperience: p.min_xp,
    linkedin: p.linkedin,
    experiences: (experiences ?? []).map((e) => ({
      id: e.id,
      title: e.title,
      company: e.company,
      yearFrom: e.year_from,
      yearTo: e.year_to,
      expertises: byExperience.get(e.id) ?? [],
    })),
    projects: (projects ?? []).map((pr) => ({
      id: pr.id,
      title: pr.title,
      yearFrom: pr.year_from,
      yearTo: pr.year_to,
      link: pr.link,
    })),
    websites: (websites ?? []).filter((w) => w.url).map((w) => ({ name: w.name, url: w.url })),
  };
}
