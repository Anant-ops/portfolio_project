"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const educationData = {
  degree: "B.Tech, Computer Science & Engineering",
  institution: "SRM Institute of Science & Technology (SRMIST)",
  duration: "2021 - 2025",
  expectedGraduation: "May 2025",
  cgpa: "8.7/10.0",
  relevantCoursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Cloud Computing",
    "Machine Learning",
    "DevOps & Containerization",
  ],
  projects: [
    "Final Year Project: Automated CI/CD Pipeline with Kubernetes",
    "Database Project: E-commerce Platform with Microservices",
    "Network Security: Intrusion Detection System Implementation",
  ],
  achievements: [
    "Dean's List for Academic Excellence (2022-2024)",
    "Best Project Award for Cloud Infrastructure Design",
    "Technical Lead - University DevOps Club",
    "Organized 3 technical workshops on containerization",
  ],
  extracurricular: [
    "President - Computer Science Student Association",
    "Core Team Member - Technical Symposium 2023",
    "Volunteer - Open Source Contribution Program",
  ],
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Enhanced title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: 25,
          transformPerspective: 2000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Enhanced education card animation
      gsap.fromTo(
        educationRef.current,
        {
          opacity: 0,
          scale: 0.9,
          rotationY: 10,
          transformPerspective: 2000,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Enhanced hover effect
      const handleMouseEnter = () => {
        gsap.to(educationRef.current, {
          rotationY: 3,
          rotationX: -2,
          scale: 1.02,
          z: 50,
          duration: 0.8,
          ease: "power3.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(educationRef.current, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          z: 0,
          duration: 0.8,
          ease: "power3.out",
        })
      }

      educationRef.current?.addEventListener("mouseenter", handleMouseEnter)
      educationRef.current?.addEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-3d py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
          style={{
            transformStyle: "preserve-3d",
            textShadow: "0 0 80px rgba(59, 130, 246, 0.3)",
          }}
        >
          Education
        </h2>

        <div
          ref={educationRef}
          className="bg-gradient-to-br from-black/98 to-gray-950/98 backdrop-blur-xl rounded-3xl p-12 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700 shadow-2xl hover:shadow-3xl relative overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.1)",
          }}
        >
          {/* Enhanced decorative elements */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

          {/* Enhanced Header */}
          <div className="flex items-start space-x-8 mb-12">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-3xl shadow-2xl border border-blue-400/30">
                <GraduationCap className="w-16 h-16 text-cyan-300" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-4xl font-bold text-white mb-4">{educationData.degree}</h3>
              <p className="text-2xl text-cyan-300 font-bold mb-4">{educationData.institution}</p>
              <div className="flex flex-wrap items-center gap-6 text-gray-300 text-base mb-6">
                <div className="flex items-center space-x-2 bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{educationData.duration}</span>
                </div>
                <div className="bg-cyan-500/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 font-bold">
                  CGPA: {educationData.cgpa}
                </div>
              </div>
              <p className="text-gray-300 text-lg font-semibold">
                <strong>Expected Graduation:</strong> {educationData.expectedGraduation}
              </p>
            </div>
          </div>

          {/* Enhanced Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Relevant Coursework */}
            <div>
              <h4 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
                Relevant Coursework
              </h4>
              <div className="space-y-3">
                {educationData.relevantCoursework.map((course, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-cyan-400 mr-4 mt-1 text-lg">•</span>
                    <span className="text-gray-300 text-base font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div>
              <h4 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-purple-400" />
                Academic Projects
              </h4>
              <div className="space-y-3">
                {educationData.projects.map((project, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-purple-400 mr-4 mt-1 text-lg">•</span>
                    <span className="text-gray-300 text-base font-medium">{project}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-400" />
                Academic Achievements
              </h4>
              <div className="space-y-3">
                {educationData.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-yellow-400 mr-4 mt-1 text-lg">★</span>
                    <span className="text-yellow-200 text-base font-semibold">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <h4 className="text-2xl font-bold text-cyan-200 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-green-400" />
                Leadership & Activities
              </h4>
              <div className="space-y-3">
                {educationData.extracurricular.map((activity, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-400 mr-4 mt-1 text-lg">•</span>
                    <span className="text-gray-300 text-base font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced depth indicator */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-gray-800/20 to-black/40 rounded-3xl -z-10 blur-xl"></div>
        </div>
      </div>
    </section>
  )
}
