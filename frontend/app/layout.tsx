import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import ThemeToggle from "./components/theme-toggle"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anidipta Pal | AI/ML Engineer",
  description: "Portfolio showcasing AI/ML projects and professional experience",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <Script src="https://kit.fontawesome.com/your-code-here.js" strategy="afterInteractive" />
      </head>
      <body className={outfit.className}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}

