"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const certificates = [
  {
    title: "Data Analysis with Python",
    issuer: "IBM (Coursera)",
    issueDate: "March 2024",
    credentialId: "IBM-DA-2024-001",
    link: "#",
    description:
      "Comprehensive course covering data manipulation, analysis, and visualization using Python libraries including Pandas, NumPy, Matplotlib, and Seaborn.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "Statistical Analysis"],
    duration: "6 weeks",
    grade: "98.5%",
    verified: true,
  },
  {
    title: "Machine Learning for All",
    issuer: "University of London (Coursera)",
    issueDate: "February 2024",
    credentialId: "UOL-ML-2024-002",
    link: "#",
    description:
      "Foundational machine learning concepts and practical applications across various domains including supervised and unsupervised learning algorithms.",
    skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "Model Evaluation", "Feature Engineering"],
    duration: "8 weeks",
    grade: "96.2%",
    verified: true,
  },
  {
    title: "Databases & SQL for Data Science with Python (Honors)",
    issuer: "IBM (Coursera)",
    issueDate: "January 2024",
    credentialId: "IBM-SQL-2024-003",
    link: "#",
    description:
      "Advanced database management and SQL querying techniques for data science applications with hands-on experience in real-world datasets.",
    skills: ["SQL", "PostgreSQL", "Database Design", "Data Modeling", "Python Integration"],
    duration: "5 weeks",
    grade: "99.1%",
    verified: true,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "December 2023",
    credentialId: "AWS-CCP-2023-004",
    link: "#",
    description:
      "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support to build overall AWS Cloud knowledge.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "IAM", "Cloud Security"],
    duration: "Self-paced",
    grade: "Certified",
    verified: true,
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    issueDate: "November 2023",
    credentialId: "DCA-2023-005",
    link: "#",
    description:
      "Comprehensive understanding of Docker containerization technology, including image creation, container orchestration, and deployment strategies.",
    skills: ["Docker", "Containerization", "Docker Compose", "Container Security", "Registry Management"],
    duration: "Self-paced",
    grade: "Certified",
    verified: true,
  },
  {
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "October 2023",
    credentialId: "CKA-2023-006",
    link: "#",
    description:
      "Hands-on certification demonstrating skills in Kubernetes cluster administration, troubleshooting, and management of containerized applications.",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting", "YAML"],
    duration: "Self-paced",
    grade: "Certified",
    verified: true,
  },
]

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const certificateRefs = useRef<(HTMLDivElement | null)[]>([])

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

      // Optimized certificate cards animation
      certificateRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
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
      id="certificates"
      ref={sectionRef}
      className="section-3d py-24 px-6 relative bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent"
        >
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certificateRefs.current[index] = el)}
              className="group relative bg-gradient-to-br from-black/95 to-gray-950/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Verification Badge */}
              {cert.verified && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full text-xs border border-emerald-500/30">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              )}

              {/* Certificate Icon */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 rounded-xl border border-cyan-400/30">
                    <Award className="w-8 h-8 text-cyan-300" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-cyan-100 group-hover:text-cyan-200 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-slate-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Issued: {cert.issueDate}</span>
                </div>
                <div className="text-slate-500 text-xs">
                  <span>ID: {cert.credentialId}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Duration: {cert.duration}</span>
                  <span className="text-emerald-300 font-semibold">{cert.grade}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-200 mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm w-full justify-center"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
