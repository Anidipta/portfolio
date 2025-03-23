"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import ProjectsSection from "./components/projects-section"
import ExperienceSection from "./components/experience-section"
import ResearchSection from "./components/research-section"
import SkillsSection from "./components/skills-section"
import AboutSection from "./components/about-section"
import ContactSection from "./components/contact-section"
import ScrollProgress from "./components/scroll-progress"
import EducationSection from "./components/education-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            // Update URL hash without scrolling
            const url = new URL(window.location.href)
            url.hash = entry.target.id
            window.history.replaceState({}, "", url)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px", // Adjust for header height
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Add this function before the return statement
  useEffect(() => {
    // Handle hash links with offset for fixed header
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")?.substring(1)
        const targetElement = document.getElementById(targetId || "")

        if (targetElement) {
          const headerOffset = 80 // Adjust based on your header height
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleHashLinkClick)

    return () => {
      document.removeEventListener("click", handleHashLinkClick)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden" ref={containerRef}>

      <ScrollProgress />

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar activeSection={activeSection} />
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 w-full h-screen pointer-events-none z-10 bg-gradient-to-b from-background to-transparent"
      />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  )
}

