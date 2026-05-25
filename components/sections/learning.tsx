"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { learning } from "@/data/portfolio"
import * as Icons from "lucide-react"
import AnimatedHeading from "@/components/animated-heading"

export default function Learning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="learning" className="py-16 md:py-24 w-full min-w-full h-auto relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div ref={ref} className="text-center mb-12">
          <AnimatedHeading 
            highlight="Learning"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Currently Learning
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Always growing, always learning new technologies and skills
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full min-w-0">
          {learning.map((item, index) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const IconComponent = (Icons as any)[item.icon] || Icons.Code

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="h-full hover:border-blue-500 transition-all group relative overflow-hidden">
                  {/* Animated Gradient Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))",
                        "linear-gradient(90deg, rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.08))",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.08), rgba(59, 130, 246, 0.08))",
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "60%" } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                        />
                      </div>
                      <span className="text-xs text-gray-500">In Progress</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
