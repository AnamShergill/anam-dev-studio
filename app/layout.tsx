import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anam Zeeshan Shergill | Frontend & AI Web Developer",
  description: "Modern developer portfolio showcasing web development projects, skills in React, Next.js, TypeScript, and AI-powered applications. Started coding in 2023.",
  keywords: ["web developer", "frontend developer", "React", "Next.js", "TypeScript", "AI", "portfolio", "Anam Shergill"],
  authors: [{ name: "Anam Zeeshan Shergill" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Anam Zeeshan Shergill | Frontend & AI Web Developer",
    description: "Building modern, fast and SEO-focused web experiences",
    type: "website",
    locale: "en_US",
    siteName: "Anam Shergill Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anam Zeeshan Shergill | Frontend & AI Web Developer",
    description: "Building modern, fast and SEO-focused web experiences",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
