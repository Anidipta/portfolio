"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, ExternalLink, BookOpen, Users, Award, Github } from "lucide-react"
import Image from "next/image"

const publications = [
  {
    id: 1,
    title: "AI-driven Monitoring System for Detecting People Using Mobile Phones in Restricted Zone",
    event: "International Conference on Applied Algorithms (ICAA) 2025",
    date: "January 9, 2025",
    authors: "Anidipta Pal, Ankana Datta, Ananyo Dasgupta",
    abstract:
      "This research paper presents an advanced AI-based monitoring system designed to detect and identify individuals using mobile phones in restricted zones. The system utilizes state-of-the-art computer vision techniques to ensure compliance with safety regulations in designated areas.",
    impact:
      "The system provides real-time monitoring capabilities with high accuracy, helping organizations maintain safety protocols and prevent potential hazards in restricted zones. The research contributes to the field of computer vision and workplace safety management.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Artificial Intelligence", "Computer Vision", "Real-time Detection", "Safety Monitoring"],
    link: "#",
    githubLink: "#",
    awards: ["Presented at ICAA 2025, Heritage Institute of Technology"],
    guide: "Dr. M. B. Kar"
  },
  {
    id: 2,
    title: "Integrating AI, IoT, and Drones for Sustainable Apple Orchard Monitoring in Society 5.0",
    event: "International Conference on Applied Algorithms (ICAA) 2025",
    date: "January 10, 2025",
    authors: "Anidipta Pal, Ankana Datta, Sukalpa Paul, Sounav Biswas",
    abstract:
      "This paper explores the integration of cutting-edge technologies including AI, IoT, and drone systems for comprehensive apple orchard monitoring. The research focuses on sustainable agricultural practices in the context of Society 5.0, combining multiple technological approaches for efficient orchard management.",
    impact:
      "The integrated system provides a holistic approach to orchard monitoring, enabling data-driven decision making for farmers. This research contributes to the advancement of smart agriculture and sustainable farming practices in the era of Society 5.0.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Artificial Intelligence", "IoT", "Drone Technology", "Smart Agriculture", "Society 5.0"],
    link: "#",
    githubLink: "#",
    awards: ["Presented at ICAA 2025, Heritage Institute of Technology"],
    guide: "Anil Kumar Bag and Dr. Diganta Sengupta"
  }
]

export default function ResearchSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null)

  return (
    <section id="research" className="section-container">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Research Publications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          My research papers till date
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((publication) => (
          <motion.div
            key={publication.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="project-card"
          >
            
            <div className="project-content">
              <h3 className="project-title gradient-text">{publication.title}</h3>

              <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BookOpen size={12} className="text-primary" />
                  <span>{publication.event}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-primary" />
                  <span>{publication.date}</span>
                </div>
                {/* 
                <div className="flex items-center gap-1">
                  <Users size={12} className="text-primary" />
                  <span>{publication.authors}</span>
                </div>
                
                {publication.guide && (
                  <div className="flex items-center gap-1">
                    <BookOpen size={12} className="text-primary" />
                    <span>Guide: {publication.guide}</span>
                  </div>
                )}
                */}
              </div>

              <p className="project-description">
                {expandedPublication === publication.id ? (
                  <>
                    <strong className="text-foreground block mb-2">Abstract:</strong>
                    {publication.abstract}
                    <strong className="text-foreground block mt-4 mb-2">Impact:</strong>
                    {publication.impact}
                  </>
                ) : (
                  publication.abstract.substring(0, 150) + "..."
                )}
              </p>

              <div className="mt-4">
                {publication.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {publication.awards.length > 0 && expandedPublication === publication.id && (
                <div className="mt-4">
                  <strong className="text-foreground block mb-2">Conference Details:</strong>
                  <ul className="list-disc list-inside">
                    {publication.awards.map((award, i) => (
                      <li key={i} className="text-muted-foreground text-sm">
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-links">
                {/*
                <div className="flex gap-4">
                  <a href={publication.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a href={publication.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                    <span>View Paper</span>
                  </a>
                </div>
                */}

                <button
                  onClick={() => setExpandedPublication(expandedPublication === publication.id ? null : publication.id)}
                  className="text-sm text-primary hover:text-secondary"
                >
                  {expandedPublication === publication.id ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

