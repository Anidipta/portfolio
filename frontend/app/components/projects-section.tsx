"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"

// Define project categories
const categories = ["All Projects", "ML Projects", "Web2/3 Projects", "Analytics Projects"]

// Define projects with their technologies and categories
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
    category: "ML Projects",
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
    category: "ML Projects",
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
    category: "ML Projects",
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
    category: "ML Projects",
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
    category: "ML Projects",
    liveLink: "#",
    githubLink: "https://github.com/Anidipta/Hack-Heritage-23",
    featured: true,
  },
  {
    id: 6,
    title: "Decentralized Voting System",
    description:
      "A blockchain-based voting system ensuring transparent and tamper-proof elections with enhanced security features.",
    longDescription:
      "Developed a decentralized voting system using blockchain technology to ensure transparent, secure, and tamper-proof elections. Implemented smart contracts for vote validation and integrated biometric authentication for voter verification, resulting in a 99.9% secure voting process.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Blockchain", "Web Development", "Smart Contracts", "Security"],
    category: "Web2/3 Projects",
    liveLink: "#",
    githubLink: "https://github.com/Anidipta",
    featured: true,
  },
  {
    id: 7,
    title: "Agricultural Yield Analytics Dashboard",
    description:
      "An interactive dashboard for analyzing agricultural yield data across different regions and crop types.",
    longDescription:
      "Created a comprehensive analytics dashboard for agricultural yield data visualization and analysis. The system integrates multiple data sources to provide insights on crop performance across different regions, soil types, and weather conditions, helping farmers make data-driven decisions to improve productivity.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Data Analysis", "Dashboard Development", "Data Visualization", "Python"],
    category: "Analytics Projects",
    liveLink: "#",
    githubLink: "https://github.com/Anidipta",
    featured: true,
  },
]

// Predefined technology lists for each category
const mlTechnologies = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "YOLO",
  "CNN",
  "LSTM",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "OpenCV",
  "ResNet50",
  "IoT",
  "Cloud Computing",
  "Real-time Detection",
  "Feature Engineering",
  "Model Optimization",
  "Quantization"
].sort()

const webTechnologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Blockchain",
  "Smart Contracts",
  "Web3",
  "Solidity",
  "Ethereum",
  "HTML/CSS",
  "Tailwind CSS",
  "Security",
  "API Development",
  "Database",
  "Authentication"
].sort()

const analyticsTechnologies = [
  "Python",
  "Data Analysis",
  "Data Visualization",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Tableau",
  "Power BI",
  "SQL",
  "GIS",
  "Time Series Analysis",
  "Statistical Analysis",
  "Dashboard Development",
  "Business Intelligence",
  "ETL"
].sort()

// Get all unique technologies for "All Projects"
const allTechnologies = Array.from(
  new Set([
    ...mlTechnologies,
    ...webTechnologies,
    ...analyticsTechnologies
  ])
).sort()

export default function ProjectsSection() {
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Get current category's technologies
  const getCurrentTechnologies = () => {
    switch (selectedCategory) {
      case "ML Projects":
        return mlTechnologies
      case "Web2/3 Projects":
        return webTechnologies
      case "Analytics Projects":
        return analyticsTechnologies
      default:
        return allTechnologies
    }
  }

  // Toggle technology selection
  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech))
    } else {
      setSelectedTech([...selectedTech, tech])
    }
  }

  // Filter projects based on selected technologies and category
  const filteredProjects = projects.filter((project) => {
    // Filter by category
    const categoryMatch = selectedCategory === "All Projects" || project.category === selectedCategory

    // Filter by technologies
    const techMatch = selectedTech.length === 0 || selectedTech.some((tech) => project.technologies.includes(tech))

    return categoryMatch && techMatch
  })

  // Get projects to display based on showAllProjects state
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3)

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

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category ? "bg-primary text-white shadow-lg" : "bg-card hover:bg-opacity-80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filter toggle button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm font-medium hover:bg-opacity-80"
        >
          <Filter size={16} />
          {showFilters ? "Hide Filters" : "Show Technology Filters"}
        </button>
      </div>

      {/* Technology filter buttons */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {getCurrentTechnologies().map((tech) => (
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
      )}

      {/* Clear filters button */}
      {(selectedTech.length > 0 || selectedCategory !== "All Projects") && (
        <div className="text-center mb-8">
          <button
            onClick={() => {
              setSelectedTech([])
              setSelectedCategory("All Projects")
              setShowAllProjects(false)
            }}
            className="text-sm text-primary hover:text-secondary underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.length > 0 ? (
          <>
            {displayedProjects.map((project) => (
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
                  <div className="absolute top-2 right-2">
                    <span className="px-3 py-1 bg-primary/80 text-white rounded-full text-xs">
                      {project.category.replace(" Projects", "")}
                    </span>
                  </div>
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
            
            {/* Show More button */}
            {!showAllProjects && filteredProjects.length > 3 && (
              <div className="col-span-full flex justify-center mt-8">
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  Show More Projects
                  <ExternalLink size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No projects match the selected filters.</p>
            <button
              onClick={() => {
                setSelectedTech([])
                setSelectedCategory("All Projects")
                setShowAllProjects(false)
              }}
              className="mt-4 text-primary hover:text-secondary underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

