import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Cycle Club", template: "%s · Cycle Club" },
  description: "The Cycle Club: a curated network of design and communication talents across Europe.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
