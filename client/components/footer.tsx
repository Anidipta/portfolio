"use client"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Satellite } from "lucide-react"
import type { ColorTheme } from "@/components/theme-selector"

interface FooterProps {
  theme: ColorTheme
}

export default function Footer({ theme }: FooterProps) {
  const controls = useAnimation()
  const [launched, setLaunched] = useState(false)

  const scrollToTop = async () => {
    setLaunched(true)

    // Step 1: Shake (2 seconds)
    await controls.start({
      x: [0, -5, 5, -5, 5, -5, 5, -3, 3, 0],
      transition: { duration: 1, ease: "easeInOut" },
    })

    // Step 2: Fly up + fade out (2 seconds)
    controls.start({
      y: "-100vh",
      opacity: 0,
      transition: { duration: 3, ease: "easeIn" },
    })

    // Scroll while satellite flies
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Reset after total 4s
    setTimeout(() => {
      setLaunched(false)
      controls.set({ y: 0, opacity: 1, x: 0 })
    }, 4200)
  }

  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-24 w-24"
          >
            <motion.button
              onClick={scrollToTop}
              animate={controls}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-transparent z-10"
              aria-label="Scroll to top"
            >
              <Satellite className="w-10 h-10 text-white" />
            </motion.button>

            {/* Semi-circle base (only visible before launch) */}
            {!launched && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-gray-800 rounded-t-full" />
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
