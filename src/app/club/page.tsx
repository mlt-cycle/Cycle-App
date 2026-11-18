import type { Metadata } from "next";
import { Suspense } from "react";
import { TopBar } from "@/components/TopBar";
import { listMembers } from "@/lib/members";
import { ClubRoster } from "./ClubRoster";
import styles from "./club.module.css";

export const metadata: Metadata = { title: "The Club" };

export default function ClubPage() {
  return (
    <div className={`theme-dark ${styles.page}`}>
      <TopBar />
      <main className={`container ${styles.main}`}>
        <div className={styles.head}>
          <h1 className={styles.title}>
            The Club<span className={styles.dot}>.</span>
          </h1>
          <Suspense fallback={<div className={styles.stat} />}>
            <MemberCount />
          </Suspense>
        </div>
        <Suspense fallback={<p className={styles.loading}>Loading members…</p>}>
          <Roster />
        </Suspense>
      </main>
    </div>
  );
}

async function MemberCount() {
  const members = await listMembers();
  return (
    <div className={styles.stat}>
      <p className={styles.statValue}>+{members.length}</p>
      <p className={styles.statLabel}>Curated design and communication talents, mentors and partners across Europe.</p>
    </div>
  );
}

async function Roster() {
  const members = await listMembers();
  return <ClubRoster members={members} />;
}
