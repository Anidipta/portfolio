"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, Cpu, Eye, Database, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [
    { id: "all", label: "All" },
    { id: "ai", label: "AIML", icon: <Cpu className="w-4 h-4 mr-1" /> },
    { id: "computervision", label: "Computer Vision", icon: <Eye className="w-4 h-4 mr-1" /> },
    { id: "datascience", label: "Data Science", icon: <Database className="w-4 h-4 mr-1" /> },
    { id: "fullstack", label: "Full-Stack", icon: <Rocket className="w-4 h-4 mr-1" /> },
  ]

  const projects = [
    {
      title: "CryptoSentinel",
      description: "AI trading assistant that extracts signals and trades on blockchain.",
      image: "/assets/cru.png",
      categories: ["ai", "fullstack"],
      technologies: ["Python", "NLP", "Aptos", "Telegram API", "Aptos"],
      links: { github: "https://github.com/Anidipta/move_ai_hack", live: "#" },
    },
    {
      title: "QuantumTrade-X",
      description: "AI-based crypto trading platform with live market analytics.",
      image: "/assets/quan.png",
      categories: ["ai", "datascience", "fullstack"],
      technologies: ["CoinGecko API", "Binance API", "AI Agent", "GROQ API", "MongoDB"],
      links: { github: "https://github.com/Anidipta/Eolas-x-Algo", live: "#" },
    },
    {
      title: "AgroConnect – Smart Agricultural Marketplace",
      description: "AI-powered multilingual platform for secure farmer transactions.",
      image: "/assets/agr.png",
      categories: ["ai", "fullstack"],
      technologies: ["Streamlit", "Razorpay API", "Google Translate", "MongoDB"],
      links: { github: "https://github.com/Anidipta/AgroConnect", live: "https://agroconnect.streamlit.app/" },
    },
    {
      title: "Cryptonian - Learn, Play, Earn",
      description: "A gamified Web3 learning app for blockchain concepts.",
      image: "/assets/cto.png",
      categories: ["fullstack"],
      technologies: ["Ethereum", "SuperBase API", "Typescript", "Next.js"],
      links: { github: "https://github.com/Anidipta/Cryptonian_Omicode", live: "https://cryptonian.streamlit.app/" },
    },
    {
      title: "Gearbox Fault Diagnosis",
      description: "CNN-based system for detecting broken gear teeth using sensor data.",
      image: "/assets/gear.png",
      categories: ["ai"],
      technologies: ["Python", "CNN", "TensorFlow", "IoT Sensor"],
      links: { github: "https://github.com/Anidipta/Predictive-Maintenance-for-Industrial-Equipment", live: "#" },
    },
    {
      title: "Pragati Aid",
      description: "ML and blockchain system for disaster forecasting and visualization.",
      image: "/assets/pra.png",
      categories: ["ai", "datascience", "computervision"],
      technologies: ["Python", "GeoTIFF", "Ethereum", "ML", "Solidity"],
      links: { github: "https://github.com/Anidipta/Pragati-Aid", live: "#" },
    },
    {
      title: "Drone-Based Apple Orchard Management",
      description: "YOLO-powered system for counting apples and detecting diseases.",
      image: "/assets/AEML.png",
      categories: ["fullstack", "computervision"],
      technologies: ["YOLO", "Python", "Drone Data", "Arduino", "ResNET"],
      links: { github: "https://github.com/Anidipta/AEML", live: "#" },
    },
    {
      title: "Talking on Phone Alert System",
      description: "YOLO-ResNet50 system to detect phone usage in restricted zones.",
      image: "/assets/ph.png",
      categories: ["computervision", "fullstack"],
      technologies: ["YOLO", "ResNet50", "Streamlit", "Object Detection"],
      links: { github: "https://github.com/Anidipta/Hack-Fusion-2k24", live: "#" },
    },
    {
      title: "RiskSense - Fraud Detection System",
      description: "Fraud detection platform with feature engineering and model optimization.",
      image: "/assets/risk.png",
      categories: ["ai", "datascience", "fullstack"],
      technologies: ["ML", "Streamlit", "MySQL", "SMTP"],
      links: { github: "https://github.com/Anidipta/Risk-Sense", live: "https://risksense.streamlit.app/" },
    },
    {
      title: "Cloudburst Prediction System",
      description: "CNN-LSTM system for real-time cloudburst prediction with GIS data.",
      image: "/assets/cb.png",
      categories: ["ai", "datascience"],
      technologies: ["CNN", "LSTM", "GIS", "Open Street Map", "TensorFlow"],
      links: { github: "https://github.com/Jibitesh-Chakraborty2811/CloudPhishersCloudBurstFinalProject", live: "#" },
    },
    {
      title: "Crypton – Gamified Blockchain Education Platform",
      description: "Interactive platform for gamified learning of blockchain concepts.",
      image: "https://github.com/Anidipta/Crypton/blob/main/assets/icons/logo.png?raw=true",
      categories: ["fullstack"],
      technologies: ["Ethereum", "SuperBase API", "Typescript", "Next.js"],
      links: { github: "https://github.com/Anidipta/Crypton", live: "https://crypton0.streamlit.app/" },
    },
    {
      title: "OmiGuard – Flood Prediction & Relief System",
      description: "Flood prediction system using AI, drones, GIS and Web3 tools.",
      image: "/assets/omi.png",
      categories: ["fullstack", "computervision"],
      technologies: ["AVAX", "Drone", "GIS", "OpenCV", "ML"],
      links: { github: "https://github.com/Anidipta/Binary_Omicode", live: "#" },
    },
    {
      title: "Plastic Detection System",
      description: "Real-time system for detecting plastic waste in water bodies.",
      image: "/assets/pplas.png",
      categories: ["ai", "computervision"],
      technologies: ["YOLO", "Streamlit", "GEE", "MySQL", "Pytorch"],
      links: { github: "https://github.com/Anidipta/JaipurIndia_GangesRiverPlasticInterceptor", live: "#" },
    },
    {
      title: "Ball Tracking System",
      description: "Real-time detection and tracking of colored balls across video frames.",
      image: "/assets/ball.png",
      categories: ["computervision"],
      technologies: ["YOLO", "Streamlit", "SQL"],
      links: { github: "https://github.com/Anidipta/Quarter-Ball-Tracker-using-YOLO", live: "#" },
    },
    {
      title: "FinGPT – Financial Assistant",
      description: "AI agent for financial insights with multilingual support.",
      image: "/assets/logo-fingpt.jpg",
      categories: ["ai", "fullstack"],
      technologies: ["AI Agent", "Yahoo Finance API", "MongoDB", "Google Firestore", "React.js"],
      links: { github: "https://github.com/Anidipta/finance_bot", live: "#" },
    },
    {
      title: "EDVITA - Streamlining Education Success",
      description: "Test scheduling and management platform with code edito.",
      image: "/assets/edu.png",
      categories: ["fullstack"],
      technologies: ["Next.js", "TypeScript", "MongoDB", "Supabase API"],
      links: { github: "https://github.com/Anidipta/EDVITA-01", live: "https://edvita.vercel.app/" },
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        )

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

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.01 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-800/50 hover:border-amber-600/80 transition-all duration-300"
              >
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {generateParticles(15)}
                  </div>
                )}

                <div className="relative h-40 overflow-hidden bg-[hsl(0,0%,96%)] flex justify-center items-center corner-radius-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 justify-center flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  <motion.div className="flex flex-wrap gap-2 mb-4 font-mono text-base" layout>
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        layout
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Badge variant="outline" className="text-green-300 text-sm font-mono">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {(project.links.github && project.links.github !== "#") ||
                  (project.links.live && project.links.live !== "#") ? (
                    <div className="flex gap-3 w-full">
                      {project.links.github && project.links.github !== "#" && (
                        <motion.a
                          href={project.links.github}
                          className={`${
                            project.links.live && project.links.live !== "#"
                              ? "w-1/2"
                              : "w-full"
                          } text-green-300 border border-green-300 rounded-md px-4 py-2 flex items-center justify-center hover:text-purple-400 hover:border-purple-400 transition-colors`}
                          aria-label={`GitHub repository for ${project.title}`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}

                      {project.links.live && project.links.live !== "#" && (
                        <motion.a
                          href={project.links.live}
                          className={`${
                            project.links.github && project.links.github !== "#"
                              ? "w-1/2"
                              : "w-full"
                          } text-green-300 border border-green-300 rounded-md px-4 py-2 flex items-center justify-center hover:text-purple-400 hover:border-purple-400 transition-colors`}
                          aria-label={`Live demo for ${project.title}`}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}