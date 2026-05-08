"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Star, GitFork, Activity } from "lucide-react"
import AnimatedHeading from "@/components/animated-heading"

export default function GithubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: GitBranch, label: "Total Commits", value: "500+", color: "text-blue-500" },
    { icon: Star, label: "Stars Earned", value: "50+", color: "text-yellow-500" },
    { icon: GitFork, label: "Repositories", value: "55+", color: "text-purple-500" },
    { icon: Activity, label: "Contributions", value: "1000+", color: "text-green-500" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 sm:mb-16">
          <AnimatedHeading 
            highlight="Activity"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            GitHub Activity
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            My open source contributions and coding activity
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:border-blue-500 transition-all group relative overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                      "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                      "linear-gradient(315deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <CardContent className="p-4 sm:p-6 text-center relative z-10">
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Card className="overflow-hidden max-w-4xl w-full">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">Contribution Activity</h3>
              
              {/* Contribution Grid - Centered */}
              <div className="flex justify-center">
                <div className="space-y-2">
                  {[...Array(7)].map((_, row) => (
                    <div key={row} className="flex gap-2">
                      {[...Array(52)].map((_, col) => {
                        // Use deterministic pattern instead of random for SSR compatibility
                        const seed = (row * 52 + col) * 7 % 100
                        const intensity = seed / 100
                        return (
                          <motion.div
                            key={col}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.2, delay: (row * 52 + col) * 0.001 }}
                            className={`w-3 h-3 rounded-sm ${
                              intensity > 0.7
                                ? "bg-green-500"
                                : intensity > 0.5
                                ? "bg-green-600"
                                : intensity > 0.3
                                ? "bg-green-700"
                                : intensity > 0.1
                                ? "bg-green-800"
                                : "bg-gray-800"
                            }`}
                            whileHover={{ scale: 1.5 }}
                          />
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 mt-6 text-sm text-gray-400">
                <span>Less</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gray-800" />
                  <div className="w-3 h-3 rounded-sm bg-green-800" />
                  <div className="w-3 h-3 rounded-sm bg-green-700" />
                  <div className="w-3 h-3 rounded-sm bg-green-600" />
                  <div className="w-3 h-3 rounded-sm bg-green-500" />
                </div>
                <span>More</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
