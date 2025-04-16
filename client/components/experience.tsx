"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Omdena, Worldwide",
      period: "May 2024 – Present",
      skills: "Python, Streamlit, TensorFlow, Keras, PyTorch, OpenCV, Pillow, LangChain, Rasterio, GLAD, Scikit-learn, Looker Studio, Google Earth Engine",
      description: "Leading the development of a GenAI-based mental health chatbot in Hyderabad. Building the HOTOSM-Earth-Observation project for 3D segmentation and satellite image processing to support geospatial insights. Led ML initiatives on climate resilience and food security in Bangladesh, maize yield forecasting (+15% accuracy, Kenya), river water quality prediction (+20% accuracy, Kenya), and LCLU-CO2-vegetation analysis with Google Earth Engine in Milan (+8% accuracy, +25% engagement)."
    },
    {
      title: "Python Developer",
      company: "Mahakarshan Pvt. Ltd., West Bengal",
      period: "Feb 2025 – Present",
      skills: "Python, Django, REST API, PostgreSQL, HTML/CSS",
      description: "Developing a Python-based web application with Django backend."
    },
    {
      title: "AI Engineer Intern",
      company: "Vizzle, India",
      period: "Jan 2025 – Mar 2025",
      skills: "Python, OpenCV, TensorFlow, Keras",
      description: "Developed a face-tracking system for fashion accessories using deep learning, enabling precise real-time detection and virtual try-on experiences."
    },
    {
      title: "Data Analyst",
      company: "Evoastra Ventures, Mumbai",
      period: "Jun 2024 – Aug 2024",
      skills: "Python, SQL, Power BI",
      description: "Performed data analysis and dashboard development across 6 projects, improving efficiency by 21.67%. Contributed to report documentation and delivered insights that increased stakeholder engagement by 8.75%."
    },
    {
      title: "Data Science Intern",
      company: "Null Class, Bangalore",
      period: "Feb 2024 – Apr 2024",
      skills: "Python, OpenCV, TensorFlow, Data Augmentation",
      description: "Built a real-time emotion detection system using OpenCV, TensorFlow, and Keras, achieving a 20% improvement in accuracy. Integrated data augmentation techniques and chatbot interaction, boosting user engagement by 25%. Also contributed to predictive analytics model development and optimization."
    }
  ];  

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
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                  <span className="text-m text-pink-400 font-mono">{exp.period}</span>
                </div>
                <p className="text-purple-300 font-medium">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                <p className="text-amber-400 font-mono">Skills: {exp.skills}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
