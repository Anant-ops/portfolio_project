"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FloatingElements3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const elements = containerRef.current.children

      Array.from(elements).forEach((element, index) => {
        // Complex 3D floating animation
        gsap.to(element, {
          y: `random(-60, 60)`,
          x: `random(-40, 40)`,
          z: `random(-100, 100)`,
          rotationX: `random(-20, 20)`,
          rotationY: `random(-30, 30)`,
          rotationZ: `random(-15, 15)`,
          scale: `random(0.7, 1.3)`,
          duration: `random(8, 15)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        })

        // Scroll-based parallax
        gsap.to(element, {
          y: -200,
          opacity: 0.3,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10 opacity-60">
      {/* 3D Geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-400/30 transform rotate-45 perspective-1000">
        <div className="absolute inset-2 border border-cyan-400/20 transform rotate-45"></div>
        <div className="absolute inset-4 border border-blue-400/15 transform rotate-45"></div>
      </div>

      <div className="absolute top-40 right-32 w-20 h-20 border-2 border-purple-400/30 rounded-full perspective-1000">
        <div className="absolute inset-3 border border-blue-400/20 rounded-full"></div>
        <div className="absolute inset-6 border border-cyan-400/15 rounded-full"></div>
      </div>

      <div className="absolute bottom-32 left-40 w-24 h-24 border-2 border-green-400/30 transform rotate-12 perspective-1000">
        <div className="absolute inset-0 border border-blue-400/20 transform rotate-45"></div>
        <div className="absolute inset-3 border border-cyan-400/15 transform -rotate-45"></div>
      </div>

      {/* 3D Cubes */}
      <div className="absolute top-60 right-60 w-12 h-12 perspective-1000" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 transform rotateX-45 rotateY-45"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 transform rotateX-45 rotateY-45 translateZ-6"></div>
      </div>

      <div className="absolute bottom-60 left-60 w-14 h-14 perspective-1000" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/30 transform rotateX-30 rotateY-60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 transform rotateX-30 rotateY-60 translateZ-7"></div>
      </div>

      {/* 3D Pyramids */}
      <div
        className="absolute top-80 left-80 w-10 h-10 perspective-1000"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2))",
          border: "1px solid rgba(59, 130, 246, 0.4)",
          transformStyle: "preserve-3d",
        }}
      ></div>

      <div
        className="absolute bottom-80 right-80 w-12 h-12 perspective-1000"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.2))",
          border: "1px solid rgba(34, 197, 94, 0.4)",
          transformStyle: "preserve-3d",
        }}
      ></div>

      {/* 3D Hexagons */}
      <div
        className="absolute top-96 right-96 w-16 h-16 perspective-1000"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: "linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.2))",
          border: "1px solid rgba(6, 182, 212, 0.4)",
          transformStyle: "preserve-3d",
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute top-32 left-1/2 w-3 h-3 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-full blur-sm"></div>
      <div className="absolute top-48 right-1/3 w-4 h-4 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full blur-sm"></div>
      <div className="absolute bottom-48 left-1/4 w-2 h-2 bg-gradient-to-br from-green-400/40 to-cyan-400/40 rounded-full blur-sm"></div>
      <div className="absolute bottom-32 right-1/4 w-5 h-5 bg-gradient-to-br from-cyan-400/40 to-purple-400/40 rounded-full blur-sm"></div>
    </div>
  )
}
