"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { skills } from "@/data/portfolio"
import * as Icons from "lucide-react"
import AnimatedHeading from "@/components/animated-heading"

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string }; index: number }) => {
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card className="p-6 text-center hover:border-blue-500 transition-all group cursor-pointer">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
            <IconComponent className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="font-semibold text-white">{skill.name}</h3>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatedHeading 
            highlight="Technologies"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Skills & Technologies
          </AnimatedHeading>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {/* Frontend Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              Frontend Development
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
              Backend & Tools
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* AI & Python */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-orange-600 rounded-full" />
              AI & Python
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills.ai.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
