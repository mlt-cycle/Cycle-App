import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { TopBar } from "@/components/TopBar";
import { MemberCard } from "@/components/MemberCard";
import cardStyles from "@/components/MemberCard.module.css";
import { getViewer, listMembers } from "@/lib/members";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main className="container">
        <Suspense fallback={<section className={styles.welcome} aria-busy="true" />}>
          <Welcome />
        </Suspense>
      </main>
      <section className={`theme-dark ${styles.newSection}`} aria-labelledby="new-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={`meta ${styles.index}`}>01</span>
            <h2 id="new-title" className={styles.sectionTitle}>
              New in the Club
            </h2>
            <Link href="/club" className={styles.sectionLink}>
              See everyone →
            </Link>
          </div>
          <Suspense fallback={<p className={styles.loading}>Loading members…</p>}>
            <NewMembers />
          </Suspense>
        </div>
      </section>
    </>
  );
}

async function Welcome() {
  await connection();
  const [viewer, members] = await Promise.all([getViewer(), listMembers()]);
  const today = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(new Date());

  return (
    <section className={styles.welcome} aria-labelledby="hello">
      <div className="grain" aria-hidden="true" />
      <div className={styles.welcomeMain}>
        <p className={`meta ${styles.date}`}>{today}</p>
        <h1 id="hello" className={styles.hello}>
          Welcome to
          <br />
          the Club{viewer.firstName ? "," : "."}
          {viewer.firstName && (
            <>
              <br />
              {viewer.firstName}.
            </>
          )}
        </h1>
      </div>
      <div className={styles.stat}>
        <p className={styles.statValue}>+{members.length}</p>
        <p className={styles.statLabel}>Members in the Club across Europe</p>
        <Link href="/club" className={styles.cta}>
          Explore the Club →
        </Link>
      </div>
    </section>
  );
}

async function NewMembers() {
  const members = await listMembers();
  const newest = members
    .filter((m) => m.photoUrl)
    .sort((a, b) => b.joinedAt.localeCompare(a.joinedAt))
    .slice(0, 4);

  return (
    <ul className={cardStyles.grid}>
      {newest.map((m) => (
        <li key={m.id}>
          <MemberCard member={m} />
        </li>
      ))}
    </ul>
  );
}
