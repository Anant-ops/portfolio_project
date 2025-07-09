"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function InteractiveEarth() {
  const earthRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Continuous Earth rotation
      gsap.to(earthRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      })

      // Mouse movement handler
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 100
        const y = (e.clientY / window.innerHeight - 0.5) * 100
        setMousePosition({ x, y })

        // Move Earth based on mouse position
        gsap.to(earthRef.current, {
          x: x * 0.5,
          y: y * 0.3,
          rotationY: x * 0.1,
          rotationX: -y * 0.1,
          duration: 2,
          ease: "power2.out",
        })
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Earth */}
      <div
        ref={earthRef}
        className="absolute top-1/2 left-1/2 w-96 h-96 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          transformStyle: "preserve-3d",
          background: `radial-gradient(circle at 30% 30%, 
            rgba(59, 130, 246, 0.4) 0%, 
            rgba(30, 58, 138, 0.3) 20%,
            rgba(17, 24, 39, 0.8) 40%,
            rgba(0, 0, 0, 0.9) 70%,
            transparent 100%)`,
          borderRadius: "50%",
          boxShadow: `
            inset -20px -20px 50px rgba(0, 0, 0, 0.8),
            inset 20px 20px 50px rgba(59, 130, 246, 0.1),
            0 0 100px rgba(59, 130, 246, 0.2),
            0 0 200px rgba(30, 58, 138, 0.1)
          `,
        }}
      >
        {/* Earth surface details */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-800/30 via-green-800/20 to-blue-900/40 opacity-60"></div>
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-green-700/20 via-blue-700/30 to-gray-800/40 opacity-50"></div>

        {/* Continents simulation */}
        <div className="absolute top-1/4 left-1/3 w-16 h-8 bg-green-600/30 rounded-full transform rotate-45 opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-6 bg-green-600/30 rounded-full transform -rotate-30 opacity-70"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-12 bg-green-600/30 rounded-full transform rotate-12 opacity-70"></div>

        {/* Atmospheric glow */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/10 via-cyan-400/5 to-blue-400/10 blur-xl"></div>
      </div>

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div
          className="absolute inset-0 border border-blue-400/20 rounded-full animate-spin"
          style={{ animationDuration: "120s" }}
        ></div>
        <div
          className="absolute inset-8 border border-cyan-400/15 rounded-full animate-spin"
          style={{ animationDuration: "180s", animationDirection: "reverse" }}
        ></div>
        <div
          className="absolute inset-16 border border-purple-400/10 rounded-full animate-spin"
          style={{ animationDuration: "240s" }}
        ></div>
      </div>
    </div>
  )
}
