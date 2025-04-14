"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp } from "lucide-react"
import type { ColorTheme } from "@/components/theme-selector"

interface FooterProps {
  theme: ColorTheme
}

export default function Footer({ theme }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="text-xl font-bold">
              <span className={theme.primaryClass}>CV</span>
              <span className="text-gray-300">&</span>
              <span className={theme.secondaryClass}>Satellite</span>
            </Link>
            <p className="text-gray-400 mt-2">Computer Vision & Satellite Imagery Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <button
              onClick={scrollToTop}
              className={`bg-${theme.primary}-700/20 p-3 rounded-full ${theme.primaryClass} hover:bg-${theme.primary}-700/40 transition-colors`}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}
