import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const geist = GeistSans

const geistMono = GeistMono

export const metadata: Metadata = {
  title: "Bee Movie Script - Complete Copy and Paste | The Entire Bee Movie Script",
  description:
    "Get the complete Bee Movie script for copy and paste. Access the entire Bee Movie script, no spaces version, auto segments, and popular quotes. The ultimate Bee Movie script library.",
  keywords:
    "bee movie script, the bee movie script, bee movie script copy and paste, entire bee movie script, the entire bee movie script, bee movie full script, bee script movie, bee the movie script, the script of the bee movie, bee movie entire script, bee movie script copy paste, full bee movie script, the whole bee movie script, bee movie script library of babel, entire bee movie script copy and paste, the entire script of the bee movie",
  openGraph: {
    title: "Bee Movie Script - Complete Copy and Paste | The Entire Bee Movie Script",
    description:
      "Get the complete Bee Movie script for copy and paste. Access the entire Bee Movie script, no spaces version, auto segments, and popular quotes.",
    type: "website",
    url: "https://beemoviescript.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bee Movie Script - Complete Copy and Paste",
    description: "Get the complete Bee Movie script for copy and paste. The ultimate Bee Movie script library.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://beemoviescript.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
