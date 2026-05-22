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
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Premium Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
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
                className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-52 sm:w-60 md:w-64 lg:w-72 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-2xl z-10"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3 pb-2 border-b border-gray-700/50">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-mono">developer.ts</span>
                </div>
                {/* Code Content */}
                <div className="space-y-0.5 sm:space-y-1 font-mono text-[10px] sm:text-xs">
                  <div className="text-purple-400">const <span className="text-blue-400">profile</span> = {'{'}</div>
                  <div className="text-gray-400 pl-2 sm:pl-3">name: <span className="text-green-400">'Anam'</span>,</div>
                  <div className="text-gray-400 pl-2 sm:pl-3">stack: <span className="text-green-400">'Full-Stack'</span>,</div>
                  <div className="text-gray-400 pl-2 sm:pl-3">passion: <span className="text-green-400">'AI'</span></div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-xl sm:rounded-2xl" />
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
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-2 sm:left-4 md:left-8 w-44 sm:w-52 md:w-56 lg:w-60 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-2xl z-10"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-gray-300 font-semibold">Tech Stack</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
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
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center text-base sm:text-lg md:text-xl border border-gray-700/30 hover:border-blue-500/50 transition-colors"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-xl sm:rounded-2xl" />
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
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-4 md:right-8 w-52 sm:w-60 md:w-64 lg:w-72 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 md:p-3 shadow-2xl z-10"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-gray-400 font-mono">terminal</span>
                </div>
                {/* Terminal Content */}
                <div className="space-y-1 sm:space-y-1.5 font-mono text-[10px] sm:text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">npm run dev</span>
                  </div>
                  <div className="text-blue-400">▲ Next.js 15.0.0</div>
                  <div className="text-gray-400 text-[9px] sm:text-[10px]">Local: <span className="text-cyan-400">localhost:3000</span></div>
                  <div className="flex items-center gap-2 text-green-400">
                    <span>✓</span>
                    <span>Ready in 1.2s</span>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent rounded-xl sm:rounded-2xl" />
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
                className="absolute top-16 sm:top-20 md:top-24 lg:top-28 left-2 sm:left-4 md:left-8 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-lg z-10"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-sm sm:text-base"
                  >
                    🤖
                  </motion.span>
                  <span className="text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                className="absolute top-16 sm:top-20 md:top-24 lg:top-28 right-2 sm:right-4 md:right-8 w-40 sm:w-44 md:w-48 lg:w-52 bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-3.5 shadow-2xl z-10"
              >
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] text-gray-400">Projects</span>
                    <span className="text-sm sm:text-base font-bold text-blue-400">40+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] text-gray-400">Repos</span>
                    <span className="text-sm sm:text-base font-bold text-purple-400">55+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-[10px] text-gray-400">Experience</span>
                    <span className="text-sm sm:text-base font-bold text-pink-400">3+ yrs</span>
                  </div>
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-pink-500/10 to-transparent rounded-xl sm:rounded-2xl" />
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
