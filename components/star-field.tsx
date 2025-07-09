"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      // Create stars dynamically
      const createStars = () => {
        const container = containerRef.current
        if (!container) return

        for (let i = 0; i < 200; i++) {
          const star = document.createElement("div")
          star.className = "absolute bg-white rounded-full opacity-70"

          const size = Math.random() * 3 + 1
          star.style.width = `${size}px`
          star.style.height = `${size}px`
          star.style.left = `${Math.random() * 100}%`
          star.style.top = `${Math.random() * 100}%`

          container.appendChild(star)

          // Twinkling animation
          gsap.to(star, {
            opacity: Math.random() * 0.8 + 0.2,
            duration: Math.random() * 3 + 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: Math.random() * 2,
          })

          // Subtle movement
          gsap.to(star, {
            x: `random(-20, 20)`,
            y: `random(-20, 20)`,
            duration: Math.random() * 20 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        }
      }

      createStars()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0"></div>
}
