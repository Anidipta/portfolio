"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, School, Calendar, MapPin } from "lucide-react"

const educationItems = [
  {
    id: 1,
    institution: "Heritage Institute of Technology, Kolkata",
    degree: "B.Tech in Computer Science and Engineering - AI/ML",
    duration: "2023 - Present",
    location: "Kolkata, West Bengal",
    cgpa: "8.98",
    description:
      "Focusing on artificial intelligence, machine learning, and computer vision with specialized coursework in deep learning architectures and natural language processing.",
    icon: <GraduationCap className="text-primary" size={24} />,
  },
  {
    id: 2,
    institution: "St. Stephen&apos;s School, Kolkata",
    degree: "CICSE - Class 10+2",
    duration: "2010 - 2023",
    location: "Kolkata, West Bengal",
    cgpa: "9.25",
    description:
      "Completed higher secondary education with focus on science and mathematics, laying the foundation for further studies in computer science and engineering.",
    icon: <Briefcase className="text-primary" size={24} />,
  },
]

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" className="section-container">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          My academic journey and educational qualifications
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto education-timeline">
        {educationItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="timeline-item"
          >
            <div className="timeline-dot absolute -left-[9px] w-4 h-4 rounded-full bg-primary">
              <div className="absolute -left-10 -top-2 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            <div className="timeline-content glass-card-hover">
              <h3 className="text-xl font-bold gradient-text mb-2">{item.institution}</h3>
              <h4 className="text-lg font-semibold mb-3">{item.degree}</h4>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-primary" />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-primary" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <School size={14} className="text-primary" />
                  <span>CGPA: {item.cgpa} / 10.00</span>
                </div>
              </div>

              <p className="text-muted-foreground">{item.description}</p>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/5 rounded-full blur-xl"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

