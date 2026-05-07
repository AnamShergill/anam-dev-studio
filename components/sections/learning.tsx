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
    <section id="learning" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <AnimatedHeading 
            highlight="Learning"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Currently Learning
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Always growing, always learning new technologies and skills
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learning.map((item, index) => {
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
                  {/* Glowing Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all" />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
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
