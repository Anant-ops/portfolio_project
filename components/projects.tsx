"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github, Star, GitFork, Calendar, Users } from "lucide-react"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    title: "X_clone",
    description:
      "A comprehensive Twitter-inspired social media platform featuring real-time messaging, user authentication, tweet interactions, and responsive design. Built with modern React patterns and scalable architecture.",
    longDescription:
      "This full-stack social media application replicates core Twitter functionality including user profiles, tweet composition, real-time feeds, likes, retweets, and comments. Features include JWT authentication, image uploads, responsive design, and optimized performance with 99.9% uptime.",
    image: "/images/x-clone-dashboard.png",
    github: "https://github.com/Anant-ops/X_clone",
    demo: "https://x-clone-demo.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "Cloudinary"],
    stats: { stars: 45, forks: 12, commits: 127 },
    status: "Production Ready",
    category: "Full Stack",
    timeline: "3 months",
    teamSize: "Solo Project",
    highlights: [
      "Real-time messaging with Socket.io",
      "JWT-based authentication system",
      "Responsive design for all devices",
      "Image upload with Cloudinary integration",
    ],
  },
  {
    title: "Face Recognition System",
    description:
      "Advanced real-time identity verification system using computer vision and machine learning. Features live face detection, recognition accuracy of 95%+, and secure user authentication.",
    longDescription:
      "A sophisticated biometric authentication system built with Python and OpenCV. Implements face detection using Haar cascades, face recognition with LBPH algorithm, and real-time video processing. Includes anti-spoofing measures and database integration with 95%+ accuracy rate.",
    image: "/images/face-recognition-demo.png",
    github: "https://github.com/Anant-ops/face-recognition",
    demo: "https://face-recognition-demo.herokuapp.com",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "SQLite", "NumPy"],
    stats: { stars: 78, forks: 23, commits: 89 },
    status: "Active Development",
    category: "AI/ML",
    timeline: "2 months",
    teamSize: "Solo Project",
    highlights: [
      "95%+ recognition accuracy",
      "Real-time video processing",
      "Anti-spoofing security measures",
      "Database integration for user management",
    ],
  },
  {
    title: "Movie Recommendation System",
    description:
      "Intelligent recommendation engine using collaborative and content-based filtering algorithms. Processes user preferences and movie metadata to deliver personalized suggestions.",
    longDescription:
      "A machine learning-powered recommendation system that analyzes user behavior, movie ratings, and content features. Implements multiple algorithms including collaborative filtering, content-based filtering, and hybrid approaches for optimal recommendations with 87% user satisfaction rate.",
    image: "/images/movie-recommendation-ui.png",
    github: "https://github.com/Anant-ops/movie-recommendation",
    demo: "https://movie-rec-system.netlify.app",
    tech: ["Python", "Pandas", "Scikit-learn", "Jupyter", "Streamlit", "TMDB API"],
    stats: { stars: 34, forks: 18, commits: 156 },
    status: "Completed",
    category: "Data Science",
    timeline: "6 weeks",
    teamSize: "Solo Project",
    highlights: [
      "Hybrid recommendation algorithms",
      "87% user satisfaction rate",
      "TMDB API integration",
      "Interactive Streamlit dashboard",
    ],
  },
  {
    title: "DevOps Pipeline Automation",
    description:
      "Complete CI/CD pipeline infrastructure with automated testing, deployment, and monitoring. Includes Docker containerization, Kubernetes orchestration, and cloud deployment.",
    longDescription:
      "A comprehensive DevOps solution featuring automated CI/CD pipelines, infrastructure as code, container orchestration, and monitoring. Implements best practices for deployment automation, security scanning, and performance monitoring with 99.9% uptime and 60% faster deployments.",
    image: "/images/devops-pipeline-dashboard.png",
    github: "https://github.com/Anant-ops/devops-pipeline",
    demo: "https://pipeline-dashboard.example.com",
    tech: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Prometheus"],
    stats: { stars: 67, forks: 29, commits: 203 },
    status: "Production Ready",
    category: "DevOps",
    timeline: "4 months",
    teamSize: "Team of 3",
    highlights: [
      "60% faster deployment times",
      "99.9% system uptime",
      "Automated security scanning",
      "Multi-environment support",
    ],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Optimized title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Optimized project card animations
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })
    }
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-3d py-24 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-gradient-to-br from-black/95 to-gray-950/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border ${
                      project.status === "Production Ready"
                        ? "bg-gray-500/20 text-gray-300 border-gray-500/40"
                        : project.status === "Active Development"
                          ? "bg-gray-500/20 text-gray-300 border-gray-500/40"
                          : "bg-gray-500/20 text-gray-300 border-gray-500/40"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-slate-900/60 backdrop-blur-sm text-cyan-200 rounded-full text-sm font-semibold border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Project Stats */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="flex items-center justify-between text-cyan-100 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4 text-blue-400" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span>{project.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-cyan-100 group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{project.description}</p>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-200 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-sm">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-200 mb-2">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-gray-200 text-sm rounded-full border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
