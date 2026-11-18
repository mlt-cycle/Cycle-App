import Image from "next/image";
import Link from "next/link";
import type { MemberSummary } from "@/lib/members";
import styles from "./MemberCard.module.css";

export function MemberCard({ member, priority = false }: { member: MemberSummary; priority?: boolean }) {
  const initials = `${member.firstName[0] ?? ""}${member.lastName[0] ?? ""}`.toUpperCase();
  return (
    <Link href={`/members/${member.id}`} className={styles.card}>
      <span className={styles.photo}>
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            <span className="grain" />
            <span className={styles.initials}>{initials}</span>
          </span>
        )}
        <span className={styles.scrim} aria-hidden="true" />
        {member.available && (
          <span className={`meta ${styles.available}`}>
            <span className={styles.dot} aria-hidden="true" />
            Available
          </span>
        )}
      </span>
      <span className={styles.body}>
        <span className={styles.name}>
          {member.firstName}
          <br />
          {member.lastName}
        </span>
        {(member.expertise || member.role) && (
          <span className={styles.pills}>
            {member.expertise && <span className={styles.expertise}>{member.expertise}</span>}
            {member.role && <span className={styles.role}>{member.role}</span>}
          </span>
        )}
      </span>
    </Link>
  );
}
