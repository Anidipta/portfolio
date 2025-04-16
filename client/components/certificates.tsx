"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"

export default function Certificates() {
  const certificates = [
  {
    title: "1st Place in VizSpark",
    issuer: "EGS Pillay Engineering College",
    image: "/placeholder.svg?height=400&width=600",
    description: "Secured 1st place for outstanding innovation and presentation at VizSpark.",
  },
  {
    title: "2nd Place at the Video Frame Sorting Hackathon",
    issuer: "Machine Hack, Bangalore",
    image: "/placeholder.svg?height=400&width=600",
    description: "Ranked 2nd for efficient video frame sorting algorithm development.",
  },
  {
    title: "2nd Runner-up at Hack Synthesis’24",
    issuer: "UEM, Kolkata",
    image: "/placeholder.svg?height=400&width=600",
    description: "Top 20 finalist and 2nd Runner-up at a national-level hackathon.",
  },
  {
    title: "2nd Runner-up at Campus Connect",
    issuer: "IIM Rohtak",
    image: "/placeholder.svg?height=400&width=600",
    description: "Out of 250 teams, secured 2nd Runner-up position for a strategic innovation challenge.",
  },
  {
    title: "3rd Runner-up at Hack Fusion",
    issuer: "NIT Jamshedpur",
    image: "/placeholder.svg?height=400&width=600",
    description: "Ranked 3rd Runner-up among 300 teams at a national hackathon event.",
  },
  {
    title: "3rd Runner-up at Hack Heritage",
    issuer: "HIT Kolkata",
    image: "/placeholder.svg?height=400&width=600",
    description: "Awarded for creative problem solving and solution development.",
  },
  {
    title: "4th Place at INNOVATHON’24",
    issuer: "NSHM, Kolkata",
    image: "/placeholder.svg?height=400&width=600",
    description: "Secured 4th place in a tech innovation competition.",
  },
  {
    title: "4th Runner-up at Contract Risk Management Hackathon",
    issuer: "IIT Madras",
    image: "/placeholder.svg?height=400&width=600",
    description: "Ranked among the top 5 teams out of 250 for a finance-related hackathon.",
  },
  {
    title: "Top 10 Finalist for Tech Intellina",
    issuer: "IET YPS at JU, Kolkata",
    image: "/placeholder.svg?height=400&width=600",
    description: "Selected among the top 10 teams out of 240 for technical innovation.",
  },
  {
    title: "Top 20 Finalist at TMSL Educ-A-Thon’24 Hackathon",
    issuer: "TMSL",
    image: "/placeholder.svg?height=400&width=600",
    description: "Recognized as a Top 20 finalist for impactful educational solutions.",
  },
  {
    title: "Top 50 Finalist in the SIF Space Hackathon",
    issuer: "ISRO, Faridabad",
    image: "/placeholder.svg?height=400&width=600",
    description: "Achieved Top 50 finalist status in a national space technology hackathon.",
  },
  {
    title: "Bounty Winner at Eolas x Algo: Agent Skills Hackathon",
    issuer: "Eolas x Algo",
    image: "/placeholder.svg?height=400&width=600",
    description: "Awarded bounty prize for solving agent-based algorithmic challenges.",
  },
];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-blue-300">
            Certificates
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.01 }}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(192, 132, 252, 0.9)",
                boxShadow: "0 10px 25px -5px rgba(137, 233, 255, 0.63)",
              }}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* <div className="relative h-48">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-lime-400 to-blue-300 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div> */}
              <div className="p-4">
              <h3 className="text-base font-bold mb-1 bg-gradient-to-r from-rose-400/90 to-amber-300/100 bg-clip-text text-transparent">
                {certificate.title}
              </h3>
                <p className="text-2sm text-blue-400 mb-2">{certificate.issuer}</p>
                <p className="text-2sm text-gray-400">{certificate.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
