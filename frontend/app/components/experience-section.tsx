"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Award, Briefcase, ChevronDown, ChevronUp } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Vizzle",
    duration: "Jan 2025 - Present",
    location: "Remote - Gujurat, India",
    description:"",
    achievements: [
      "Developed a face-tracking system for fashion accessories using deep learning",
      "Worked with cutting-edge GenAI technologies and computer vision algorithms",
    ],
    technologies: ["GenAI", "Computer Vision", "Virtual Reality", "Deep Learning", "Python", "C#"],
  },
  {
    id: 2,
    role: "Machine Learning Engineer",
    company: "Omdena",
    duration: "May 2024 - Present",
    location: "Remote - Worldwide",
    description:"",
    achievements: [
      "Developed time-series models to predict maize yield, achieving 15% increase in forecasting accuracy in Kenya",
      "Led data preprocessing and geospatial analysis for river water quality assessment using Rasterio",
      "Improved water quality forecasting accuracy by 20% through advanced modeling techniques",
      "Processed LCLU, CO2, and vegetable data from Google Earth Engine for Milan&apos;s Zone 9 in Italy",
      "Built interactive dashboards from scratch, improving model accuracy from 85% to 93%",
    ],
    technologies: [
      "Time-series Modeling",
      "Rasterio",
      "Google Earth Engine",
      "GIS Analysis",
      "Streamlit",
      "Looker Studio",
      "Data Visualization",
    ],
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "Evoastra Ventures",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote - Mumbai, India",
    description: "",
    achievements: [
      "Conducted data analysis and created dashboards for 6 projects, improving data accessibility by 21.67%",
      "Drove an 8.75% improvement in decision-making efficiency through data visualization",
      "Utilized Looker Studio and other visualization tools to create intuitive dashboards",
    ],
    technologies: ["Data Visualization", "Report Documentation", "Data Analysis"],
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Null Class",
    duration: "Feb 2024 - Apr 2024",
    location: "Remote - Bangalore, India",
    description: "",
    achievements: [
      "Developed a real-time emotion detection system, significantly improving accuracy",
      "Worked with OpenCV, TensorFlow, and Keras for computer vision applications",
    ],
    technologies: ["OpenCV", "TensorFlow", "Keras", "Real-time Data Processing", "Computer Vision"],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="section-container">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          A journey through my professional career and the impactful roles I&apos;ve held
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative pl-4 sm:pl-8 border-l-2 border-muted">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 relative"
            >
              <div className="absolute -left-[33px] sm:-left-[41px] w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted/30 border-4 border-background flex items-center justify-center">
                <Briefcase size={24} className="text-primary" />
              </div>

              <div className="glass-card p-4 sm:p-8 ml-4 sm:ml-8 glass-card-hover">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                  <h3 className="text-2xl font-bold gradient-text">{exp.role}</h3>
                  <span className="text-xl text-secondary font-medium">{exp.company}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="mb-6 text-lg text-gray-300">{exp.description}</p>

                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium py-2 px-4 rounded-md border border-muted/50 mb-6"
                >
                  {expandedId === exp.id ? (
                    <>
                      <ChevronUp size={18} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={18} />
                      Show More
                    </>
                  )}
                </button>

                {expandedId === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-primary mb-4">
                        <Award size={18} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-secondary mr-2 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-muted/50 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

