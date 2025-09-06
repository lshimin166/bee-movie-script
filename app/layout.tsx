import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geist = GeistSans;

const geistMono = GeistMono;

const siteUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://beemoviescript.org";

export const metadata: Metadata = {
  title: "Bee Movie Script - The Entire Script Copy and Paste",
  description: "Complete Bee Movie script copy paste tool. Get entire script, no spaces version, auto segments for Discord/Twitter & popular meme quotes.",
  keywords: "bee movie script, copy paste, full script, meme quotes, entire script, bee movie text",
  openGraph: {
    title: "Bee Movie Script - The Entire Script Copy and Paste",
      description: "Complete Bee Movie script copy paste tool. Get entire script, no spaces version, auto segments for Discord/Twitter & meme quotes.",
    type: "website",
    images: [
      {
        url: "https://cdn.resio.top/images/bee-movie-script.png",
        alt: "Bee Movie Script",
      },
    ],
    url: `${siteUrl}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bee Movie Script - Copy and Paste Tool",
    description: "Complete Bee Movie script copy paste tool. Get entire script, no spaces version & meme quotes for Discord, Twitter and more.",
  },
  robots: "index, follow",
  alternates: {
    canonical: `${siteUrl}/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
