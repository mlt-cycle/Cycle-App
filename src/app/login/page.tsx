import type { Metadata } from "next";
import { Suspense } from "react";
import { CycleMark } from "@/components/CycleMark";
import { LoginForm } from "./LoginForm";
import styles from "./login.module.css";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.lava} aria-labelledby="login-title">
        <div className="grain" aria-hidden="true" />
        <p className={styles.brand}>
          <CycleMark size={34} color="var(--c-dark)" /> cycle
        </p>
        <h1 id="login-title" className={styles.title}>
          The
          <br />
          Club.
        </h1>
      </section>
      <section className={styles.panel}>
        <p className="meta">Members only</p>
        <h2 className={styles.panelTitle}>Sign in</h2>
        <Suspense>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
