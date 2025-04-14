"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Research from "@/components/research"
import Projects from "@/components/projects"
import Education from "@/components/education"
import TechStack from "@/components/tech-stack"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import BackgroundScene from "@/components/background-scene"
import ThemeSelector, { type ColorTheme } from "@/components/theme-selector"

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>({
    name: "Blue+Green",
    primary: "blue",
    secondary: "green",
    primaryClass: "text-blue-400",
    secondaryClass: "text-green-400",
    gradientClass: "from-blue-400 to-green-300",
  })

  const handleThemeChange = (theme: ColorTheme) => {
    setCurrentTheme(theme)
  }

  return (
    <main className="min-h-screen bg-black text-white relative">
      <BackgroundScene theme={currentTheme} />
      <div className="relative z-10">
        <Navbar theme={currentTheme} />

        <div className="absolute top-4 right-4 z-50">
          <ThemeSelector onThemeChange={handleThemeChange} />
        </div>

        <Hero theme={currentTheme} />

        <div id="about" className="relative">
          <div className="container mx-auto px-4">
            <About theme={currentTheme} />
          </div>
        </div>

        <div id="experience" className="relative">
          <div className="container mx-auto px-4">
            <Experience theme={currentTheme} />
          </div>
        </div>

        <div id="research" className="relative">
          <div className="container mx-auto px-4">
            <Research theme={currentTheme} />
          </div>
        </div>

        <div id="projects" className="relative">
          <div className="container mx-auto px-4">
            <Projects theme={currentTheme} />
          </div>
        </div>

        <div id="education" className="relative">
          <div className="container mx-auto px-4">
            <Education theme={currentTheme} />
          </div>
        </div>

        <div id="tech-stack" className="relative">
          <div className="container mx-auto px-4">
            <TechStack theme={currentTheme} />
          </div>
        </div>

        <div id="certificates" className="relative">
          <div className="container mx-auto px-4">
            <Certificates theme={currentTheme} />
          </div>
        </div>

        <div id="contact" className="relative">
          <div className="container mx-auto px-4">
            <Contact theme={currentTheme} />
          </div>
        </div>

        <Footer theme={currentTheme} />
      </div>
    </main>
  )
}
