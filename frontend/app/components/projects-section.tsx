"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

// Define all technology tags for projects
const allTechnologies = [
  "Python",
  "Machine Learning",
  "Blockchain",
  "GeoTIFF",
  "Data Visualization",
  "YOLO",
  "Computer Vision",
  "IoT",
  "Cloud Computing",
  "Dashboard Development",
  "ResNet50",
  "Streamlit",
  "Real-time Detection",
  "Feature Engineering",
  "Model Optimization",
  "Quantization",
  "CNN",
  "LSTM",
  "GIS",
  "Meteorological Data",
  "Time Series Analysis",
]

// Define projects with their technologies
const projects = [
  {
    id: 1,
    title: "Pragati Aid",
    description:
      "A disaster forecasting system using machine learning and blockchain, improving prediction accuracy by 8.7% and ensuring secure donations.",
    longDescription:
      "Developed a comprehensive disaster forecasting system that combines machine learning algorithms with blockchain technology. The system improves prediction accuracy by 8.7% compared to traditional methods and ensures secure, transparent donation tracking. Implemented GeoTIFF-based visualizations and district-level forecasting, achieving 96% accuracy and enhancing real-time disaster preparedness by 21%.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "Machine Learning", "Blockchain", "GeoTIFF", "Data Visualization"],
    liveLink: "#",
    githubLink: "https://github.com/Anidipta/Hack-Synthesis",
    featured: true,
  },
  {
    id: 2,
    title: "Drone-Based Intelligent System for Apple Orchard Management",
    description:
      "A cloud-based apple orchard management system using YOLO for apple counting, disease classification, and leaf disease detection.",
    longDescription:
      "Developed a cloud-based apple orchard management system using YOLO for apple counting, disease classification, and leaf disease detection, integrating cloud storage and IoT sensors for real-time data analysis. Designed and deployed a Multimodal Decision-Level Fusion pipeline and created a user-friendly dashboard for efficient monitoring, visualization, and decision-making.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["YOLO", "Computer Vision", "IoT", "Cloud Computing", "Dashboard Development"],
    liveLink: "#",
    githubLink: "https://github.com/Anidipta/Hack-Heritage-24",
    featured: true,
  },
  {
    id: 3,
    title: "People Talking on Phone in Danger Zones",
    description:
      "A real-time system using YOLO and ResNet50 to detect people talking on phones in no-mobile zones, achieving 93% detection accuracy.",
    longDescription:
      "Developed a real-time system using YOLO and ResNet50 to detect people talking on phones in no-mobile zones, deployed through Streamlit, achieving 93% detection accuracy. Created software for hardware stimulation, bounding box algorithms, and IOU curves, improving model performance by 98.79% in detection precision.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["YOLO", "ResNet50", "Streamlit", "Computer Vision", "Real-time Detection"],
    liveLink: "#",
    githubLink: "https://github.com/Anidipta/Hack-Fusion",
    featured: true,
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description:
      "A machine learning-based fraud detection system, achieving 95% accuracy through model optimization and quantization.",
    longDescription:
      "Developed a machine learning-based fraud detection system, achieving 95% accuracy, through model optimization and quantization, enhancing fraud detection efficiency. Implemented feature engineering, model evaluation techniques, and model optimization with quantization, improving system performance and user experience.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Machine Learning", "Feature Engineering", "Model Optimization", "Quantization"],
    liveLink: "#",
    githubLink: "https://github.com/Anidipta",
    featured: true,
  },
  {
    id: 5,
    title: "Cloudburst Prediction System",
    description:
      "A real-time CNN-LSTM model using GIS-based predictions from meteorological data, achieving 97-98% accuracy.",
    longDescription:
      "Built a real-time CNN-LSTM model using GIS-based predictions from meteorological data, achieving 97-98% accuracy. The system processes complex weather patterns and historical data to provide early warnings for potential cloudburst events, helping communities prepare and mitigate potential damage.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["CNN", "LSTM", "GIS", "Meteorological Data", "Time Series Analysis"],
    liveLink: "#",
    githubLink: "https://github.com/Anidipta/Hack-Heritage-23",
    featured: true,
  },
]

export default function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Toggle technology selection
  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech))
    } else {
      setSelectedTech([...selectedTech, tech])
    }
  }

  // Filter projects based on selected technologies
  const filteredProjects =
    selectedTech.length > 0
      ? projects.filter((project) => selectedTech.some((tech) => project.technologies.includes(tech)))
      : projects

  return (
    <section id="projects" className="section-container">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          Explore my latest work showcasing innovative solutions and creative problem-solving
        </motion.p>
      </div>

      {/* Technology filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-all ${
              selectedTech.includes(tech)
                ? "bg-primary text-white"
                : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Clear filters button */}
      {selectedTech.length > 0 && (
        <div className="text-center mb-8">
          <button onClick={() => setSelectedTech([])} className="text-sm text-primary hover:text-secondary underline">
            Clear filters
          </button>
        </div>
      )}

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="project-card"
          >
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <h3 className="project-title gradient-text">{project.title}</h3>

              <p className="project-description">
                {expandedProject === project.id ? project.longDescription : project.description}
              </p>

              <div className="mt-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className={`tech-tag ${selectedTech.includes(tech) ? "tech-tag-active" : ""}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <div className="flex gap-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>

                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="text-sm text-primary hover:text-secondary"
                >
                  {expandedProject === project.id ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

