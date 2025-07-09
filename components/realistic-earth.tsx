"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function RealisticEarth() {
  const earthRef = useRef<HTMLDivElement>(null)
  const atmosphereRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Continuous Earth rotation
      gsap.to(earthRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
      })

      // Atmosphere rotation (slower)
      gsap.to(atmosphereRef.current, {
        rotation: 360,
        duration: 180,
        repeat: -1,
        ease: "none",
      })

      // Enhanced mouse movement handler
      const handleMouseMove = (e: MouseEvent) => {
        const rect = window.innerWidth
        const rectHeight = window.innerHeight
        const x = (e.clientX / rect - 0.5) * 2
        const y = (e.clientY / rectHeight - 0.5) * 2

        setMousePosition({ x, y })

        // Realistic Earth movement with physics
        gsap.to(earthRef.current, {
          x: x * 80,
          y: y * 50,
          rotationY: x * 20,
          rotationX: -y * 15,
          scale: 1 + Math.abs(x * 0.1),
          duration: 3,
          ease: "power2.out",
        })

        // Atmosphere follows with delay
        gsap.to(atmosphereRef.current, {
          x: x * 60,
          y: y * 40,
          rotationY: x * 15,
          rotationX: -y * 10,
          duration: 4,
          ease: "power2.out",
        })
      }

      // Scroll-based scaling
      const handleScroll = () => {
        const scrollY = window.scrollY
        const scale = Math.max(0.3, 1 - scrollY * 0.0008)
        const opacity = Math.max(0.1, 1 - scrollY * 0.001)

        gsap.to(containerRef.current, {
          scale: scale,
          opacity: opacity,
          duration: 0.5,
          ease: "power2.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Realistic Earth */}
      <div
        ref={earthRef}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: "preserve-3d",
          background: `
  radial-gradient(circle at 25% 25%, 
    rgba(75, 85, 99, 0.4) 0%,
    rgba(55, 65, 81, 0.6) 15%,
    rgba(31, 41, 55, 0.8) 35%,
    rgba(17, 24, 39, 0.95) 60%,
    rgba(0, 0, 0, 1) 85%,
    transparent 100%
  )
`,
          borderRadius: "50%",
          boxShadow: `
            inset -40px -40px 100px rgba(0, 0, 0, 0.9),
            inset 40px 40px 80px rgba(34, 197, 94, 0.1),
            inset -20px 20px 60px rgba(59, 130, 246, 0.2),
            0 0 150px rgba(34, 197, 94, 0.3),
            0 0 300px rgba(59, 130, 246, 0.2),
            0 0 500px rgba(17, 24, 39, 0.4)
          `,
        }}
      >
        {/* Earth surface layers */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-800/40 via-blue-800/50 to-gray-900/60 opacity-80"></div>
        <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-blue-700/30 via-green-700/40 to-gray-800/50 opacity-70"></div>
        <div className="absolute inset-24 rounded-full bg-gradient-to-bl from-green-600/20 via-blue-600/30 to-gray-700/40 opacity-60"></div>

        {/* Realistic continents */}
        <div className="absolute top-1/4 left-1/3 w-24 h-16 bg-gray-700/50 rounded-full transform rotate-45 opacity-80 blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-12 bg-gray-700/50 rounded-full transform -rotate-30 opacity-80 blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-20 bg-gray-700/50 rounded-full transform rotate-12 opacity-80 blur-sm"></div>
        <div className="absolute top-2/3 right-1/3 w-18 h-10 bg-gray-700/50 rounded-full transform rotate-60 opacity-80 blur-sm"></div>
        <div className="absolute bottom-1/4 left-2/3 w-14 h-18 bg-gray-700/50 rounded-full transform -rotate-45 opacity-80 blur-sm"></div>

        {/* Ocean details */}
        <div className="absolute top-1/3 right-1/2 w-32 h-20 bg-blue-600/40 rounded-full transform rotate-30 opacity-70 blur-md"></div>
        <div className="absolute bottom-1/2 left-1/3 w-28 h-24 bg-blue-600/40 rounded-full transform -rotate-15 opacity-70 blur-md"></div>

        {/* Cloud formations */}
        <div className="absolute top-1/5 left-1/2 w-20 h-8 bg-white/10 rounded-full transform rotate-20 opacity-60 blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/5 w-16 h-6 bg-white/10 rounded-full transform -rotate-40 opacity-60 blur-lg"></div>
        <div className="absolute top-2/3 left-1/5 w-18 h-7 bg-white/10 rounded-full transform rotate-50 opacity-60 blur-lg"></div>
      </div>

      {/* Realistic Atmosphere */}
      <div
        ref={atmosphereRef}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: "preserve-3d",
          background: `
            radial-gradient(circle at center, 
              transparent 40%,
              rgba(59, 130, 246, 0.1) 50%,
              rgba(34, 197, 94, 0.08) 60%,
              rgba(147, 51, 234, 0.06) 70%,
              rgba(59, 130, 246, 0.04) 80%,
              transparent 90%
            )
          `,
          borderRadius: "50%",
          filter: "blur(2px)",
        }}
      ></div>

      {/* Enhanced orbital rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute w-[800px] h-[800px] border border-blue-400/15 rounded-full"
          style={{
            animation: "spin 200s linear infinite",
            transformStyle: "preserve-3d",
          }}
        ></div>
        <div
          className="absolute w-[900px] h-[900px] border border-green-400/10 rounded-full"
          style={{
            animation: "spin 300s linear infinite reverse",
            transformStyle: "preserve-3d",
          }}
        ></div>
        <div
          className="absolute w-[1000px] h-[1000px] border border-purple-400/8 rounded-full"
          style={{
            animation: "spin 400s linear infinite",
            transformStyle: "preserve-3d",
          }}
        ></div>
      </div>

      {/* Space debris/satellites */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-green-400/60 rounded-full animate-pulse delay-2000"></div>
    </div>
  )
}
