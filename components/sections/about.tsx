"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { about } from "@/data/portfolio"
import AnimatedHeading from "@/components/animated-heading"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-8 md:py-16 w-full min-w-full h-auto relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatedHeading 
            highlight="Me"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Me
          </AnimatedHeading>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Get to know more about my journey and passion for web development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center w-full min-w-0">
          {/* Premium Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-full overflow-hidden"
          >
            <div className="relative w-full max-w-lg mx-auto h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
              {/* Central Glowing Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
              />

              {/* Floating Code Snippet Card - Top Center */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[85%] max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-2xl z-10 overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 pb-1.5 border-b border-gray-700/50">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500/80" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono">developer.ts</span>
                </div>
                {/* Code Content */}
                <div className="space-y-0.5 font-mono text-[9px] sm:text-[10px] overflow-x-auto whitespace-nowrap">
                  <div className="text-purple-400">const <span className="text-blue-400">profile</span> = {'{'}</div>
                  <div className="text-gray-400 pl-2">name: <span className="text-green-400">&apos;Anam&apos;</span>,</div>
                  <div className="text-gray-400 pl-2">focus: <span className="text-green-400">&apos;Agentic AI & Automation&apos;</span>,</div>
                  <div className="text-gray-400 pl-2">autonomousAgents: <span className="text-blue-400">true</span>,</div>
                  <div className="text-gray-400 pl-2 overflow-x-auto">stack: <span className="text-purple-400">[</span><span className="text-green-400">&apos;Next.js&apos;</span>, <span className="text-green-400">&apos;Tailwind CSS&apos;</span>, <span className="text-green-400">&apos;LangChain&apos;</span>, <span className="text-green-400">&apos;Python&apos;</span>, <span className="text-green-400">&apos;Kubernetes&apos;</span><span className="text-purple-400">]</span></div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-lg sm:rounded-xl" />
              </motion.div>

              {/* Tech Stack Icons Card - Bottom Left */}
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-8 md:left-12 w-[140px] sm:w-[150px] md:w-[160px] h-[140px] sm:h-[150px] md:h-[160px] bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-2xl z-10 overflow-hidden"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] text-gray-300 font-semibold">Tech Stack</span>
                </div>
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                  {['⚛️', '▲', '🔷', '🟢', '🐍', '🤖', '⚡', '🔥'].map((icon, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.08, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center text-xs sm:text-sm md:text-base border border-gray-700/30 hover:border-blue-500/50 transition-colors"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-lg sm:rounded-xl" />
              </motion.div>

              {/* Terminal Command Card - Bottom Right */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-8 md:right-12 w-[140px] sm:w-[150px] md:w-[160px] h-[110px] sm:h-[120px] md:h-[130px] bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-2.5 shadow-2xl z-10 overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono">terminal</span>
                </div>
                {/* Terminal Content */}
                <div className="space-y-0.5 sm:space-y-1 font-mono text-[9px] sm:text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">npm run dev</span>
                  </div>
                  <div className="text-blue-400 text-[8px] sm:text-[9px]">▲ Next.js 15.0.0</div>
                  <div className="text-gray-400 text-[8px] sm:text-[9px]">Local: <span className="text-cyan-400">localhost:3000</span></div>
                  <div className="flex items-center gap-1.5 text-green-400 text-[8px] sm:text-[9px]">
                    <span>✓</span>
                    <span>Ready in 1.2s</span>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent rounded-lg sm:rounded-xl" />
              </motion.div>

              {/* AI Badge - Top Left */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute top-20 sm:top-24 md:top-28 lg:top-32 left-4 sm:left-8 md:left-12 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-lg z-10"
              >
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-xs sm:text-sm"
                  >
                    🤖
                  </motion.span>
                  <span className="text-[9px] sm:text-[10px] font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Agentic AI
                  </span>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
              </motion.div>

              {/* Stats Card - Top Right */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute top-20 sm:top-24 md:top-28 lg:top-32 right-4 sm:right-8 md:right-12 w-[120px] sm:w-[130px] md:w-[140px] h-[100px] sm:h-[110px] md:h-[120px] bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 shadow-2xl z-10 overflow-hidden"
              >
                <div className="space-y-1 sm:space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] text-gray-400">Projects</span>
                    <span className="text-xs sm:text-sm font-bold text-blue-400">40+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] text-gray-400">Repos</span>
                    <span className="text-xs sm:text-sm font-bold text-purple-400">55+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] text-gray-400">Experience</span>
                    <span className="text-xs sm:text-sm font-bold text-pink-400">3+ yrs</span>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-pink-500/10 to-transparent rounded-lg sm:rounded-xl" />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -25, 0],
                    x: [0, Math.sin(i) * 15, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3.5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"
                  style={{
                    top: `${25 + i * 15}%`,
                    left: `${35 + i * 8}%`,
                  }}
                />
              ))}

              {/* Gradient Rings */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border border-blue-500/10 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-88 sm:h-88 md:w-96 md:h-96 border border-purple-500/10 rounded-full"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              {about.story.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-gray-300 leading-relaxed text-lg mb-4"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              <Card className="p-6 text-center hover:border-blue-500 transition-colors">
                <div className="text-3xl font-bold text-blue-500 mb-2">40+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </Card>
              <Card className="p-6 text-center hover:border-purple-500 transition-colors">
                <div className="text-3xl font-bold text-purple-500 mb-2">3+</div>
                <div className="text-sm text-gray-400">Years Coding</div>
              </Card>
              <Card className="p-6 text-center hover:border-pink-500 transition-colors">
                <div className="text-3xl font-bold text-pink-500 mb-2">5+</div>
                <div className="text-sm text-gray-400">Hackathons</div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
