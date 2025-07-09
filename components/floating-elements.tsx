"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const elements = containerRef.current.children

      Array.from(elements).forEach((element, index) => {
        // Optimized floating animation
        gsap.to(element, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-10, 10)",
          scale: "random(0.8, 1.2)",
          duration: 6 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 opacity-40">
      {/* Earth-themed floating particles */}
      <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-sm"></div>
      <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-sm"></div>
      <div className="floating-element absolute top-60 left-1/4 w-3 h-3 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-sm"></div>
      <div className="floating-element absolute bottom-40 right-10 w-5 h-5 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full blur-sm"></div>
      <div className="floating-element absolute bottom-60 left-20 w-7 h-7 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-full blur-sm"></div>
      <div className="floating-element absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full blur-sm"></div>
    </div>
  )
}
