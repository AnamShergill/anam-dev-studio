"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import { projects } from "@/data/portfolio"
import { GitHubIcon } from "@/components/icons"
import AnimatedHeading from "@/components/animated-heading"
import Image from "next/image"

const categories = ["Featured", "All", "Business", "AI Application", "AI Infrastructure", "AI / Robotics", "E-Commerce", "Frontend", "Productivity", "Utility Tool", "Landing Page"]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("Featured")

  const filteredProjects = activeCategory === "Featured"
    ? projects.filter(project => project.featured)
    : activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-8 md:py-16 w-full min-w-full h-auto relative overflow-x-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              Featured Work
            </span>
          </motion.div>
          
          <AnimatedHeading 
            highlight="Projects"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Featured Projects
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            A showcase of professional client work and personal projects
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Button
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="transition-all hover:scale-105"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Bento Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full min-w-0"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className={`overflow-hidden rounded-xl group transition-all h-full flex flex-col relative hover:shadow-2xl ${
                project.isAIAutomation
                  ? 'border-purple-400/50 hover:border-purple-300 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-blue-500/10 hover:shadow-purple-500/20'
                  : project.isCloudNative
                  ? 'border-cyan-400/50 hover:border-cyan-300 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 hover:shadow-cyan-500/20'
                  : project.isRobotics
                  ? 'border-cyan-500/40 hover:border-cyan-400 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 hover:shadow-cyan-500/20'
                  : project.isAI 
                  ? 'border-purple-500/30 hover:border-purple-500 bg-gradient-to-br from-purple-500/5 to-blue-500/5 hover:shadow-purple-500/20' 
                  : 'hover:border-blue-500 hover:shadow-blue-500/20'
              }`}>
                {/* EXTREMELY VISIBLE Shimmer Effect for Featured/AI Projects */}
                {(project.featured || project.isAI || project.isCloudNative || project.isAIAutomation) && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5] opacity-0">
                    <div 
                      className="absolute w-[300%] h-[300%] -top-full -left-full"
                      style={{
                        background: project.isAIAutomation
                          ? 'linear-gradient(110deg, transparent 20%, rgba(168, 85, 247, 0.05) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(34, 211, 238, 0.05) 55%, transparent 80%)'
                          : project.isCloudNative
                          ? 'linear-gradient(110deg, transparent 20%, rgba(34, 211, 238, 0.05) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(34, 211, 238, 0.05) 55%, transparent 80%)'
                          : project.isRobotics
                          ? 'linear-gradient(110deg, transparent 20%, rgba(6, 182, 212, 0.05) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(6, 182, 212, 0.05) 55%, transparent 80%)'
                          : 'linear-gradient(110deg, transparent 20%, rgba(59, 130, 246, 0.05) 45%, rgba(255, 255, 255, 0.05) 50%, rgba(59, 130, 246, 0.05) 55%, transparent 80%)',
                        animation: 'shimmer-card 4s infinite',
                        filter: 'blur(3px)',
                      }}
                    />
                  </div>
                )}

                {/* Universal Shimmer Effect for ALL Cards */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5] opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <div 
                    className="absolute w-[300%] h-[300%] -top-full -left-full"
                    style={{
                      background: 'linear-gradient(110deg, transparent 20%, rgba(59, 130, 246, 0.08) 45%, rgba(255, 255, 255, 0.08) 50%, rgba(59, 130, 246, 0.08) 55%, transparent 80%)',
                      animation: 'shimmer-card 4s infinite',
                      filter: 'blur(2px)',
                    }}
                  />
                </div>
                
                {/* Robotics Animated Border */}
                {project.isRobotics && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 0%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* AI Automation Animated Border */}
                {project.isAIAutomation && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.15), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 0%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* Universal Animated Border for ALL Cards */}
                {!project.isRobotics && !project.isAIAutomation && !project.isCloudNative && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 0%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* AI Automation Glow Effect */}
                {project.isAIAutomation && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.05), transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(34, 211, 238, 0.05), transparent 50%)",
                        "radial-gradient(circle at 0% 100%, rgba(59, 130, 246, 0.05), transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.05), transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* AI Glow Effect */}
                {project.isAI && !project.isRobotics && !project.isAIAutomation && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.05), transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.05), transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.05), transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* Universal Glow Effect for ALL Other Cards */}
                {!project.isAI && !project.isRobotics && !project.isCloudNative && !project.isAIAutomation && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05), transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.05), transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05), transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* AI Automation Floating Particles */}
                {project.isAIAutomation && (
                  <>
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-70 blur-sm"
                      animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-sm"
                      animate={{
                        y: [0, 25, 0],
                        x: [0, -25, 0],
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-70 blur-sm"
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.6, 1],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/3 left-1/2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-60 blur-sm"
                      animate={{
                        y: [0, 18, 0],
                        x: [0, -12, 0],
                        scale: [1, 1.7, 1],
                      }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-65 blur-sm"
                      animate={{
                        y: [0, -22, 0],
                        x: [0, 18, 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                    />
                  </>
                )}

                {/* Robotics Floating Particles */}
                {project.isRobotics && (
                  <>
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 blur-sm"
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 blur-sm"
                      animate={{
                        y: [0, 15, 0],
                        x: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 blur-sm"
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                  </>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm relative overflow-hidden">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 relative z-10" />
                      <span className="text-xs font-semibold text-yellow-500 relative z-10">Featured</span>
                    </div>
                  </div>
                )}

                {/* AI Badge */}
                {project.isAI && !project.isRobotics && !project.isAIAutomation && (
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 5px rgba(168, 85, 247, 0.1)",
                          "0 0 8px rgba(168, 85, 247, 0.15)",
                          "0 0 5px rgba(168, 85, 247, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm relative overflow-hidden"
                    >
                      <span className="text-xs font-semibold text-purple-400 relative z-10">🤖 AI Powered</span>
                    </motion.div>
                  </div>
                )}

                {/* AI Automation Multiple Badges */}
                {project.isAIAutomation && project.badges && (
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    {project.badges.map((badge, idx) => (
                      <motion.div
                        key={badge}
                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                      >
                        <motion.div
                          animate={{
                            boxShadow: [
                              badge === "AI Powered" 
                                ? "0 0 5px rgba(168, 85, 247, 0.1)"
                                : badge === "Automation"
                                ? "0 0 5px rgba(34, 211, 238, 0.1)"
                                : "0 0 5px rgba(59, 130, 246, 0.1)",
                              badge === "AI Powered"
                                ? "0 0 8px rgba(168, 85, 247, 0.15)"
                                : badge === "Automation"
                                ? "0 0 8px rgba(34, 211, 238, 0.15)"
                                : "0 0 8px rgba(59, 130, 246, 0.15)",
                              badge === "AI Powered"
                                ? "0 0 5px rgba(168, 85, 247, 0.1)"
                                : badge === "Automation"
                                ? "0 0 5px rgba(34, 211, 238, 0.1)"
                                : "0 0 5px rgba(59, 130, 246, 0.1)",
                            ],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.3,
                          }}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-full backdrop-blur-sm relative overflow-hidden ${
                            badge === "AI Powered"
                              ? "bg-gradient-to-r from-purple-500/30 to-purple-600/30 border border-purple-400/50"
                              : badge === "Automation"
                              ? "bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 border border-cyan-400/50"
                              : "bg-gradient-to-r from-blue-500/30 to-blue-600/30 border border-blue-400/50"
                          }`}
                        >
                          <motion.span
                            animate={{ 
                              rotate: badge === "AI Powered" ? [0, 360] : 0,
                              scale: badge === "Automation" ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ 
                              duration: badge === "AI Powered" ? 3 : 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="text-xs relative z-10"
                          >
                            {badge === "AI Powered" ? "🤖" : badge === "Automation" ? "⚡" : "🚀"}
                          </motion.span>
                          <span className={`text-[10px] font-bold relative z-10 ${
                            badge === "AI Powered"
                              ? "text-purple-200"
                              : badge === "Automation"
                              ? "text-cyan-200"
                              : "text-blue-200"
                          }`}>
                            {badge}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Robotics Badge */}
                {project.isRobotics && (
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 5px rgba(6, 182, 212, 0.1)",
                          "0 0 8px rgba(6, 182, 212, 0.15)",
                          "0 0 5px rgba(6, 182, 212, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-sm relative overflow-hidden"
                    >
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="text-xs relative z-10"
                      >
                        ⚙️
                      </motion.span>
                      <span className="text-xs font-semibold text-cyan-300 relative z-10">AI Robotics</span>
                    </motion.div>
                  </div>
                )}

                {/* Cloud Native Badge */}
                {project.isCloudNative && (
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 5px rgba(34, 211, 238, 0.1)",
                          "0 0 8px rgba(34, 211, 238, 0.15)",
                          "0 0 5px rgba(34, 211, 238, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-300/60 backdrop-blur-sm relative overflow-hidden"
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="text-xs relative z-10"
                      >
                        ☸️
                      </motion.span>
                      <span className="text-xs font-bold text-cyan-200 relative z-10">Cloud Native</span>
                    </motion.div>
                  </div>
                )}

                {/* Cloud Native Animated Grid Background */}
                {project.isCloudNative && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '20px 20px'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}

                {/* Cloud Native Floating Particles */}
                {project.isCloudNative && (
                  <>
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-70 blur-sm"
                      animate={{
                        y: [0, -25, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-70 blur-sm"
                      animate={{
                        y: [0, 20, 0],
                        x: [0, -20, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70 blur-sm"
                      animate={{
                        y: [0, -18, 0],
                        x: [0, 12, 0],
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />
                    <motion.div
                      className="absolute top-1/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 blur-sm"
                      animate={{
                        y: [0, 15, 0],
                        x: [0, -10, 0],
                        scale: [1, 1.6, 1],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    />
                  </>
                )}

                {/* Project Image with Overlay */}
                <div className={`relative h-56 overflow-hidden ${
                  project.isAIAutomation
                    ? 'bg-gradient-to-br from-purple-900/40 via-cyan-900/40 to-blue-900/40'
                    : project.isCloudNative
                    ? 'bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40'
                    : project.isRobotics
                    ? 'bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30'
                    : project.isAI 
                    ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900'
                }`}>
                  {/* Browser Frame Mockup */}
                  <div className="absolute inset-0 p-3">
                    <div className="w-full h-full bg-gray-900/95 rounded-lg border border-gray-700/50 overflow-hidden backdrop-blur-sm shadow-2xl">
                      {/* Browser Top Bar */}
                      <div className="h-7 bg-gray-800/90 border-b border-gray-700/50 flex items-center px-3 gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="px-3 py-0.5 bg-gray-700/50 rounded text-[9px] text-gray-400 font-mono truncate max-w-[150px]">
                            {project.liveUrl ? new URL(project.liveUrl).hostname : project.githubUrl ? new URL(project.githubUrl).hostname : 'preview'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Live Website Screenshot */}
                      <div className="relative w-full h-[calc(100%-28px)] bg-gray-900 overflow-hidden">
                        {/* Actual screenshot image with Next.js optimization */}
                        <motion.div
                          className="relative w-full h-full"
                          initial={{ scale: 1 }}
                          whileHover={{ 
                            scale: 1.08,
                            transition: { duration: 0.4 }
                          }}
                          animate={
                            // Slow zoom animation for featured projects
                            (project.featured || project.id === 1 || project.id === 2 || project.id === 5) ? {
                              scale: [1, 1.05, 1],
                            } : {}
                          }
                          transition={
                            (project.featured || project.id === 1 || project.id === 2 || project.id === 5) ? {
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            } : {}
                          }
                        >
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top"
                            quality={75}
                            priority={project.featured || index < 3}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                            onError={(e) => {
                              // Hide image and show fallback on error
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </motion.div>
                        
                        {/* Animated spotlight glow on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                          initial={{ background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent 60%)' }}
                          whileHover={{
                            background: [
                              'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15), transparent 50%)',
                              'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15), transparent 50%)',
                              'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15), transparent 50%)',
                              'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15), transparent 50%)',
                              'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15), transparent 50%)',
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        
                        {/* Shimmer sweep effect on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background: 'linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.2) 50%, transparent 80%)',
                          }}
                          initial={{ x: '-100%', skewX: -20 }}
                          whileHover={{
                            x: '200%',
                            transition: {
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 1,
                              ease: "easeInOut",
                            }
                          }}
                        />
                        
                        {/* Fallback animated preview - shown if image fails to load */}
                        <div className="fallback-preview absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900" style={{ display: 'none' }}>
                          <div className="text-center p-4">
                            <motion.div 
                              className="text-5xl mb-3"
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: project.isAIAutomation || project.isCloudNative ? [0, 5, -5, 0] : 0,
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              {project.isAIAutomation ? '🤖' : project.isCloudNative ? '☸️' : project.isRobotics ? '🤖' : project.isAI ? '🤖' : '🚀'}
                            </motion.div>
                            <p className="text-gray-400 text-sm font-medium mb-1">{project.title}</p>
                            {project.liveUrl ? (
                              <p className="text-gray-600 text-xs">Click to view live demo</p>
                            ) : (
                              <p className="text-gray-600 text-xs">View on GitHub</p>
                            )}
                          </div>
                          
                          {/* Animated gradient overlay for visual interest */}
                          <motion.div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            animate={{
                              background: project.isAIAutomation
                                ? [
                                    "radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 80% 80%, rgba(34, 211, 238, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.3), transparent 50%)",
                                  ]
                                : project.isCloudNative
                                ? [
                                    "radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.3), transparent 50%)",
                                  ]
                                : project.isRobotics
                                ? [
                                    "radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.3), transparent 50%)",
                                  ]
                                : project.isAI
                                ? [
                                    "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.3), transparent 50%)",
                                    "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3), transparent 50%)",
                                  ]
                                : [
                                    "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 50%)",
                                    "radial-gradient(circle at 30% 70%, rgba(37, 99, 235, 0.2), transparent 50%)",
                                    "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 50%)",
                                  ],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      project.isAIAutomation
                        ? 'bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent'
                        : project.isCloudNative
                        ? 'bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent'
                        : project.isRobotics
                        ? 'bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent'
                        : project.isAI 
                        ? 'bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent' 
                        : 'bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent'
                    }`}
                  />

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: project.isAIAutomation
                        ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.3), rgba(34, 211, 238, 0.2), transparent 70%)"
                        : project.isCloudNative
                        ? "radial-gradient(circle at center, rgba(34, 211, 238, 0.3), transparent 70%)"
                        : project.isRobotics
                        ? "radial-gradient(circle at center, rgba(6, 182, 212, 0.25), transparent 70%)"
                        : project.isAI
                        ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.2), transparent 70%)"
                        : "radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)",
                    }}
                  />

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    {/* Only show Live Demo if liveUrl exists */}
                    {project.liveUrl && (
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                      >
                        <Button
                          size="sm"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                          className="shadow-2xl backdrop-blur-md bg-blue-600/95 hover:bg-blue-500 border border-blue-400/30 relative overflow-hidden group/btn"
                        >
                          {/* Button shimmer */}
                          <span 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            style={{
                              animation: 'shimmer 3s infinite',
                              transform: 'translateX(-100%) skewX(-20deg)',
                            }}
                          />
                          <ExternalLink className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                          <span className="relative z-10">Live Demo</span>
                        </Button>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="shadow-2xl backdrop-blur-md bg-gray-900/95 border-gray-600 hover:bg-gray-800 hover:border-gray-500 relative overflow-hidden group/btn"
                      >
                        {/* Button shimmer */}
                        <span 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          style={{
                            animation: 'shimmer 3s infinite',
                            transform: 'translateX(-100%) skewX(-20deg)',
                          }}
                        />
                        <GitHubIcon className="h-4 w-4 mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform" />
                        <span className="relative z-10">Code</span>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col relative">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded border ${
                      project.isAIAutomation
                        ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-400/40'
                        : project.isCloudNative
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
                        : project.isRobotics
                        ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                        : project.isAI
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                        : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors line-clamp-1 ${
                    project.isAIAutomation
                      ? 'text-white group-hover:text-purple-300'
                      : project.isCloudNative
                      ? 'text-white group-hover:text-cyan-300'
                      : project.isRobotics
                      ? 'text-white group-hover:text-cyan-400'
                      : project.isAI
                      ? 'text-white group-hover:text-purple-400'
                      : 'text-white group-hover:text-blue-500'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 flex-1 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Section for Cloud Native and AI Automation */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className={`mb-4 p-3 rounded-lg border ${
                      project.isAIAutomation
                        ? 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border-purple-500/20'
                        : 'bg-cyan-500/5 border-cyan-500/20'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold ${
                          project.isAIAutomation ? 'text-purple-400' : 'text-cyan-400'
                        }`}>
                          Key Features
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {project.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className={project.isAIAutomation ? 'text-purple-400 text-xs' : 'text-cyan-400 text-xs'}>✓</span>
                            <span className="text-[10px] text-gray-400">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    {project.liveUrl && (
                      <button
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors group/link"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        <span>View Live</span>
                      </button>
                    )}
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors group/link"
                    >
                      <GitHubIcon className="h-4 w-4 group-hover/link:rotate-12 transition-transform" />
                      <span>Source Code</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-400">Want to see more of my work?</p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://github.com/AnamShergill", "_blank")}
              className="group"
            >
              <GitHubIcon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
