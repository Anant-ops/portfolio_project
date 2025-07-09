"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certificates from "@/components/certificates"
import Education from "@/components/education"
import Contact from "@/components/contact"
import RealisticEarth from "@/components/realistic-earth"
import EnhancedStarField from "@/components/enhanced-star-field"
import FloatingElements3D from "@/components/3d-floating-elements"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Faster parallax layers
      gsap.fromTo(
        ".parallax-layer",
        { y: 0, opacity: 1 },
        {
          y: -200,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: 0.5, // Faster scrub for more responsive feel
          },
        },
      )

      // Faster 3D section animations
      gsap.utils.toArray(".section-3d").forEach((section: any, index) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
            rotationX: 20,
            rotationY: index % 2 === 0 ? 10 : -10,
            transformPerspective: 3000,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2, // Faster duration
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%", // Earlier trigger
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Enhanced smooth scroll with faster response
      gsap.set("html", {
        scrollBehavior: "smooth",
      })

      // Faster scroll-based animations
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        refreshPriority: 0,
      })
    }
  }, [])

  return (
    <>
      <EnhancedStarField />
      <RealisticEarth />
      <FloatingElements3D />
      <main
        ref={mainRef}
        className="bg-black text-gray-300 overflow-x-hidden relative min-h-screen"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Faster parallax layers */}
        <div className="parallax-layer fixed inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-800/5 -z-10"></div>
        <div className="parallax-layer fixed inset-0 bg-gradient-to-tr from-transparent via-black/3 to-transparent -z-9"></div>
        <div className="parallax-layer fixed inset-0 bg-gradient-to-bl from-gray-800/4 via-transparent to-gray-900/4 -z-8"></div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>
    </>
  )
}
