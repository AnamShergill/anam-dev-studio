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
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedHeading 
            highlight="Me"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Me
          </AnimatedHeading>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Get to know more about my journey and passion for web development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />
              
              {/* Image Container */}
              <Card className="relative overflow-hidden border-2 border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold text-white">
                      AS
                    </div>
                    <p className="text-gray-400 text-sm">Profile Image Placeholder</p>
                  </div>
                </div>
              </Card>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
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
                <div className="text-3xl font-bold text-blue-500 mb-2">12+</div>
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
