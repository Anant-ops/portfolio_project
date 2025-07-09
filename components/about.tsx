"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, Award, TrendingUp } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const experiences = [
  {
    title: "Web Development Intern",
    company: "Sudaku CodeClause Private Limited",
    period: "Dec 2024 – Jan 2025",
    type: "Internship",
    description: [
      "Developed 8+ responsive websites using modern front-end technologies including React, Next.js, and TailwindCSS",
      "Implemented responsive design principles ensuring 100% mobile compatibility across all projects",
      "Collaborated with design team to deliver pixel-perfect implementations with 98% accuracy",
      "Optimized website performance achieving 95+ Lighthouse scores for all delivered projects",
      "Delivered real-world projects with accessible design following WCAG 2.1 guidelines",
      "Integrated modern animation libraries (GSAP, Framer Motion) for enhanced user experience",
    ],
    achievements: [
      "Reduced page load times by 45% through advanced code optimization techniques",
      "Implemented comprehensive SEO strategies increasing organic traffic by 35%",
      "Mentored 3 junior developers on modern React patterns and best practices",
      "Led code review sessions improving team code quality by 40%",
    ],
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript", "Vercel", "GSAP", "Framer Motion"],
    impact: "Delivered 8 production-ready websites serving 50K+ monthly users",
  },
  {
    title: "DevOps Intern",
    company: "ABC Technologies",
    period: "Jan 2024 – June 2024",
    type: "Internship",
    description: [
      "Designed and implemented CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment time by 65%",
      "Dockerized 20+ applications and deployed to Kubernetes clusters with 99.95% uptime",
      "Automated infrastructure provisioning using Terraform, managing 75+ AWS resources",
      "Implemented comprehensive monitoring solutions with Prometheus and Grafana for 25+ microservices",
      "Collaborated with development teams to establish DevOps best practices and security standards",
      "Set up automated testing pipelines reducing manual testing efforts by 80%",
    ],
    achievements: [
      "Reduced manual deployment efforts by 85% through comprehensive automation",
      "Implemented zero-downtime deployments for 15+ critical applications",
      "Established disaster recovery procedures reducing RTO from 4 hours to 20 minutes",
      "Achieved 35% cost reduction through infrastructure optimization strategies",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "AWS",
      "Prometheus",
      "Grafana",
      "Helm",
    ],
    impact: "Managed infrastructure supporting 100K+ daily active users with 99.95% uptime",
  },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

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

      // Enhanced experience items animation
      experienceRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            {
              opacity: 0,
              x: -100,
              rotationY: -15,
              transformPerspective: 2000,
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 1.2,
              delay: index * 0.3,
              ease: "power4.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          )

          // Enhanced hover effect
          const handleMouseEnter = () => {
            gsap.to(ref, {
              rotationY: 3,
              rotationX: -2,
              scale: 1.02,
              z: 50,
              duration: 0.8,
              ease: "power3.out",
            })
          }

          const handleMouseLeave = () => {
            gsap.to(ref, {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              z: 0,
              duration: 0.8,
              ease: "power3.out",
            })
          }

          ref.addEventListener("mouseenter", handleMouseEnter)
          ref.addEventListener("mouseleave", handleMouseLeave)
        }
      })
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-3d py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300 bg-clip-text text-transparent"
          style={{
            transformStyle: "preserve-3d",
            textShadow: "0 0 80px rgba(59, 130, 246, 0.3)",
          }}
        >
          Professional Experience
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (experienceRefs.current[index] = el)}
              className="relative bg-gradient-to-br from-black/98 to-gray-950/98 backdrop-blur-xl rounded-3xl p-10 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700 shadow-2xl hover:shadow-3xl"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.1)",
              }}
            >
              {/* Enhanced timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-10 -bottom-16 w-2 h-16 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent rounded-full shadow-2xl"></div>
              )}

              {/* Enhanced timeline dot */}
              <div className="absolute -left-4 top-10 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full shadow-2xl border-4 border-blue-400/50"></div>

              <div className="ml-8">
                {/* Enhanced Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-2">{exp.title}</h3>
                    <p className="text-2xl text-gray-400 font-bold mb-3">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
                      <div className="flex items-center space-x-2 bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-200 rounded-full text-xs border border-blue-400/30 font-bold">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Impact Metric */}
                  <div className="mt-6 lg:mt-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 text-cyan-200 text-sm font-bold">
                      <TrendingUp className="w-5 h-5" />
                      <span>Impact</span>
                    </div>
                    <p className="text-cyan-100 text-sm mt-2 font-semibold">{exp.impact}</p>
                  </div>
                </div>

                {/* Enhanced Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-400 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 leading-relaxed flex items-start text-base">
                        <span className="text-cyan-400 mr-4 mt-1 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-400 mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-4 text-yellow-400" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-yellow-200 leading-relaxed flex items-start text-base">
                        <span className="text-yellow-400 mr-4 mt-1 text-lg">★</span>
                        <span className="font-semibold">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-gray-400 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                    Technologies & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-gray-700/90 to-gray-600/90 backdrop-blur-sm text-white text-sm rounded-full border border-blue-500/30 hover:border-blue-400/50 hover:from-gray-600/90 hover:to-gray-500/90 transition-all duration-500 shadow-xl font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced depth indicator */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-gray-800/20 to-black/40 rounded-3xl -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
