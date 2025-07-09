"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skillCategories = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 90, color: "from-gray-800 to-black" },
      { name: "Azure", level: 75, color: "from-black to-gray-800" },
      { name: "Google Cloud", level: 70, color: "from-gray-700 to-gray-900" },
      { name: "DigitalOcean", level: 80, color: "from-gray-900 to-gray-700" },
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      { name: "Docker", level: 95, color: "from-gray-700 to-gray-800" },
      { name: "Kubernetes", level: 85, color: "from-gray-600 to-gray-700" },
      { name: "Jenkins", level: 80, color: "from-gray-800 to-gray-600" },
      { name: "GitHub Actions", level: 90, color: "from-gray-700 to-gray-600" },
      { name: "Terraform", level: 85, color: "from-gray-600 to-gray-800" },
      { name: "Ansible", level: 75, color: "from-gray-800 to-gray-700" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90, color: "from-gray-600 to-gray-700" },
      { name: "JavaScript", level: 85, color: "from-gray-700 to-gray-800" },
      { name: "TypeScript", level: 80, color: "from-gray-800 to-gray-600" },
      { name: "Go", level: 70, color: "from-gray-700 to-gray-600" },
      { name: "Bash", level: 85, color: "from-gray-600 to-gray-800" },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { name: "Prometheus", level: 85, color: "from-gray-800 to-gray-700" },
      { name: "Grafana", level: 80, color: "from-gray-700 to-gray-600" },
      { name: "ELK Stack", level: 75, color: "from-gray-600 to-gray-800" },
      { name: "Datadog", level: 70, color: "from-gray-800 to-gray-600" },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Faster title animation with enhanced 3D effect
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 120,
          rotationX: 35,
          transformPerspective: 3000,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Faster category animations with enhanced 3D effects
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            {
              opacity: 0,
              y: 80,
              rotationX: 25,
              rotationY: index % 2 === 0 ? 20 : -20,
              transformPerspective: 3000,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Enhanced hover effect
          const handleMouseEnter = () => {
            gsap.to(ref, {
              rotationY: index % 2 === 0 ? 5 : -5,
              rotationX: -3,
              scale: 1.03,
              z: 80,
              duration: 0.6,
              ease: "power3.out",
            })
          }

          const handleMouseLeave = () => {
            gsap.to(ref, {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              z: 0,
              duration: 0.6,
              ease: "power3.out",
            })
          }

          ref.addEventListener("mouseenter", handleMouseEnter)
          ref.addEventListener("mouseleave", handleMouseLeave)

          // Faster skill bar animations
          const skillBars = ref.querySelectorAll(".skill-bar")
          skillBars.forEach((bar, skillIndex) => {
            gsap.fromTo(
              bar,
              { width: "0%" },
              {
                width: bar.getAttribute("data-level") + "%",
                duration: 0.8,
                delay: index * 0.1 + skillIndex * 0.03 + 0.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ref,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
              },
            )
          })
        }
      })
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-3d py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-20 text-center relative"
          style={{
            transformStyle: "preserve-3d",
            background: "linear-gradient(135deg, #374151 0%, #4b5563 25%, #6b7280 50%, #9ca3af 75%, #d1d5db 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 100px rgba(75, 85, 99, 0.5)",
          }}
        >
          Technical Skills
          {/* 3D depth effect for title */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transform: "translateZ(-15px) translateX(3px) translateY(3px)",
              opacity: 0.4,
            }}
          >
            Technical Skills
          </div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              ref={(el) => (categoryRefs.current[categoryIndex] = el)}
              className="bg-gradient-to-br from-black/98 to-gray-950/98 backdrop-blur-xl rounded-3xl p-10 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-500 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(75, 85, 99, 0.1)",
              }}
            >
              {/* Enhanced decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-700/10 to-gray-800/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-gray-600/10 to-gray-700/10 rounded-full blur-2xl"></div>

              <h3 className="text-2xl font-bold mb-8 text-center text-gray-200 relative z-10">{category.title}</h3>

              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-semibold text-lg">{skill.name}</span>
                      <span className="text-gray-400 text-base font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative h-4 bg-gray-800/60 rounded-full overflow-hidden border border-gray-700/50">
                      <div
                        className={`skill-bar absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg transition-all duration-500 group-hover:shadow-xl relative overflow-hidden`}
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      >
                        {/* Enhanced glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced 3D depth indicator */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-gray-800/30 to-black/50 rounded-3xl -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
