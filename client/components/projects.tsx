"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, Cpu, Eye, Database, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = [
    { id: "all", label: "All" },
    { id: "ai", label: "AIML", icon: <Cpu className="w-4 h-4 mr-1" /> },
    { id: "computervision", label: "Computer Vision", icon: <Eye className="w-4 h-4 mr-1" /> },
    { id: "datascience", label: "Data Science", icon: <Database className="w-4 h-4 mr-1" /> },
    { id: "fullstack", label: "Full-Stack", icon: <Rocket className="w-4 h-4 mr-1" /> },
  ]

  const projects = [
    {
      id: 1,
      title: "VisionAI",
      description: "Advanced computer vision system for real-time object detection and image analysis with deep learning.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "computervision"],
      technologies: ["Python", "PyTorch", "OpenCV", "TensorRT"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "DataInsight",
      description: "Interactive dashboard for complex data analysis with machine learning integration and visualization.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["datascience", "ai"],
      technologies: ["Python", "Scikit-learn", "Power BI", "Pandas"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 3,
      title: "FullStack AI",
      description: "End-to-end AI application with React frontend, FastAPI backend, and machine learning model serving.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["fullstack", "ai"],
      technologies: ["React", "FastAPI", "PyTorch", "Docker"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 4,
      title: "CV Analyzer",
      description: "Computer vision platform for automated image processing and feature extraction at scale.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["computervision", "datascience"],
      technologies: ["Python", "OpenCV", "TensorFlow", "AWS"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 5,
      title: "AI Dashboard",
      description: "Comprehensive dashboard for monitoring and interacting with multiple AI models in production.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["fullstack", "datascience"],
      technologies: ["React", "Node.js", "MongoDB", "D3.js"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 6,
      title: "Deep Learning API",
      description: "Scalable API for serving deep learning models with automatic scaling and monitoring.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "fullstack"],
      technologies: ["FastAPI", "PyTorch", "Kubernetes", "Prometheus"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  const filteredProjects =
    activeCategory === "all" 
      ? projects 
      : projects.filter((project) => project.categories.includes(activeCategory))

  // Generate particles for tech badges
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 4 + 2
      return (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          transition={{ 
            duration: Math.random() * 1 + 1,
            repeat: Infinity,
            delay: Math.random() * 0.5
          }}
          className="absolute rounded-full bg-purple-400"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )
    })
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-300">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        {/* Animated category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`${
                  activeCategory === category.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-900/60 border-purple-800/30 hover:border-purple-600/50 text-green-300"
                } rounded-full px-4 py-2 flex items-center`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects grid with tech particle effects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300"
              >
                {/* Tech badge particles */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {generateParticles(15)}
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80"></div>
                  {/* <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                    {project.categories.map((cat) => {
                      const categoryObj = categories.find((c) => c.id === cat)
                      return (
                        <Badge key={cat} className="bg-purple-600/80 text-white">
                          {categoryObj?.icon}
                          {categoryObj?.label}
                        </Badge>
                      )
                    })}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4 font-medium text-m"
                    layout
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        layout
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge variant="outline" className="text-green-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.links.github}
                      className="text-green-300 hover:text-purple-400 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      className="text-green-300 hover:text-purple-400 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Floating tech bubbles in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {["Python", "React", "PyTorch", "TensorFlow", "OpenCV", "FastAPI"].map((tech, i) => (
            <motion.span
              key={i}
              initial={{ 
                opacity: 0,
                y: Math.random() * 100,
                x: Math.random() * 100
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                y: [Math.random() * 100, Math.random() * 100 + 50],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
              className="absolute text-xs text-purple-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 12 + 8}px`,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}