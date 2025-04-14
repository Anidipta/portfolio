"use client"

import { motion } from "framer-motion"
import { Cpu, Satellite, Eye, Code, Award, BookOpen, Briefcase, Users } from "lucide-react"
import Image from "next/image"
import type { ColorTheme } from "@/components/theme-selector"

interface AboutProps {
  theme: ColorTheme
}

export default function About({ theme }: AboutProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    { value: "1.2+", label: "Years Experience", icon: <Briefcase className={`w-4 h-4 ${theme.primaryClass}`} /> },
    { value: "20+", label: "Projects Completed", icon: <Code className={`w-4 h-4 ${theme.primaryClass}`} /> },
    { value: "2", label: "Publications", icon: <BookOpen className={`w-4 h-4 ${theme.primaryClass}`} /> },
    { value: "10+", label: "Collaborations", icon: <Users className={`w-4 h-4 ${theme.primaryClass}`} /> },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r ${theme.gradientClass}`}
          >
            About Me
          </h2>
          <div className={`h-1 w-20 bg-${theme.primary}-500 mx-auto`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            <div className={`aspect-square rounded-2xl overflow-hidden border-2 border-${theme.primary}-500 relative`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${theme.primary}-900/40 to-black/60 z-10`}></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-${theme.primary}-600 to-${theme.secondary}-600 rounded-full flex items-center justify-center`}
            >
              <Satellite className="w-12 h-12 text-white" />
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`bg-gray-900/60 backdrop-blur-sm p-4 rounded-lg border border-${theme.primary}-800/30`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                  </div>
                  <div className={`text-2xl font-bold ${theme.primaryClass}`}>{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Passionate Computer Vision & Satellite Imagery Engineer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in developing cutting-edge computer vision algorithms for satellite imagery analysis. With
              expertise in remote sensing, image processing, and machine learning, I transform complex geospatial data
              into actionable insights.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My work bridges the gap between advanced computer vision techniques and real-world applications in
              environmental monitoring, urban planning, agriculture, and disaster response.
            </p>

            {/* Achievements section */}
            <div className="mb-8">
              <h4 className={`text-xl font-semibold ${theme.primaryClass} mb-4`}>Key Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className={`w-5 h-5 text-${theme.primary}-500 mr-2 mt-1 flex-shrink-0`} />
                  <span className="text-gray-300">
                    Developed a satellite imagery analysis platform that increased detection accuracy by 35%
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className={`w-5 h-5 text-${theme.primary}-500 mr-2 mt-1 flex-shrink-0`} />
                  <span className="text-gray-300">
                    Published 15+ research papers in top-tier computer vision and remote sensing journals
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className={`w-5 h-5 text-${theme.primary}-500 mr-2 mt-1 flex-shrink-0`} />
                  <span className="text-gray-300">
                    Led a team that won the International Satellite Imagery Competition 2022
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-${theme.primary}-800/30`}
              >
                <Eye className={`w-8 h-8 ${theme.primaryClass} mb-2`} />
                <h4 className="font-semibold text-gray-100 mb-1">Computer Vision</h4>
                <p className="text-gray-400 text-sm">Advanced algorithms for image analysis</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-${theme.primary}-800/30`}
              >
                <Satellite className={`w-8 h-8 ${theme.secondaryClass} mb-2`} />
                <h4 className="font-semibold text-gray-100 mb-1">Satellite Imagery</h4>
                <p className="text-gray-400 text-sm">Remote sensing & geospatial analysis</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-${theme.primary}-800/30`}
              >
                <Cpu className={`w-8 h-8 ${theme.primaryClass} mb-2`} />
                <h4 className="font-semibold text-gray-100 mb-1">Machine Learning</h4>
                <p className="text-gray-400 text-sm">AI-powered image classification</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-${theme.primary}-800/30`}
              >
                <Code className={`w-8 h-8 ${theme.secondaryClass} mb-2`} />
                <h4 className="font-semibold text-gray-100 mb-1">Software Development</h4>
                <p className="text-gray-400 text-sm">Building scalable CV solutions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
