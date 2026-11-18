import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { getMember } from "@/lib/members";
import styles from "./profile.module.css";

export const metadata: Metadata = { title: "Member" };

export default function MemberPage({ params }: PageProps<"/members/[id]">) {
  return (
    <>
      <TopBar />
      <main className={`container ${styles.main}`}>
        <Suspense fallback={<p className={styles.loading}>Loading profile…</p>}>
          <Profile params={params} />
        </Suspense>
      </main>
    </>
  );
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function years(from: number | null, to: number | null) {
  if (!from && !to) return "";
  if (from && !to) return `${from} – Today`;
  if (from === to || !from) return String(to);
  return `${from} – ${to}`;
}

async function Profile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!UUID.test(id)) notFound();
  const m = await getMember(id);
  if (!m) notFound();

  const expertises = m.expertises.length ? m.expertises : m.expertise ? [m.expertise] : [];
  let section = 0;
  const next = () => String(++section).padStart(2, "0");

  return (
    <>
      <nav aria-label="Breadcrumb" className={`meta ${styles.crumb}`}>
        <Link href="/club">The Club</Link> / {m.firstName}
      </nav>

      <div className={styles.blocks}>
        <div className={styles.photo}>
          {m.photoUrl ? (
            <Image src={m.photoUrl} alt={`${m.firstName} ${m.lastName}`} fill priority sizes="(max-width: 1100px) 100vw, 33vw" style={{ objectFit: "cover" }} />
          ) : (
            <div className={styles.placeholder} aria-hidden="true">
              <span className="grain" />
              <span className={styles.initials}>
                {m.firstName[0]}
                {m.lastName[0]}
              </span>
            </div>
          )}
        </div>

        <div className={styles.dark}>
          {m.yearsOfExperience ? (
            <div>
              <p className={styles.stat}>+{m.yearsOfExperience}</p>
              <p className={styles.statLabel}>Years of experience</p>
            </div>
          ) : (
            <div>
              {m.role && <p className={styles.statSmall}>{m.role}</p>}
              {m.title && <p className={styles.statLabel}>{m.title}</p>}
            </div>
          )}
          {expertises.length > 0 && (
            <div className={styles.group}>
              <p className={`meta ${styles.groupLabel}`}>Expertise</p>
              <ul className={styles.pills}>
                {expertises.map((e) => (
                  <li key={e} className={styles.lavaPill}>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.lava}>
          <div className="grain" aria-hidden="true" />
          <p className={styles.pitch}>Work with {m.firstName} through your agent.</p>
          <div className={styles.group}>
            {m.available && (
              <p className={`meta ${styles.available}`}>
                <span className={styles.dot} aria-hidden="true" />
                Available for new work
              </p>
            )}
            <Link href="/calendar" className={styles.cta}>
              Book a conversation →
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.identity}>
        <h1 className={styles.name}>
          {m.firstName}
          <span className="visually-hidden"> {m.lastName}</span>
        </h1>
        <div className={styles.facts}>
          <p className={styles.lastName}>{m.lastName}</p>
          {m.title && m.yearsOfExperience ? <p className={styles.title}>{m.title}</p> : null}
          {m.location && <p className={`meta ${styles.muted}`}>{m.location}</p>}
          {m.role && <span className={styles.outlinePill}>{m.role}</span>}
        </div>
      </div>

      {m.mantra && <blockquote className={styles.mantra}>“{m.mantra}”</blockquote>}

      {m.projects.length > 0 && (
        <section className={styles.section} aria-labelledby="projects-title">
          <div className={styles.sectionHead}>
            <span className={`meta ${styles.muted}`}>{next()}</span>
            <h2 id="projects-title">Projects</h2>
          </div>
          <ul className={styles.rows}>
            {m.projects.map((p) => (
              <li key={p.id} className={styles.row}>
                <span className={styles.rowTitle}>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.title ?? "Untitled project"} ↗
                    </a>
                  ) : (
                    (p.title ?? "Untitled project")
                  )}
                </span>
                <span className={`meta ${styles.muted}`}>{years(p.yearFrom, p.yearTo)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {m.experiences.length > 0 && (
        <section className={styles.section} aria-labelledby="exp-title">
          <div className={styles.sectionHead}>
            <span className={`meta ${styles.muted}`}>{next()}</span>
            <h2 id="exp-title">Experience</h2>
          </div>
          <ul className={styles.rows}>
            {m.experiences.map((e) => (
              <li key={e.id} className={styles.row}>
                <span className={styles.rowTitle}>{e.company ?? "—"}</span>
                <span className={styles.rowRole}>{e.title}</span>
                <span className={`meta ${styles.muted}`}>{years(e.yearFrom, e.yearTo)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(m.websites.length > 0 || m.linkedin) && (
        <section className={styles.section} aria-labelledby="links-title">
          <div className={styles.sectionHead}>
            <span className={`meta ${styles.muted}`}>{next()}</span>
            <h2 id="links-title">Links</h2>
          </div>
          <ul className={styles.links}>
            {m.linkedin && (
              <li>
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
            )}
            {m.websites.map((w) => (
              <li key={w.url}>
                <a href={w.url} target="_blank" rel="noopener noreferrer">
                  {w.name || w.url} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
