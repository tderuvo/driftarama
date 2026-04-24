import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Driftarama — Before it slips, just drift it in.",
  description:
    "A simple, stress-free place to keep track of tasks, projects, and follow-ups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable} antialiased`}>
        <body className="min-h-screen">{children}</body>
      </html>
    </ClerkProvider>
  );
}
