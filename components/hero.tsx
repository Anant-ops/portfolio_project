"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import {
  ChevronDown,
  Code,
  Cloud,
  Server,
  Globe,
  Satellite,
  Cpu,
  Zap,
  Database,
  Shield,
  Layers,
  Box,
} from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const bioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline()

      // Enhanced 3D background animation
      gsap.to(backgroundRef.current, {
        rotationX: 8,
        rotationY: 12,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Advanced hero animations with faster timing
      tl.fromTo(
        nameRef.current,
        {
          opacity: 0,
          y: 250,
          scale: 0.5,
          rotationX: 60,
          transformPerspective: 3000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.8,
          ease: "power4.out",
        },
      )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.8,
            rotationX: 30,
            transformPerspective: 3000,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=1.2",
        )
        .fromTo(
          bioRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotationX: 20,
            transformPerspective: 3000,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.6",
        )
        .fromTo(
          taglineRef.current,
          {
            opacity: 0,
            y: 60,
            rotationX: 20,
            transformPerspective: 3000,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8",
        )
        .fromTo(
          iconsRef.current,
          {
            opacity: 0,
            scale: 0.3,
            rotationY: 180,
            transformPerspective: 3000,
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
          "-=0.5",
        )

      // Enhanced floating scroll indicator with faster animation
      gsap.to(scrollRef.current, {
        y: 20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })

      // Advanced 3D icon interactions with faster response
      Array.from(iconsRef.current?.children || []).forEach((icon, index) => {
        const handleMouseEnter = () => {
          gsap.to(icon, {
            rotationY: 30,
            rotationX: -20,
            scale: 1.4,
            z: 200,
            duration: 0.5,
            ease: "power3.out",
          })
        }

        const handleMouseLeave = () => {
          gsap.to(icon, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            duration: 0.5,
            ease: "power3.out",
          })
        }

        icon.addEventListener("mouseenter", handleMouseEnter)
        icon.addEventListener("mouseleave", handleMouseLeave)

        // Faster continuous subtle animation
        gsap.to(icon, {
          rotationZ: `random(-8, 8)`,
          y: `random(-15, 15)`,
          duration: `random(2, 4)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1,
        })
      })

      // Enhanced name floating animation
      gsap.to(nameRef.current, {
        y: 15,
        rotationX: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      })
    }
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-6 overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Enhanced 3D background elements with darker colors */}
      <div ref={backgroundRef} className="absolute inset-0 opacity-15" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute top-10 left-10 w-40 h-40 border border-gray-600/20 rounded-full animate-pulse">
          <div className="absolute inset-6 border border-gray-700/15 rounded-full"></div>
          <div className="absolute inset-12 border border-gray-800/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-gray-700/20 transform rotate-45 animate-pulse delay-1000">
          <div className="absolute inset-4 border border-gray-800/15 transform rotate-45"></div>
        </div>
        <div className="absolute top-1/2 right-20 w-24 h-24 border border-gray-600/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/2 left-20 w-28 h-28 border border-gray-700/20 transform rotate-12 opacity-25"></div>
      </div>

      <div className="text-center max-w-7xl mx-auto relative z-10" style={{ transformStyle: "preserve-3d" }}>
        {/* Enhanced Name with 3D effect and darker styling */}
        <div className="mb-8">
          <h1
            ref={nameRef}
            className="text-7xl md:text-9xl lg:text-[13rem] font-bold tracking-tight relative"
            style={{
              fontFamily: "-apple-system, SF Pro Display, system-ui, sans-serif",
              transformStyle: "preserve-3d",
              background: "linear-gradient(135deg, #1f2937 0%, #374151 25%, #4b5563 50%, #6b7280 75%, #9ca3af 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 120px rgba(75, 85, 99, 0.6)",
              filter: "drop-shadow(0 0 30px rgba(75, 85, 99, 0.4))",
            }}
          >
            ANANT GOYAL
            {/* 3D depth effect */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transform: "translateZ(-20px) translateX(4px) translateY(4px)",
                opacity: 0.3,
              }}
            >
              ANANT GOYAL
            </div>
          </h1>
        </div>

        {/* Professional Title with 3D effect */}
        <div ref={titleRef} className="mb-12 relative" style={{ transformStyle: "preserve-3d" }}>
          <div className="bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 shadow-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
              DevOps Engineer & Cloud Architect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-500 mx-auto rounded-full"></div>
          </div>
          {/* 3D depth effect for title box */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700/20 -z-10 transform translateZ(-10px) translateX(3px) translateY(3px)"></div>
        </div>

        {/* Bio Section */}
        <div ref={bioRef} className="mb-16 relative" style={{ transformStyle: "preserve-3d" }}>
          <div className="bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/40 shadow-2xl max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full border-4 border-gray-700/50 shadow-2xl flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-300">AG</div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-600 rounded-full border-4 border-black"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-200 mb-4">About Me</h3>

              <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
                Passionate DevOps Engineer and Cloud Architect with 2+ years of experience in building scalable
                infrastructure and automating reliable systems. I specialize in containerization, CI/CD pipelines, and
                cloud-native solutions that drive business growth and operational excellence.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto">
                Currently pursuing B.Tech in Computer Science at SRM Institute of Science & Technology, I combine
                academic knowledge with hands-on industry experience to deliver innovative solutions. My expertise spans
                across AWS, Docker, Kubernetes, and modern DevOps practices.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-black/60 px-4 py-2 rounded-full border border-gray-800/50">
                  <span className="text-gray-300 text-sm font-semibold">📍 Chennai, India</span>
                </div>
                <div className="bg-black/60 px-4 py-2 rounded-full border border-gray-800/50">
                  <span className="text-gray-300 text-sm font-semibold">🎓 B.Tech CSE Student</span>
                </div>
                <div className="bg-black/60 px-4 py-2 rounded-full border border-gray-800/50">
                  <span className="text-gray-300 text-sm font-semibold">💼 2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          {/* 3D depth effect for bio box */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-black/60 backdrop-blur-xl rounded-3xl border border-gray-900/30 -z-10 transform translateZ(-10px) translateX(4px) translateY(4px)"></div>
        </div>

        <p
          ref={taglineRef}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto leading-relaxed mb-20 font-medium"
          style={{ transformStyle: "preserve-3d" }}
        >
          Building Scalable Infrastructure & Automating Reliable Systems
        </p>

        {/* Enhanced 3D Tech Icons Grid with darker colors */}
        <div
          ref={iconsRef}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-24 max-w-5xl mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[
            { icon: Code, label: "Development", color: "from-gray-700/90 to-gray-600/90" },
            { icon: Cloud, label: "Cloud", color: "from-gray-600/90 to-gray-700/90" },
            { icon: Server, label: "DevOps", color: "from-gray-800/90 to-gray-700/90" },
            { icon: Globe, label: "Global Scale", color: "from-gray-700/90 to-gray-800/90" },
            { icon: Satellite, label: "Satellite Tech", color: "from-gray-600/90 to-gray-800/90" },
            { icon: Cpu, label: "AI/ML", color: "from-gray-800/90 to-gray-600/90" },
            { icon: Zap, label: "Performance", color: "from-gray-700/90 to-gray-800/90" },
            { icon: Database, label: "Data", color: "from-gray-600/90 to-gray-700/90" },
            { icon: Shield, label: "Security", color: "from-gray-800/90 to-gray-700/90" },
            { icon: Layers, label: "Architecture", color: "from-gray-700/90 to-gray-600/90" },
            { icon: Box, label: "Containers", color: "from-gray-600/90 to-gray-800/90" },
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-2xl border border-gray-500/40 backdrop-blur-sm group-hover:shadow-3xl transition-all duration-500 relative overflow-hidden`}
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(107, 114, 128, 0.2)",
                  }}
                >
                  <IconComponent className="w-8 h-8 text-gray-200 mx-auto relative z-10" />

                  {/* 3D depth effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent rounded-2xl"></div>
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-black/30 to-black/50 rounded-2xl -z-10 blur-sm"></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div
        ref={scrollRef}
        onClick={scrollToNext}
        className="absolute bottom-12 cursor-pointer group z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-col items-center transform hover:scale-125 transition-all duration-500">
          <span className="text-sm text-gray-500 mb-3 group-hover:text-gray-300 transition-colors font-medium">
            Scroll to explore
          </span>
          <div className="bg-gradient-to-br from-gray-700/40 to-gray-800/40 backdrop-blur-sm rounded-full p-4 group-hover:from-gray-600/50 group-hover:to-gray-700/50 transition-all duration-500 border border-gray-600/40 shadow-2xl">
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-200 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  )
}
