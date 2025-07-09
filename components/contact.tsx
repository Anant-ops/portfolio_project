"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Linkedin, Github, Send } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "anantgoyal024@gmail.com",
    href: "mailto:anantgoyal024@gmail.com",
    description: "Drop me a line anytime",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/anant-goyal-2799b1316/",
    description: "Let's build our professional network",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/Anant-ops",
    description: "Check out my latest projects",
    color: "from-gray-600/20 to-gray-500/20",
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contactRefs = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLDivElement>(null)

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

      // Enhanced contact items animation
      contactRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            {
              opacity: 0,
              y: 50,
              rotationY: index % 2 === 0 ? 15 : -15,
              transformPerspective: 2000,
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              duration: 1,
              delay: index * 0.2,
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
              rotationY: index % 2 === 0 ? 5 : -5,
              rotationX: -3,
              scale: 1.05,
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

      // Enhanced contact form animation
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          scale: 0.9,
          rotationX: 15,
          transformPerspective: 2000,
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Enhanced hover effect for form
      const handleFormMouseEnter = () => {
        gsap.to(formRef.current, {
          rotationY: 2,
          rotationX: -1,
          scale: 1.02,
          z: 40,
          duration: 0.8,
          ease: "power3.out",
        })
      }

      const handleFormMouseLeave = () => {
        gsap.to(formRef.current, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          z: 0,
          duration: 0.8,
          ease: "power3.out",
        })
      }

      formRef.current?.addEventListener("mouseenter", handleFormMouseEnter)
      formRef.current?.addEventListener("mouseleave", handleFormMouseLeave)
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-3d py-32 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
          style={{
            transformStyle: "preserve-3d",
            textShadow: "0 0 80px rgba(59, 130, 246, 0.3)",
          }}
        >
          Let's Connect & Collaborate
        </h2>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Enhanced Contact Information */}
          <div>
            <div className="mb-16">
              <h3 className="text-4xl font-bold text-white mb-8">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
                Whether you're looking for a DevOps engineer, cloud architect, or just want to connect with a fellow
                tech enthusiast, I'd love to hear from you!
              </p>
            </div>

            <div className="grid gap-10">
              {contacts.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} ref={(el) => (contactRefs.current[index] = el)} className="group relative">
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-8 bg-gradient-to-br from-black/98 to-gray-950/98 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700 shadow-2xl hover:shadow-3xl block"
                      style={{
                        transformStyle: "preserve-3d",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <div
                        className={`bg-gradient-to-br ${contact.color} p-6 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-115 border border-blue-400/30`}
                      >
                        <IconComponent className="w-8 h-8 text-cyan-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-500">
                          {contact.label}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg font-semibold">
                          {contact.value}
                        </p>
                        <p className="text-gray-500 text-base mt-2">{contact.description}</p>
                      </div>
                    </a>

                    {/* Enhanced depth indicator */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-gray-800/20 to-black/40 rounded-3xl -z-10 blur-xl"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div ref={formRef} style={{ transformStyle: "preserve-3d" }}>
            <div className="bg-gradient-to-br from-black/98 to-gray-950/98 backdrop-blur-xl rounded-3xl p-12 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-700 shadow-2xl hover:shadow-3xl relative">
              <h3 className="text-4xl font-bold text-white mb-10 flex items-center">
                <Send className="w-10 h-10 mr-5 text-cyan-400" />
                Send me a message
              </h3>

              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-bold text-cyan-200 mb-4">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-6 py-5 bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-500 text-lg font-medium"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-bold text-cyan-200 mb-4">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-6 py-5 bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-500 text-lg font-medium"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-bold text-cyan-200 mb-4">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-6 py-5 bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-500 text-lg font-medium"
                    placeholder="Let's discuss an opportunity"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-cyan-200 mb-4">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    className="w-full px-6 py-5 bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-500 resize-none text-lg font-medium"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-4 text-xl shadow-2xl border border-blue-400/30"
                >
                  <Send className="w-7 h-7" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Enhanced depth indicator */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-gray-800/20 to-black/40 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-24 pt-16 border-t border-gray-700/50">
          <div className="text-center space-y-6">
            <p className="text-gray-500 text-xl font-semibold">
              © 2025 Anant Goyal. Built with Next.js, TailwindCSS & GSAP
            </p>
            <p className="text-gray-600 text-lg">
              Crafted with ❤️ for innovation and excellence in DevOps & Cloud Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
