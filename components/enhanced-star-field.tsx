"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function EnhancedStarField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const createStars = () => {
        const container = containerRef.current
        if (!container) return

        // Create different types of stars
        for (let i = 0; i < 300; i++) {
          const star = document.createElement("div")
          const starType = Math.random()

          if (starType < 0.7) {
            // Regular stars
            star.className = "absolute bg-white rounded-full opacity-70"
            const size = Math.random() * 2 + 0.5
            star.style.width = `${size}px`
            star.style.height = `${size}px`
          } else if (starType < 0.9) {
            // Bright stars
            star.className = "absolute bg-gray-400 rounded-full opacity-90"
            const size = Math.random() * 3 + 1
            star.style.width = `${size}px`
            star.style.height = `${size}px`
            star.style.boxShadow = `0 0 ${size * 2}px rgba(156, 163, 175, 0.5)`
          } else {
            // Distant galaxies
            star.className = "absolute bg-gray-500 rounded-full opacity-40"
            const size = Math.random() * 4 + 2
            star.style.width = `${size}px`
            star.style.height = `${size}px`
            star.style.filter = "blur(1px)"
            star.style.boxShadow = `0 0 ${size * 3}px rgba(107, 114, 128, 0.3)`
          }

          star.style.left = `${Math.random() * 100}%`
          star.style.top = `${Math.random() * 100}%`
          container.appendChild(star)

          // Enhanced twinkling animation
          gsap.to(star, {
            opacity: Math.random() * 0.8 + 0.2,
            scale: Math.random() * 0.5 + 0.8,
            duration: Math.random() * 4 + 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: Math.random() * 3,
          })

          // Parallax movement based on star type
          const moveDistance = starType < 0.7 ? 10 : starType < 0.9 ? 20 : 30
          gsap.to(star, {
            x: `random(-${moveDistance}, ${moveDistance})`,
            y: `random(-${moveDistance}, ${moveDistance})`,
            duration: Math.random() * 30 + 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        }

        // Create nebula effects
        for (let i = 0; i < 5; i++) {
          const nebula = document.createElement("div")
          nebula.className = "absolute rounded-full opacity-20"
          const size = Math.random() * 200 + 100
          nebula.style.width = `${size}px`
          nebula.style.height = `${size}px`
          nebula.style.left = `${Math.random() * 100}%`
          nebula.style.top = `${Math.random() * 100}%`
          nebula.style.background = `radial-gradient(circle, 
            rgba(${Math.random() > 0.5 ? "59, 130, 246" : "147, 51, 234"}, 0.1) 0%, 
            transparent 70%)`
          nebula.style.filter = "blur(20px)"
          container.appendChild(nebula)

          gsap.to(nebula, {
            rotation: 360,
            duration: Math.random() * 100 + 50,
            repeat: -1,
            ease: "none",
          })
        }
      }

      createStars()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0"></div>
}
