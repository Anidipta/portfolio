"use client"

import { motion } from "framer-motion"
import { Building2, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Computer Vision Engineer",
      company: "SatelliteAI Technologies",
      period: "2021 - Present",
      description:
        "Leading the development of advanced computer vision algorithms for satellite imagery analysis. Implemented deep learning models for object detection and segmentation in remote sensing data.",
    },
    {
      title: "Computer Vision Researcher",
      company: "GeoSpatial Research Institute",
      period: "2018 - 2021",
      description:
        "Conducted research on novel approaches to satellite image processing. Developed algorithms for change detection and land cover classification using multi-spectral imagery.",
    },
    {
      title: "Machine Learning Engineer",
      company: "EarthView Analytics",
      period: "2016 - 2018",
      description:
        "Built machine learning pipelines for processing and analyzing satellite imagery. Worked on feature extraction and classification models for environmental monitoring applications.",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-700 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 top-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-blue-800/30 hover:border-blue-600/50 transition-colors duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center text-blue-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-lg text-blue-300 mb-3">{exp.company}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
