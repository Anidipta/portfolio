"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, Satellite, Map, CloudRain, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All" },
    { id: "satellite", label: "Satellite", icon: <Satellite className="w-4 h-4 mr-1" /> },
    { id: "mapping", label: "Mapping", icon: <Map className="w-4 h-4 mr-1" /> },
    { id: "climate", label: "Climate", icon: <CloudRain className="w-4 h-4 mr-1" /> },
    { id: "ai", label: "AI", icon: <Cpu className="w-4 h-4 mr-1" /> },
  ]

  const projects = [
    {
      id: 1,
      title: "SatelliteVision",
      description:
        "An advanced computer vision platform for analyzing satellite imagery and detecting objects, changes, and patterns.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["satellite", "ai"],
      technologies: ["Python", "TensorFlow", "OpenCV", "AWS"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "GeoSpatial Analyzer",
      description:
        "A tool for processing and visualizing geospatial data from multiple satellite sources with interactive mapping capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["mapping", "satellite"],
      technologies: ["JavaScript", "React", "Mapbox", "GDAL"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 3,
      title: "ClimateWatch",
      description:
        "Monitoring climate change indicators through satellite imagery analysis, focusing on glaciers, forests, and urban heat islands.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["climate", "satellite"],
      technologies: ["Python", "PyTorch", "QGIS", "Google Earth Engine"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 4,
      title: "DeepSat",
      description:
        "Deep learning models for satellite image classification and segmentation with a focus on agricultural applications.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "satellite"],
      technologies: ["Python", "Keras", "GDAL", "Docker"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 5,
      title: "Urban Mapper",
      description:
        "Automated mapping of urban infrastructure and changes over time using multi-temporal satellite imagery.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["mapping", "ai"],
      technologies: ["Python", "TensorFlow", "PostGIS", "Leaflet"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 6,
      title: "Disaster Response System",
      description: "Real-time analysis of satellite imagery for rapid disaster assessment and response coordination.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["climate", "mapping"],
      technologies: ["Python", "FastAPI", "Redis", "Sentinel Hub"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.categories.includes(activeCategory))

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-300">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-900/60 border-purple-800/30 hover:border-purple-600/50 text-gray-300"
              } rounded-full px-4 py-2 flex items-center`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80"></div>
                  <div className="absolute bottom-0 left-0 p-4 flex gap-2">
                    {project.categories.map((cat) => {
                      const categoryObj = categories.find((c) => c.id === cat)
                      return (
                        <Badge key={cat} className="bg-purple-600/80 text-white">
                          {categoryObj?.icon}
                          {categoryObj?.label}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-800/80 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
