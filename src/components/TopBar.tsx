import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { getViewer } from "@/lib/members";
import { CycleMark } from "./CycleMark";
import { NavLinks, NavLinksFallback } from "./NavLinks";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <header className={styles.bar}>
      <nav aria-label="Main" className={`container ${styles.nav}`}>
        <Link href="/" className={styles.brand}>
          <CycleMark /> cycle
        </Link>
        <Suspense fallback={<NavLinksFallback />}>
          <NavLinks />
        </Suspense>
        <Suspense fallback={<span className={styles.avatar} aria-hidden="true" />}>
          <ViewerMenu />
        </Suspense>
      </nav>
    </header>
  );
}

async function ViewerMenu() {
  const viewer = await getViewer();
  return (
    <div className={styles.viewer}>
      <Link href={`/members/${viewer.id}`} className={styles.avatar} aria-label="Your profile">
        {viewer.photoUrl ? (
          <Image src={viewer.photoUrl} alt="" fill sizes="40px" style={{ objectFit: "cover" }} />
        ) : (
          <span aria-hidden="true">{viewer.firstName?.[0] ?? "·"}</span>
        )}
      </Link>
      <form action="/auth/signout" method="post">
        <button type="submit" className={`meta ${styles.signout}`}>
          Sign out
        </button>
      </form>
    </div>
  );
}
