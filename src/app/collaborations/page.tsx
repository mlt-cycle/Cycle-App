import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Collaborations" };

export default function Page() {
  return <ComingSoon title="Collaborations">Briefs, teams curated by your agent, and ratings move here next.</ComingSoon>;
}
