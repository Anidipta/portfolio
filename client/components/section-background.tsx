"use client"

import type { ReactNode } from "react"

type PlanetTheme = {
  bgClass: string
  overlayClass: string
  name: string
}

const planetThemes: Record<string, PlanetTheme> = {
  jupiter: {
    bgClass: "bg-gradient-to-b from-[#8B4513]/20 to-[#A0522D]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Jupiter",
  },
  mars: {
    bgClass: "bg-gradient-to-b from-[#B22222]/20 to-[#8B0000]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Mars",
  },
  earth: {
    bgClass: "bg-gradient-to-b from-[#1E3B70]/20 to-[#006400]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Earth",
  },
  saturn: {
    bgClass: "bg-gradient-to-b from-[#DAA520]/20 to-[#B8860B]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Saturn",
  },
  neptune: {
    bgClass: "bg-gradient-to-b from-[#4169E1]/20 to-[#000080]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Neptune",
  },
  mercury: {
    bgClass: "bg-gradient-to-b from-[#696969]/20 to-[#A9A9A9]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Mercury",
  },
  venus: {
    bgClass: "bg-gradient-to-b from-[#FFA07A]/20 to-[#FF8C00]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Venus",
  },
  uranus: {
    bgClass: "bg-gradient-to-b from-[#40E0D0]/20 to-[#00CED1]/30",
    overlayClass: "bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10",
    name: "Uranus",
  },
}

interface SectionBackgroundProps {
  children: ReactNode
  planet: keyof typeof planetThemes
  id: string
  className?: string
}

export default function SectionBackground({ children, planet, id, className = "" }: SectionBackgroundProps) {
  const theme = planetThemes[planet]

  return (
    <section id={id} className={`relative py-20 ${className}`}>
      <div className={`absolute inset-0 ${theme.bgClass}`}></div>
      <div className={`absolute inset-0 ${theme.overlayClass}`}></div>

      {/* Planet indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-60">
        <div
          className={`w-3 h-3 rounded-full bg-${
            planet === "jupiter"
              ? "amber-600"
              : planet === "mars"
                ? "red-600"
                : planet === "earth"
                  ? "blue-600"
                  : planet === "saturn"
                    ? "yellow-600"
                    : planet === "neptune"
                      ? "blue-800"
                      : planet === "mercury"
                        ? "gray-500"
                        : planet === "venus"
                          ? "orange-400"
                          : "teal-400"
          }`}
        ></div>
        <span className="text-xs text-gray-400">{theme.name}</span>
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  )
}
