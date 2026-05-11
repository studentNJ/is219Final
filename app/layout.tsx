import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description:
    "Scrollytelling portfolio for an AI engineer focused on full-stack delivery, data orchestration, and responsible AI workflows.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}