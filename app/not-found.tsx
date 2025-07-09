"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useRouter } from "next/navigation"
import { Home, RefreshCw } from "lucide-react"

export default function NotFound() {
  const [countdown, setCountdown] = useState(10)
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const countdownRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Advanced 3D animations
    const tl = gsap.timeline()

    tl.fromTo(
      numberRef.current,
      {
        opacity: 0,
        scale: 0.2,
        rotationY: 270,
        rotationX: 45,
        transformPerspective: 1500,
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        duration: 2.5,
        ease: "back.out(2)",
      },
    )
      .fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 80,
          rotationX: 30,
          transformPerspective: 1500,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=1.5",
      )
      .fromTo(
        countdownRef.current,
        {
          opacity: 0,
          scale: 0.6,
          rotationX: 20,
          transformPerspective: 1500,
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8",
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" },
        "-=0.5",
      )

    // Advanced floating animation for 404 number
    gsap.to(numberRef.current, {
      y: 30,
      rotationX: 8,
      rotationY: 5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const goHome = () => {
    router.push("/")
  }

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-800/30"></div>
      <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/5 rotate-45 animate-pulse">
        <div className="absolute inset-4 border border-white/5 rotate-45"></div>
      </div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/5 rotate-12 animate-pulse delay-1000">
        <div className="absolute inset-3 border border-white/5 rotate-45"></div>
      </div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-white/20 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-white/15 rounded-full blur-sm animate-pulse delay-500"></div>

      <div className="text-center max-w-3xl mx-auto relative z-10" style={{ transformStyle: "preserve-3d" }}>
        {/* Advanced 404 Number with complex 3D effect */}
        <h1
          ref={numberRef}
          className="text-9xl md:text-[16rem] font-bold mb-12 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 bg-clip-text text-transparent transform-gpu"
          style={{
            transformStyle: "preserve-3d",
            textShadow: "0 0 100px rgba(255, 255, 255, 0.1)",
          }}
        >
          404
        </h1>

        <p ref={textRef} className="text-3xl md:text-4xl mb-12 text-gray-300 font-semibold">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div ref={countdownRef} className="space-y-8 mb-12">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 transform-gpu hover:scale-105 transition-all duration-500 shadow-2xl">
            <p className="text-2xl mb-4 text-gray-300 font-semibold">Redirecting to home in</p>
            <div className="text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {countdown}
            </div>
            <p className="text-lg text-gray-500 mt-3 font-medium">seconds</p>
          </div>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={goHome}
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-white/20 to-gray-300/20 hover:from-white/30 hover:to-gray-300/30 text-white px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border border-white/30 shadow-xl"
          >
            <Home className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            <span className="font-bold text-lg">Go Home Now</span>
          </button>

          <button
            onClick={refreshPage}
            className="group inline-flex items-center space-x-4 bg-gradient-to-r from-gray-700/80 to-gray-600/80 hover:from-gray-600/80 hover:to-gray-500/80 text-white px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border border-gray-600/50 shadow-xl"
          >
            <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-bold text-lg">Refresh Page</span>
          </button>
        </div>

        <div className="mt-12 text-gray-500 text-lg">
          <p>Lost? No worries! Let's get you back on track.</p>
        </div>
      </div>
    </div>
  )
}
