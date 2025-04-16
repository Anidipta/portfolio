"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Satellite, Eye, Code, Award, BookOpen, Briefcase, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import type { ColorTheme } from "@/components/theme-selector"

interface AboutProps {
  theme: ColorTheme
}

export default function About({ theme }: AboutProps) {
  const [showStats, setShowStats] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [iconRotation, setIconRotation] = useState(0)

  const handleClick = () => {
    if (animating) return
    setAnimating(true)
    setIconRotation(-45)
    setShowStats(true)

    setTimeout(() => {
      // Shake animation then reset rotation
      setIconRotation(0)
      setTimeout(() => {
        setShowStats(false)
        setAnimating(false)
      }, 200) // Wait for shake to end before hiding stats
    }, 2000)
  }

  const stats = [
    { value: "1.2+", color:theme.primaryClass, label: "Years Experience", icon: <Briefcase className={`w-4 h-4 ${theme.primaryClass}`} /> },
    { value: "20+", color:theme.secondaryClass, label: "Projects Completed", icon: <Code className={`w-4 h-4 ${theme.secondaryClass}`} /> },
    { value: "2", color:theme.primaryClass, label: "Publications", icon: <BookOpen className={`w-4 h-4 ${theme.primaryClass}`} /> },
    { value: "8+", color:theme.secondaryClass, label: "Collaborations", icon: <Users className={`w-4 h-4 ${theme.secondaryClass}`} /> },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r ${theme.gradientClass}`}>
            About Me
          </h2>
          <div className={`h-1 w-20 bg-${theme.primary}-500 mx-auto`} />
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center"
          >
            <div className={`relative w-72 h-72 rounded-2xl overflow-hidden border-2 border-${theme.primary}-500`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${theme.primary}-900/40 to-black/60 z-10`} />
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQFusbAPXu7_Jw/profile-displayphoto-shrink_800_800/B56ZRT8U_8GoAc-/0/1736575112043?e=1748476800&v=beta&t=ZjdLlU765FzGnciHMoG3Kd_55v4JZxIFh_mhjOQ4VFQ"
                alt="Anidipta Pal"
                fill
                className="object-cover"
              />
            </div>

            {/* Satellite Icon with Animation */}
            <motion.div
              onClick={handleClick}
              animate={{
                rotate: iconRotation,
                x: iconRotation === 0 && showStats ? [0, -5, 5, -5, 5, 0] : 0,
              }}
              transition={{
                duration: iconRotation === 0 && showStats ? 0.6 : 0.3,
              }}
              className={`mt-6 w-24 h-24 cursor-pointer bg-gradient-to-br from-amber-600/30 to-rose-600/65 rounded-full flex items-center justify-center`}
            >
              <Satellite className="w-10 h-10 text-white" />
            </motion.div>

            {/* Animated Frame + Stats */}
            <AnimatePresence>
              {showStats && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 gap-3 mt-2 w-full max-w-s"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg border border-rose-800/40`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {stat.icon}
                        <span className="text-gray-400 text-sm">{stat.label}</span>
                      </div>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column - Bio & Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Anidipta Pal <span className={`text-${theme.primary}-500`}>  | </span> AI/ML Engineer & Data Scientist
            </h3>
            <p className="text-gray-400 mb-3 leading-relaxed">
            Computer vision person with a focus on building intelligent systems that solve real-world problems. 
            Currently, I work as a Machine Learning Engineer at Omdena and a Python Developer at Mahakarshan.</p>
            <p className="text-gray-400 mb-3 leading-relaxed">
            Worked with these technologies to address challenges in agriculture, climate change, and disaster management  mainly.
            </p>
            <p className="text-gray-400 mb-3 leading-relaxed">
            Technically, I'm proficient in Python, C/C++, and Java, and skilled in frameworks like TensorFlow, PyTorch, and scikit-learn.
            I enjoy turning complex data into insights through machine learning and data visualization.
            </p>

            <div className="mb-8">
              <h4 className={`text-xl font-semibold ${theme.primaryClass} mb-4`}>Key Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className={`w-5 h-5 text-${theme.primary}-500 mr-2 mt-1`} />
                  <span className="text-gray-300">Bounty Winner + 1st Place Eglos X Aglos Hackathon</span>
                </li>
                <li className="flex items-start">
                  <Award className={`w-5 h-5 text-${theme.primary}-500 mr-2 mt-1`} />
                  <span className="text-gray-300">2nd Place at the Video Frame Sorting Hackathon</span>
                </li>
                <li className="flex items-start">
                  <Award className={`w-5 h-5 text-${theme.primary}-500 mr-2 mt-1`} />
                  <span className="text-gray-300">Space India Hackathon Finalist</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[  
                { Icon: Eye, title: "Computer Vision", desc: "Advanced algorithms for image analysis", iconClass: theme.primaryClass },
                { Icon: Satellite, title: "Satellite Imagery", desc: "Remote sensing & geospatial analysis", iconClass: theme.secondaryClass },
                { Icon: Cpu, title: "Machine Learning", desc: "AI-powered image classification", iconClass: theme.primaryClass },
                { Icon: Code, title: "Software Development", desc: "Building scalable CV solutions", iconClass: theme.secondaryClass }
              ].map(({ Icon, title, desc, iconClass }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-800/50 backdrop-blur-sm p-3 rounded-md border border-${theme.primary}-800/30`}
                >
                  <div className="flex items-center space-x-3 mb-1">
                    <Icon className={`w-6 h-6 ${iconClass}`} />
                    <h4 className="font-semibold text-gray-100 text-sm">{title}</h4>
                  </div>
                  <p className="text-gray-400 text-xs">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
