"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Contact() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "from-gray-700 to-gray-900",
      hoverColor: "from-gray-600 to-gray-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-500 to-blue-700"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "from-sky-500 to-sky-700",
      hoverColor: "from-sky-400 to-sky-600"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@example.com",
      color: "from-purple-600 to-purple-800",
      hoverColor: "from-purple-500 to-purple-700"
    }
  ]
  

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Email",
      value: "contact@example.com",
      url: "mailto:contact@example.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: "Phone",
      value: "+1 (123) 456-7890",
      url: "tel:+11234567890"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Location",
      value: "San Francisco, California",
      url: "https://maps.google.com"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-purple-500/20 blur-lg"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-blue-500/20 blur-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, -15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-1/4 w-10 h-10 rounded-full bg-pink-500/20 blur-lg"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-300">
            Let's Connect
          </h2>

          <div className="h-1 w-20 bg-purple-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-start p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all cursor-pointer border border-gray-700 hover:border-purple-500/30"
              >
                <div className="bg-purple-700/20 p-3 rounded-lg mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-1">{item.title}</h4>
                  <p className="text-gray-300 hover:text-purple-400 transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div 
              className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute -right-10 -top-10 w-24 h-10 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -left-10 -bottom-10 w-32 h-8 bg-blue-500/10 rounded-full blur-xl"></div>

              <h3 className="text-xl font-bold text-white mb-4 relative z-10">Find Me On</h3>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gradient-to-br ${link.color} border border-gray-700 flex items-center justify-center space-x-2 hover:scale-105 transition-all`}
                      onHoverStart={() => setHoveredItem(link.name)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Icon className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">{link.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            <motion.div 
              className="p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-purple-800/20 border border-purple-500/20 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Open for Opportunities</h3>
              <p className="text-gray-300 text-sm mb-4 relative z-10">
                Freelance or full-time? I'm open. Let’s collaborate!
              </p>
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 4, 0, -4, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <a 
                  href="mailto:contact@example.com" 
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-medium hover:from-purple-700 hover:to-purple-900 transition-all"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}