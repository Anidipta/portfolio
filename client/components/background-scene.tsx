"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import type * as THREE from "three"
import type { ColorTheme } from "@/components/theme-selector"

interface SatelliteModelProps {
  theme: ColorTheme
}

function SatelliteModel({ theme }: SatelliteModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const primaryColor = useRef("#3b82f6") // Default blue
  const secondaryColor = useRef("#10b981") // Default green

  useEffect(() => {
    // Map theme colors to hex values
    primaryColor.current = "purple"
    secondaryColor.current = "pink"
  }, [theme])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Satellite body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1, 0.5, 2]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Solar panels */}
      <mesh position={[2, 0, 0]} castShadow>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color={primaryColor.current} metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh position={[-2, 0, 0]} castShadow>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color={primaryColor.current} metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 0.5, -1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#ddd" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 1, -1]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ddd" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

interface BackgroundSceneProps {
  theme: ColorTheme
}

export default function BackgroundScene({ theme }: BackgroundSceneProps) {
  return (
    <div className="fixed inset-0 z-0 opacity-80">
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight
          position={[-10, -10, -5]}
          intensity={0.5}
          color={`#${theme.primary === "blue" ? "3b82f6" : theme.primary === "amber" ? "b45309" : theme.primary === "red" ? "ef4444" : "facc15"}`}
        />

        <SatelliteModel theme={theme} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Slowly rotating scene */}
        <group rotation={[0, 0, 0]}>
          {Array.from({ length: 100 }).map((_, i) => (
            <mesh key={i} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial
                color={
                  i % 5 === 0
                    ? `#${theme.primary === "blue" ? "3b82f6" : theme.primary === "amber" ? "b45309" : theme.primary === "red" ? "ef4444" : "facc15"}`
                    : i % 3 === 0
                      ? `#${theme.secondary === "green" ? "10b981" : theme.secondary === "red" ? "ef4444" : theme.secondary === "orange" ? "fb923c" : theme.secondary === "cyan" ? "22d3ee" : "f43f5e"}`
                      : "#ffffff"
                }
                emissive={
                  i % 5 === 0
                    ? `#${theme.primary === "blue" ? "3b82f6" : theme.primary === "amber" ? "b45309" : theme.primary === "red" ? "ef4444" : "facc15"}`
                    : i % 3 === 0
                      ? `#${theme.secondary === "green" ? "10b981" : theme.secondary === "red" ? "ef4444" : theme.secondary === "orange" ? "fb923c" : theme.secondary === "cyan" ? "22d3ee" : "f43f5e"}`
                      : "#ffffff"
                }
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </group>
      </Canvas>
    </div>
  )
}
