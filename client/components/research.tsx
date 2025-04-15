"use client"

import { motion } from "framer-motion"
import { FileText, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Research() {
  const researchPapers = [
    {
      title: "Deep Learning Approaches for Multi-Spectral Satellite Image Segmentation",
      journal: "Journal of Remote Sensing",
      year: 2023,
      description:
        "A novel approach to semantic segmentation of multi-spectral satellite imagery using transformer-based architectures.",
      tags: ["Deep Learning", "Semantic Segmentation", "Multi-Spectral"],
    },
    {
      title: "Automated Change Detection in Urban Environments Using Time-Series Satellite Imagery",
      journal: "IEEE Transactions on Geoscience and Remote Sensing",
      year: 2022,
      description:
        "A framework for detecting and classifying changes in urban environments using temporal satellite image sequences.",
      tags: ["Change Detection", "Urban Analysis", "Time-Series"],
    },
    {
      title: "Fusion of SAR and Optical Satellite Imagery for Improved Land Cover Classification",
      journal: "ISPRS Journal of Photogrammetry and Remote Sensing",
      year: 2021,
      description:
        "A multi-modal approach combining synthetic aperture radar (SAR) and optical satellite data for enhanced land cover classification.",
      tags: ["Data Fusion", "SAR", "Land Cover"],
    },
  ]

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
            Research Publications
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/60 backdrop-blur-sm border-orange-800/30 hover:border-yellow-600/50 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <FileText className="w-8 h-8 text-orange-400 mb-2" />
                    <Badge variant="outline" className="bg-orange-900/50 text-blue-200">
                      {paper.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-gray-100">{paper.title}</CardTitle>
                  <CardDescription className="text-yellow-300">{paper.journal}</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300 flex-grow">
                  <p>{paper.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                  {paper.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-950/70 text-blue-200">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            View all publications
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </motion.div> */}
      </div>
    </section>
  )
}
