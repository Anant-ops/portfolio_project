"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function EarthBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const elements = containerRef.current.children

      Array.from(elements).forEach((element, index) => {
        // Optimized rotation animation
        gsap.to(element, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: "none",
        })

        // Optimized floating movement
        gsap.to(element, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          duration: 8 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 opacity-30">
      {/* Earth-themed elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
        <div className="absolute inset-4 rounded-full border border-blue-300/20"></div>
        <div className="absolute inset-8 rounded-full border border-green-300/20"></div>
      </div>

      <div className="absolute top-40 right-32 w-24 h-24 rounded-full border-2 border-green-400/20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
        <div className="absolute inset-3 rounded-full border border-green-300/20"></div>
      </div>

      <div className="absolute bottom-32 left-40 w-28 h-28 rounded-full border-2 border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
        <div className="absolute inset-4 rounded-full border border-cyan-300/20"></div>
      </div>

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-400/10 rounded-full transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-8 border border-green-400/10 rounded-full"></div>
        <div className="absolute inset-16 border border-cyan-400/10 rounded-full"></div>
      </div>

      {/* Continents simulation */}
      <div className="absolute top-60 right-60 w-16 h-8 bg-green-500/20 rounded-full transform rotate-45"></div>
      <div className="absolute bottom-60 left-60 w-12 h-6 bg-green-500/20 rounded-full transform -rotate-30"></div>
    </div>
  )
}
