"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function GeometricBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const shapes = containerRef.current.children

      Array.from(shapes).forEach((shape, index) => {
        // Complex 3D rotation animations
        gsap.to(shape, {
          rotationX: "random(-360, 360)",
          rotationY: "random(-360, 360)",
          rotationZ: "random(-180, 180)",
          duration: "random(20, 40)",
          repeat: -1,
          ease: "none",
          transformPerspective: 1000,
        })

        // Floating movement
        gsap.to(shape, {
          y: "random(-50, 50)",
          x: "random(-30, 30)",
          duration: "random(8, 15)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        })

        // Scale pulsing
        gsap.to(shape, {
          scale: "random(0.5, 1.5)",
          duration: "random(5, 10)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.3,
        })
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {/* Complex geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 transform rotate-45">
        <div className="absolute inset-4 border border-white/5 rotate-45"></div>
        <div className="absolute inset-8 border border-white/5 rotate-45"></div>
      </div>

      <div className="absolute top-40 right-32 w-24 h-24 border-2 border-white/10 rounded-full">
        <div className="absolute inset-2 border border-white/5 rounded-full"></div>
        <div className="absolute inset-4 border border-white/5 rounded-full"></div>
        <div className="absolute inset-6 border border-white/5 rounded-full"></div>
      </div>

      <div className="absolute bottom-32 left-40 w-28 h-28 border-2 border-white/10 transform rotate-12">
        <div className="absolute inset-0 border border-white/5 transform rotate-45"></div>
        <div className="absolute inset-2 border border-white/5 transform -rotate-45"></div>
      </div>

      <div className="absolute top-1/2 right-20 w-20 h-20 border-2 border-white/10 transform rotate-45">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute bottom-40 right-40 w-16 h-16 border-2 border-white/10 rounded-full transform rotate-45">
        <div className="absolute inset-2 border border-white/5 rounded-full transform rotate-90"></div>
      </div>

      {/* Hexagonal patterns */}
      <div
        className="absolute top-60 left-60 w-12 h-12 border border-white/10 transform rotate-30"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      ></div>
      <div
        className="absolute bottom-60 right-60 w-16 h-16 border border-white/10 transform rotate-60"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      ></div>

      {/* Triangle patterns */}
      <div
        className="absolute top-80 right-80 w-10 h-10 border border-white/10 transform rotate-45"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
      <div
        className="absolute bottom-80 left-80 w-14 h-14 border border-white/10 transform -rotate-30"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      ></div>
    </div>
  )
}
