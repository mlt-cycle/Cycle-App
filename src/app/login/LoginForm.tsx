"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn, type LoginState } from "./actions";
import styles from "./login.module.css";

const initial: LoginState = { error: null, email: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(signIn, initial);
  const next = useSearchParams().get("next") ?? "/";

  return (
    <form action={action} className={styles.form} noValidate>
      <input type="hidden" name="next" value={next} />
      <label className={styles.field}>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required defaultValue={state.email} />
      </label>
      <label className={styles.field}>
        <span>Password</span>
        <input name="password" type="password" autoComplete="current-password" required />
      </label>
      <p className={styles.error} role="alert" aria-live="polite">
        {state.error}
      </p>
      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Signing in…" : "Enter the Club"}
      </button>
    </form>
  );
}
