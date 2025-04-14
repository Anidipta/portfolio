"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      specialization: "Computer Vision & Machine Learning",
      institution: "Stanford University",
      period: "2013 - 2016",
      description:
        "Researched novel deep learning approaches for satellite image analysis. Thesis focused on multi-spectral image segmentation techniques.",
    },
    {
      degree: "M.S. in Electrical Engineering",
      specialization: "Signal Processing",
      institution: "Massachusetts Institute of Technology",
      period: "2011 - 2013",
      description:
        "Specialized in digital signal processing with applications in remote sensing. Developed algorithms for satellite image enhancement and restoration.",
    },
    {
      degree: "B.S. in Computer Engineering",
      specialization: "Computer Systems",
      institution: "University of California, Berkeley",
      period: "2007 - 2011",
      description:
        "Focused on computer architecture and embedded systems. Senior project involved building an automated satellite image classification system.",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-300">
            Education
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-purple-700 pl-8 ml-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-purple-800/30 hover:border-purple-600/50 transition-colors duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center text-purple-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="text-lg text-purple-300 mb-1">{edu.institution}</div>
                  <div className="text-sm text-gray-400 mb-3">{edu.specialization}</div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
