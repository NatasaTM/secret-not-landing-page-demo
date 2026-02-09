import React from "react"
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Secret Knot — A Game of Romance and Mystery",
  description:
    "Unravel secrets, forge bonds, and lose yourself in a world where every choice reshapes the story. A narrative-driven romance and mystery game.",
};

export const viewport: Viewport = {
  themeColor: "#0c1425",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_cormorant.variable} ${_inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
