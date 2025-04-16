"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export type ColorTheme = {
  name: string
  primary: string
  secondary: string
  primaryClass: string
  secondaryClass: string
  gradientClass: string
}

const colorThemes: ColorTheme[] = [
  {
    name: "",
    primary: "blue",
    secondary: "green",
    primaryClass: "text-blue-400",
    secondaryClass: "text-green-400",
    gradientClass: "from-blue-400 to-green-300",
  },
  {
    name: "",
    primary: "amber",
    secondary: "red",
    primaryClass: "text-amber-700",
    secondaryClass: "text-red-500",
    gradientClass: "from-amber-700 to-red-500",
  },
  {
    name: "",
    primary: "red",
    secondary: "orange",
    primaryClass: "text-red-500",
    secondaryClass: "text-orange-400",
    gradientClass: "from-red-500 to-orange-400",
  },
  {
    name: "",
    primary: "blue",
    secondary: "cyan",
    primaryClass: "text-blue-500",
    secondaryClass: "text-cyan-400",
    gradientClass: "from-blue-500 to-cyan-400",
  },
  {
    name: "",
    primary: "yellow",
    secondary: "rose",
    primaryClass: "text-yellow-400",
    secondaryClass: "text-rose-500",
    gradientClass: "from-yellow-400 to-rose-500",
  },
]

interface ThemeSelectorProps {
  onThemeChange: (theme: ColorTheme) => void
}

export default function ThemeSelector({ onThemeChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<ColorTheme>(colorThemes[0])

  const handleThemeChange = (theme: ColorTheme) => {
    setSelectedTheme(theme)
    onThemeChange(theme)
    setIsOpen(false)

    // Save to localStorage
    localStorage.setItem("selectedColorTheme", theme.name)
  }

  useEffect(() => {
    // Load from localStorage on initial render
    const savedTheme = localStorage.getItem("selectedColorTheme")
    if (savedTheme) {
      const theme = colorThemes.find((t) => t.name === savedTheme)
      if (theme) {
        setSelectedTheme(theme)
        onThemeChange(theme)
      }
    }
  }, [onThemeChange])

  return (
    <div className="relative z-25">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
      >
        <div className="flex items-center">
          <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedTheme.gradientClass} mr-2`}></span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="py-1">
              {colorThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme)}
                  className="flex items-center px-4 py-2 "
                >
                  <div className="flex items-center">
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.gradientClass} mr-2`}></span>
                  </div>
                  {selectedTheme.name === theme.name && <Check className="w-4 h-4 text-green-400" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
