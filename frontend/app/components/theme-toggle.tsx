"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  // Initialize with a false state, will be updated in useEffect
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme when component mounts
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      
      // Set initial state based on stored preference or system preference or HTML class
      const htmlHasDarkClass = document.documentElement.classList.contains("dark")
      const initialDarkMode = savedTheme === "dark" || 
                             (savedTheme === null && prefersDark) || 
                             (savedTheme === null && htmlHasDarkClass)
      
      setIsDarkMode(initialDarkMode)
    }
  }, [])

  // Apply theme changes when isDarkMode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDarkMode])

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update if user hasn't set a preference
        if (localStorage.getItem("theme") === null) {
          setIsDarkMode(e.matches)
        }
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors hidden"
      aria-label="Toggle theme"
    >
      {/* Show Moon icon for light mode (to switch to dark)
          Show Sun icon for dark mode (to switch to light) */}
      {isDarkMode ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-slate-400" />}
    </button>
  )
}