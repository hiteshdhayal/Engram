import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meridian — The AI Brain Your Company Never Had",
  description: "Every meeting, email, and document — understood, connected, and acted on. Meridian automates work, one click at a time. AI infrastructure for ambitious teams.",
  keywords: "AI, productivity, automation, company brain, meetings, email, Meridian",
  openGraph: {
    title: "Meridian — AI Infrastructure",
    description: "Every meeting, email, and document — understood, connected, and acted on.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
