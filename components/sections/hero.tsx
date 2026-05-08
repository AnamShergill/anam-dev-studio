"use client"

import { motion } from "framer-motion"
import { Mail, Download, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-16 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center sm:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm text-green-400 font-medium">{personalInfo.availability}</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="inline-block relative">
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block"
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                      style={{
                        backgroundSize: "200% 200%",
                        display: "inline-block",
                      }}
                    >
                      Anam Shergill
                    </motion.span>
                  </motion.span>
                  {/* Subtle glow effect */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{
                      delay: 0.8,
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10"
                    style={{ transform: "scale(1.1)" }}
                  />
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
              >
                {personalInfo.role}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
              >
                {personalInfo.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(personalInfo.resume, "_blank")}
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 sm:gap-4 justify-center sm:justify-start"
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(personalInfo.github, "_blank")}
                className="hover:text-blue-500"
              >
                <GitHubIcon className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(personalInfo.linkedin, "_blank")}
                className="hover:text-blue-500"
              >
                <LinkedInIcon className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                className="hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl"
              >
                <Sparkles className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Modern Design</h3>
                <p className="text-gray-400 text-sm">Clean & Professional UI</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-48 left-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/30 flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">Fast Performance</h3>
                <p className="text-gray-400 text-sm">Optimized & Lightning Quick</p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-20 right-12 w-56 h-36 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/30 flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">AI Integration</h3>
                <p className="text-gray-400 text-sm">Smart & Intelligent Solutions</p>
              </motion.div>

              {/* Glowing Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
