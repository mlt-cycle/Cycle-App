"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = { error: string | null; email: string };

function safeNext(value: FormDataEntryValue | null) {
  const next = typeof value === "string" ? value : "/";
  // Only same-site paths, never protocol-relative or absolute URLs.
  return next.startsWith("/") && !next.startsWith("//") ? next : "/";
}

export async function signIn(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password.", email };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  // Same message for unknown email and wrong password: no account enumeration.
  if (error) return { error: "That email and password do not match.", email };

  redirect(safeNext(formData.get("next")));
}
