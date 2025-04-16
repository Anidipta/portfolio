"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Heritage Institute of Technology, Kolkata",
      cgpa: "9.0/10",
      period: "2023 - Present",
      description:
        "Focusing on artificial intelligence, machine learning, and computer vision with specialized coursework in deep learning architectures and natural language processing.",
    },
    {
      degree: "ISC",
      specialization: "PCM with Computer Science",
      institution: "St. Stephens School, Kolkata",
      cgpa: "92.0%",
      period: "2021 - 2023",
      description:
        "Completed higher secondary education with focus on science and mathematics, laying the foundation for further studies in computer science and engineering.",
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
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center text-purple-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base text-purple-300 mb-1">{edu.institution}</h3>
                    <div className="flex items-center text-purple-400 text-sm">
                      <GraduationCap className="w-4 h-4 mr-1 text-amber-400" />
                      <p className="text-amber-400 font-mono">{edu.cgpa}</p>
                    </div>
                  </div>
                  <div className="text-sm text-rose-400 mb-3">{edu.specialization}</div>
                  <p className="text-gray-300 font-mono">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
