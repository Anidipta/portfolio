"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)
    const scaleArray = new Float32Array(particlesCount)

    // Fill with random positions
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 100
      posArray[i + 1] = (Math.random() - 0.5) * 100
      posArray[i + 2] = (Math.random() - 0.5) * 100

      // Scale (for size variation)
      scaleArray[i / 3] = Math.random()
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("scale", new THREE.BufferAttribute(scaleArray, 1))

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      alphaMap: new THREE.TextureLoader().load("/spark.png"),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    // Create color array
    const colors = new Float32Array(particlesCount * 3)
    const color1 = new THREE.Color(0x3b82f6) // Primary blue
    const color2 = new THREE.Color(0xf59e0b) // Secondary orange
    const color3 = new THREE.Color(0xc026d3) // Accent purple

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Randomly choose one of the three colors
      const colorChoice = Math.floor(Math.random() * 3)
      let color

      if (colorChoice === 0) color = color1
      else if (colorChoice === 1) color = color2
      else color = color3

      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create grid lines for cyber effect
    const gridSize = 100
    const gridDivisions = 20
    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.15,
    })

    // Horizontal grid
    const horizontalGridGeometry = new THREE.BufferGeometry()
    const horizontalGridVertices = []

    for (let i = 0; i <= gridDivisions; i++) {
      const y = (i / gridDivisions) * gridSize - gridSize / 2
      horizontalGridVertices.push(-gridSize / 2, y, 0)
      horizontalGridVertices.push(gridSize / 2, y, 0)
    }

    horizontalGridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(horizontalGridVertices, 3))
    const horizontalGrid = new THREE.LineSegments(horizontalGridGeometry, gridMaterial)
    scene.add(horizontalGrid)

    // Vertical grid
    const verticalGridGeometry = new THREE.BufferGeometry()
    const verticalGridVertices = []

    for (let i = 0; i <= gridDivisions; i++) {
      const x = (i / gridDivisions) * gridSize - gridSize / 2
      verticalGridVertices.push(x, -gridSize / 2, 0)
      verticalGridVertices.push(x, gridSize / 2, 0)
    }

    verticalGridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(verticalGridVertices, 3))
    const verticalGrid = new THREE.LineSegments(verticalGridGeometry, gridMaterial)
    scene.add(verticalGrid)

    // Create connection lines between particles
    const connectionsMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    })

    const connectionsGeometry = new THREE.BufferGeometry()
    const maxConnections = 500
    const connectionsVertices = new Float32Array(maxConnections * 2 * 3)
    connectionsGeometry.setAttribute("position", new THREE.BufferAttribute(connectionsVertices, 3))

    const connections = new THREE.LineSegments(connectionsGeometry, connectionsMaterial)
    scene.add(connections)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      // Rotate particles
      particlesMesh.rotation.x = elapsedTime * 0.05
      particlesMesh.rotation.y = elapsedTime * 0.03

      // Rotate grids
      horizontalGrid.rotation.x = elapsedTime * 0.02
      horizontalGrid.rotation.y = elapsedTime * 0.01
      verticalGrid.rotation.x = elapsedTime * 0.02
      verticalGrid.rotation.y = elapsedTime * 0.01

      // Mouse movement effect
      particlesMesh.rotation.x += mouseY * 0.01
      particlesMesh.rotation.y += mouseX * 0.01
      horizontalGrid.rotation.x += mouseY * 0.005
      horizontalGrid.rotation.y += mouseX * 0.005
      verticalGrid.rotation.x += mouseY * 0.005
      verticalGrid.rotation.y += mouseX * 0.005

      // Update connections between particles
      const positions = particlesMesh.geometry.attributes.position.array
      const connectionsPositions = connections.geometry.attributes.position.array

      let connectionIndex = 0
      const connectionDistance = 10

      for (let i = 0; i < particlesCount; i++) {
        if (connectionIndex >= maxConnections) break

        const ix = positions[i * 3]
        const iy = positions[i * 3 + 1]
        const iz = positions[i * 3 + 2]

        for (let j = i + 1; j < particlesCount; j++) {
          if (connectionIndex >= maxConnections) break

          const jx = positions[j * 3]
          const jy = positions[j * 3 + 1]
          const jz = positions[j * 3 + 2]

          const dx = ix - jx
          const dy = iy - jy
          const dz = iz - jz

          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < connectionDistance) {
            // First point
            connectionsPositions[connectionIndex * 6] = ix
            connectionsPositions[connectionIndex * 6 + 1] = iy
            connectionsPositions[connectionIndex * 6 + 2] = iz

            // Second point
            connectionsPositions[connectionIndex * 6 + 3] = jx
            connectionsPositions[connectionIndex * 6 + 4] = jy
            connectionsPositions[connectionIndex * 6 + 5] = jz

            connectionIndex++
          }
        }
      }

      connections.geometry.attributes.position.needsUpdate = true

      // Render
      renderer.render(scene, camera)

      // Call animate again on the next frame
      window.requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)

      // Dispose resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      horizontalGridGeometry.dispose()
      verticalGridGeometry.dispose()
      gridMaterial.dispose()
      connectionsGeometry.dispose()
      connectionsMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10" />
}

