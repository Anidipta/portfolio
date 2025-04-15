"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter, FileText } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"
          >
            Computer Vision Engineer & Data Scientist
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforming data into dashboard for others through advanced computer vision
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#projects"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Explore My Work
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/file/d/1SYRfo-OS3mPErKnByR2j3bH6xluqJb9o/view?usp=sharing"
                download
                className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/Anidipta"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-white transition-all"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/anidipta-pal"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-white transition-all"
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://twitter.com/@AnidiptaP"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-white transition-all"
            >
              <Twitter size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-gray-300 animate-bounce" />
      </motion.div>
    </section>
  )
}
