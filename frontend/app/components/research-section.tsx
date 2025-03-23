"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, BookOpen, ExternalLink } from "lucide-react"

const publications = [
  {
    id: 1,
    title: "AI-driven Monitoring System for Detecting People Using Mobile Phones in Restricted Zone",
    event: "International Conference on Applied Algorithms (ICAA) 2025",
    date: "January 9, 2025",
    authors: "Anidipta Pal, Ankana Datta, Ananyo Dasgupta",
    technologies: ["Artificial Intelligence", "Computer Vision", "Real-time Detection", "Safety Monitoring"],
    link: "#",
    guide: "Dr. M. B. Kar"
  },
  {
    id: 2,
    title: "Integrating AI, IoT, and Drones for Sustainable Apple Orchard Monitoring in Society 5.0",
    event: "International Conference on Applied Algorithms (ICAA) 2025",
    date: "January 10, 2025",
    authors: "Anidipta Pal, Ankana Datta, Sukalpa Paul, Sounav Biswas",
    technologies: ["Artificial Intelligence", "IoT", "Drone Technology", "Smart Agriculture", "Society 5.0"],
    link: "#",
    guide: "Anil Kumar Bag and Dr. Diganta Sengupta"
  }
]

export default function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
              </div>

              <div className="mt-4">
                {publication.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={16} />
                  <span>View Paper</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}