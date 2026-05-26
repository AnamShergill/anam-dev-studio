"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { testimonials } from "@/data/portfolio"
import AnimatedHeading from "@/components/animated-heading"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-8 md:py-16 w-full min-w-full h-auto relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div ref={ref} className="text-center mb-12">
          <AnimatedHeading 
            highlight="Testimonials"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Client Testimonials
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            What people say about working with me
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full min-w-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:border-blue-500 transition-all group relative overflow-hidden rounded-xl">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))",
                      "linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.08))",
                      "linear-gradient(225deg, rgba(236, 72, 153, 0.08), rgba(59, 130, 246, 0.08))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <CardContent className="p-4 sm:p-6 relative z-10">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500/20 mb-3 sm:mb-4" />
                  
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-white text-sm sm:text-base truncate">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-400 truncate">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
