"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Computer Vision Engineer",
      company: "SatelliteAI Technologies",
      period: "2021 - Present",
      description: "Leading the development of advanced computer vision algorithms for satellite imagery analysis. Implemented deep learning models for object detection and segmentation in remote sensing data."
    },
    {
      title: "Computer Vision Researcher",
      company: "GeoSpatial Research Institute",
      period: "2018 - 2021",
      description: "Conducted research on novel approaches to satellite image processing. Developed algorithms for change detection and land cover classification."
    },
    {
      title: "Machine Learning Engineer",
      company: "EarthView Analytics",
      period: "2016 - 2018",
      description: "Built machine learning pipelines for processing and analyzing satellite imagery for environmental monitoring applications."
    }
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.01 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.001, delay: index * 0.001 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(192, 132, 252, 0.5)",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 transition-all duration-300 cursor-default"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-purple-300 font-medium">{exp.company}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                <div className="text-sm text-pink-400 font-mono tracking-wide">
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}