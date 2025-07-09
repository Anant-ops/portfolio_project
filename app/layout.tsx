import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anant Goyal - DevOps & Cloud Engineer",
  description: "DevOps, Cloud & Web Development Enthusiast | Automating Reliable Systems",
  keywords: "DevOps, Cloud Engineering, Web Development, AWS, Kubernetes, Docker, CI/CD",
  authors: [{ name: "Anant Goyal" }],
  openGraph: {
    title: "Anant Goyal - DevOps & Cloud Engineer",
    description: "DevOps, Cloud & Web Development Enthusiast | Automating Reliable Systems",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
