"use client"

import { motion } from "framer-motion"

interface PlanetIndicatorProps {
  planet: string
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}

export default function PlanetIndicator({ planet, position = "top-right" }: PlanetIndicatorProps) {
  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  }

  const planetColors: Record<string, string> = {
    jupiter: "bg-amber-600",
    mars: "bg-red-600",
    earth: "bg-blue-600",
    saturn: "bg-yellow-600",
    neptune: "bg-blue-800",
    mercury: "bg-gray-500",
    venus: "bg-orange-400",
    uranus: "bg-teal-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      className={`absolute ${positionClasses[position]} flex items-center space-x-2 z-20`}
    >
      <div className={`w-3 h-3 rounded-full ${planetColors[planet] || "bg-white"}`}></div>
      <span className="text-xs text-gray-300 capitalize">{planet}</span>
    </motion.div>
  )
}
