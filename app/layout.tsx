import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BIMSpect – IFC Model Change Analysis",
  description:
    "BIMSpect compares BIM/IFC model versions and produces management-level change reports for BIM coordinators, design managers and contractors."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
