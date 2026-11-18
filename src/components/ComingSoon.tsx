import Link from "next/link";
import { TopBar } from "./TopBar";

export function ComingSoon({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="container" style={{ paddingTop: 72, paddingBottom: 120 }}>
        <p className="meta" style={{ color: "var(--c-muted)", margin: 0 }}>
          In the rebuild
        </p>
        <h1
          style={{
            margin: "16px 0 32px",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(64px, 10vw, 160px)",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          {title}
          <span style={{ color: "var(--c-lava)" }}>.</span>
        </h1>
        <p style={{ maxWidth: 560, fontSize: 20, lineHeight: 1.45, color: "var(--c-ink-2)" }}>{children}</p>
        <Link href="/club" style={{ color: "var(--c-lava-active)", fontWeight: 500 }}>
          Explore the Club →
        </Link>
      </main>
    </>
  );
}
