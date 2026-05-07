"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star } from "lucide-react"
import { projects } from "@/data/portfolio"
import { GitHubIcon } from "@/components/icons"
import AnimatedHeading from "@/components/animated-heading"

const categories = ["All", "Business", "E-Commerce", "AI Application", "AI / Robotics", "Frontend", "Productivity", "Utility Tool", "Landing Page"]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className={`overflow-hidden group transition-all h-full flex flex-col relative ${
                project.isRobotics
                  ? 'border-cyan-500/40 hover:border-cyan-400 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5'
                  : project.isAI 
                  ? 'border-purple-500/30 hover:border-purple-500 bg-gradient-to-br from-purple-500/5 to-blue-500/5' 
                  : 'hover:border-blue-500'
              }`}>
                {/* Robotics Animated Border */}
                {project.isRobotics && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)",
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

                {/* AI Glow Effect */}
                {project.isAI && !project.isRobotics && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15), transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.15), transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15), transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
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
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-sm">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-semibold text-yellow-500">Featured</span>
                    </div>
                  </div>
                )}

                {/* AI Badge */}
                {project.isAI && !project.isRobotics && (
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(168, 85, 247, 0.3)",
                          "0 0 30px rgba(168, 85, 247, 0.5)",
                          "0 0 20px rgba(168, 85, 247, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 backdrop-blur-sm"
                    >
                      <span className="text-xs font-semibold text-purple-400">🤖 AI Powered</span>
                    </motion.div>
                  </div>
                )}

                {/* Robotics Badge */}
                {project.isRobotics && (
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(6, 182, 212, 0.4)",
                          "0 0 35px rgba(6, 182, 212, 0.6)",
                          "0 0 20px rgba(6, 182, 212, 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-sm"
                    >
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="text-xs"
                      >
                        ⚙️
                      </motion.span>
                      <span className="text-xs font-semibold text-cyan-300">AI Robotics</span>
                    </motion.div>
                  </div>
                )}

                {/* Project Image with Overlay */}
                <div className={`relative h-56 overflow-hidden ${
                  project.isRobotics
                    ? 'bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30'
                    : project.isAI 
                    ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900'
                }`}>
                  {/* Placeholder with gradient */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-2">
                        {project.isRobotics ? '🤖' : project.isAI ? '🤖' : '🚀'}
                      </div>
                      <p className="text-gray-500 text-sm font-medium">{project.title}</p>
                    </div>
                  </div>

                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      project.isRobotics
                        ? 'bg-gradient-to-t from-cyan-900 via-cyan-900/60 to-transparent'
                        : project.isAI 
                        ? 'bg-gradient-to-t from-purple-900 via-purple-900/60 to-transparent' 
                        : 'bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent'
                    }`}
                  />

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: project.isRobotics
                        ? "radial-gradient(circle at center, rgba(6, 182, 212, 0.25), transparent 70%)"
                        : project.isAI
                        ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.2), transparent 70%)"
                        : "radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)",
                    }}
                  />

                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                    >
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="shadow-lg backdrop-blur-sm bg-blue-600/90 hover:bg-blue-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="shadow-lg backdrop-blur-sm bg-gray-900/90 border-gray-700 hover:bg-gray-800"
                      >
                        <GitHubIcon className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col relative">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded border ${
                      project.isRobotics
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
                    project.isRobotics
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
                    <button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-500 transition-colors group/link"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      <span>View Live</span>
                    </button>
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
