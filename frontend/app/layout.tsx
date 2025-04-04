import type { ReactNode } from "react"
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
  children: ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="https://kit.fontawesome.com/your-code-here.js" strategy="afterInteractive" />
      </head>
      <body className={`${outfit.className} bg-white text-slate-900 dark:bg-slate-900 dark:text-white min-h-screen transition-colors duration-300`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}