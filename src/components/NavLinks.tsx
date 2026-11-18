"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./TopBar.module.css";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/club", label: "The Club" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/calendar", label: "Calendar" },
  { href: "/inbox", label: "Inbox" },
];

export function NavLinks() {
  return <LinkList path={usePathname()} />;
}

/** Same links without an active state, for the prerendered shell. */
export function NavLinksFallback() {
  return <LinkList path={null} />;
}

function LinkList({ path }: { path: string | null }) {
  const isActive = (href: string) =>
    path === null ? false : href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`) || (href === "/club" && path.startsWith("/members"));

  return (
    <ul className={`meta ${styles.links}`}>
      {LINKS.map((l) => (
        <li key={l.href}>
          <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={styles.link}>
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
