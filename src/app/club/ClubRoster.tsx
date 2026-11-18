"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { MemberCard } from "@/components/MemberCard";
import cardStyles from "@/components/MemberCard.module.css";
import type { MemberSummary } from "@/lib/members";
import styles from "./club.module.css";

const FILTERS = {
  Everyone: () => true,
  Talents: (m: MemberSummary) => m.role === "Talent",
  Mentors: (m: MemberSummary) => m.role === "Mentor",
  "Available now": (m: MemberSummary) => m.available,
} satisfies Record<string, (m: MemberSummary) => boolean>;

type Filter = keyof typeof FILTERS;

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export function ClubRoster({ members }: { members: MemberSummary[] }) {
  const [filter, setFilter] = useState<Filter>("Everyone");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const visible = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    return members.filter(
      (m) =>
        FILTERS[filter](m) &&
        (!q || normalize(`${m.firstName} ${m.lastName} ${m.expertise ?? ""}`).includes(q)),
    );
  }, [members, filter, deferredQuery]);

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.filters} role="group" aria-label="Filter members">
          {(Object.keys(FILTERS) as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              className={styles.filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4-4" />
          </svg>
          <span className="visually-hidden">Search the Club</span>
          <input type="search" placeholder="Name or expertise" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>
      <p className={`meta ${styles.count}`} aria-live="polite">
        {visible.length} {visible.length === 1 ? "member" : "members"}
      </p>
      {visible.length > 0 ? (
        <ul className={cardStyles.grid}>
          {visible.map((m, i) => (
            <li key={m.id}>
              <MemberCard member={m} priority={i < 4} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No member matches this search yet.</p>
      )}
    </>
  );
}
