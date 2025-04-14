"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Advanced Computer Vision Specialization",
      issuer: "Stanford University",
      image: "/placeholder.svg?height=400&width=600",
      description: "Mastery in advanced computer vision algorithms and techniques",
    },
    {
      title: "Deep Learning for Satellite Imagery",
      issuer: "NASA & Coursera",
      image: "/placeholder.svg?height=400&width=600",
      description: "Application of deep learning models to satellite data analysis",
    },
    {
      title: "Remote Sensing Professional",
      issuer: "ESRI",
      image: "/placeholder.svg?height=400&width=600",
      description: "Expert-level certification in remote sensing technologies",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional certification in TensorFlow development",
    },
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      image: "/placeholder.svg?height=400&width=600",
      description: "Specialized certification for ML implementation on AWS",
    },
    {
      title: "GIS Professional Certification",
      issuer: "URISA",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional certification in Geographic Information Systems",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      image: "/placeholder.svg?height=400&width=600",
      description: "Advanced Python programming for data science applications",
    },
  ]

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-300">
            Certificates
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-purple-600/80 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{certificate.title}</h3>
                <p className="text-sm text-purple-400 mb-2">{certificate.issuer}</p>
                <p className="text-sm text-gray-400">{certificate.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
