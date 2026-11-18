import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Calendar" };

export default function Page() {
  return <ComingSoon title="Calendar">Availability and booking a conversation with a member move here next.</ComingSoon>;
}
