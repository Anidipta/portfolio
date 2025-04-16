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
      title: "CryptoSentinel",
      description:
        "AI-driven trading assistant that extracts signals from Telegram and executes trades on Aptos. Implemented NLP-based market analysis, self-custodial trading, and real-time portfolio tracking.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-3e58-61f6-afa4-0426901601e3/raw?se=2025-04-16T08%3A20%3A27Z&sp=r&sv=2024-08-04&sr=b&scid=89d20d80-fe8c-570d-a425-4dacd255ca83&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T23%3A53%3A16Z&ske=2025-04-16T23%3A53%3A16Z&sks=b&skv=2024-08-04&sig=8Byr%2BwkdnbB966Ibd53feDaMyJjGNF46sG7yl2uj2Jo%3D",
      categories: ["ai", "fullstack"],
      technologies: ["Python", "NLP", "Aptos", "Telegram API"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "QuantumTrade-X",
      description:
        "AI-powered crypto trading assistant with real-time market analysis and trading signals. Integrated Binance & CoinGecko APIs to fetch live data and automate grid trading strategies.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-9654-61f6-8e68-f409748ac81e/raw?se=2025-04-16T08%3A24%3A06Z&sp=r&sv=2024-08-04&sr=b&scid=aca10177-d13e-5a0a-82b7-74369aa3dea9&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T21%3A51%3A28Z&ske=2025-04-16T21%3A51%3A28Z&sks=b&skv=2024-08-04&sig=6XIui8KG9/Q57bsnCcGj7siE%2B0kt%2BCCgt19ZE/kE05Y%3D",
      categories: ["ai", "datascience","fullstack"],
      technologies: ["Python", "CoinGecko API", "Binance API", "AI"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 3,
      title: "AgroConnect – A Smart Agricultural Marketplace",
      description:
        "Digital platform for farmers with real-time chat, AI-powered pricing insights, and secure transactions. Integrated Razorpay API, Google Translate for multilingual support, and a Streamlit analytics dashboard.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-30ac-61f6-a93d-6b46152ec120/raw?se=2025-04-16T08%3A25%3A35Z&sp=r&sv=2024-08-04&sr=b&scid=ae851816-2363-5557-a93a-b52b954120c6&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T21%3A51%3A29Z&ske=2025-04-16T21%3A51%3A29Z&sks=b&skv=2024-08-04&sig=58OO0O8L5YEkUoGIsHd/dXqXipGkrJJvY7zcuOCnI5U%3D",
      categories: ["ai", "fullstack"],
      technologies: ["Python", "Streamlit", "Razorpay API", "Google Translate"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 4,
      title: "Gearbox Fault Diagnosis",
      description:
        "CNN-based system to classify sensor readings and detect broken gear teeth under various load conditions. Evaluated optimizers like Adam, SMORMS3, RMSProp, and analyzed training performance with metrics.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-6360-61f6-ad76-c4ea1f8381cd/raw?se=2025-04-16T08%3A26%3A07Z&sp=r&sv=2024-08-04&sr=b&scid=b2565372-7378-549d-9242-293d518486ef&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T06%3A33%3A36Z&ske=2025-04-17T06%3A33%3A36Z&sks=b&skv=2024-08-04&sig=LQXo/p5F2%2BiiDywY10F%2Bul41NvvRvhlSfV4UF9IMAjM%3D",
      categories: ["ai"],
      technologies: ["Python", "CNN", "TensorFlow", "Sensor Data"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 5,
      title: "Pragati Aid",
      description:
        "Machine learning and Web3-based disaster forecasting system. Integrated GeoTIFF-based visualizations and district-level forecasting, improving real-time disaster preparedness by 21%.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-36dc-61f6-bade-bf4045bee456/raw?se=2025-04-16T08%3A27%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=0a92084d-d3fc-5995-984c-4ba5d64f086d&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T06%3A50%3A40Z&ske=2025-04-17T06%3A50%3A40Z&sks=b&skv=2024-08-04&sig=Ifs8oHVVx0O%2BDyTB%2B8nUkJLX/NuICsJcg64jJZUGYgE%3D",
      categories: ["ai", "datascience","computervision"],
      technologies: ["Python", "GeoTIFF", "Web3", "ML"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 6,
      title: "Drone-Based Intelligent System for Apple Orchard Management",
      description:
        "AI-powered orchard management system using YOLO for apple counting and disease detection. Built a Multimodal Decision-Level Fusion pipeline and an interactive dashboard.",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-68b4-61f6-b548-70bfb01e2590/raw?se=2025-04-16T08%3A30%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=4555ee0f-6aa7-5b47-9b6b-a4e20fbbd147&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T02%3A06%3A16Z&ske=2025-04-17T02%3A06%3A16Z&sks=b&skv=2024-08-04&sig=ytJnX48GPGlQx7CH3zBwLJ/qa37LSxas9C1yxl31Tuc%3D",
      categories: ["fullstack", "computervision"],
      technologies: ["YOLO", "Python", "Drone Data", "Dashboard"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 7,
      title: "People Talking on Phone in Danger Zones",
      description:
        "YOLO-ResNet50-based system to detect mobile phone usage in restricted zones with 93% accuracy. Designed advanced bounding box algorithms and hardware simulations.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["computervision", "fullstack"],
      technologies: ["YOLO", "ResNet50", "Python", "Object Detection"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 8,
      title: "Fraud Detection System",
      description:
        "Fraud detection model with 95% accuracy, leveraging feature engineering and model quantization. Optimized system performance and implemented evaluation techniques.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "datascience","fullstack"],
      technologies: ["Python", "ML", "Feature Engineering", "Quantization"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 9,
      title: "Cloudburst Prediction System",
      description:
        "Real-time CNN-LSTM model for cloudburst predictions using GIS and meteorological data. Achieved 97-98% accuracy, improving early warning systems.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "datascience"],
      technologies: ["CNN", "LSTM", "GIS", "Meteorological Data"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 10,
      title: "Crypton – Gamified Blockchain Education Platform",
      description:
        "A gamified educational platform that makes learning blockchain and Web3 technologies fun and interactive deployed in Ethereum.",
      image: "https://github.com/Anidipta/Crypton/blob/main/assets/icons/logo.png?raw=true",
      categories: ["fullstack"],
      technologies: ["Ethereum", "Web3", "Gamification", "Blockchain"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 11,
      title: "OmiGuard – ML-Powered Flood Prediction & Relief System",
      description:
        "AI-powered flood prediction and relief system using ML, computer vision, drones, and Web3 for disaster management. Integrated with Avalanche Web3.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["fullstack", "computervision"],
      technologies: ["AVAX", "Drone", "GIS", "FloodNET"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 12,
      title: "Plastic Detection System",
      description:
        "YOLO + Streamlit-based real-time system to detect plastic waste in rivers and lakes for environmental monitoring",
      image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-25d4-61f6-bc8c-31c1d52fc401/raw?se=2025-04-16T08%3A33%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=854914f3-1a23-5c09-b3fd-990cbb0459a5&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T00%3A17%3A42Z&ske=2025-04-17T00%3A17%3A42Z&sks=b&skv=2024-08-04&sig=T0xr8Dq9vPUhusHKls54wsTT83TLhS2zWNtGK8u/h7Y%3D",
      categories: ["ai", "computervision"],
      technologies: ["YOLO", "Streamlit","Google Earth Engine"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 13,
      title: "Ball Tracking System",
      description:
        "Real-time system that detects and tracks colored balls across video quadrants with event logging.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["computervision"],
      technologies: ["YOLO", "Streamlit"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 14,
      title: " FinGPT – AI-Powered Financial Assistant",
      description:
        "AI-driven financial assistant that simplifies investing for beginners with real-time insights and multi-language support.",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["ai", "fullstack"],
      technologies: ["AI Agent", "Yahoo Finance API", "Google Firestore"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ];
  

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

                <div className="relative h-48 overflow-hidden bg-[hsl(0,0%,96%)] flex justify-center items-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={192} // h-48 = 192px
                    className="object-contain h-full"
                  />
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80"></div> */}
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
      </div>
    </section>
  )
}