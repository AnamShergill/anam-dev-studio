"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { skills } from "@/data/portfolio"
import * as Icons from "lucide-react"
import AnimatedHeading from "@/components/animated-heading"

const SkillCard = ({ skill, index }: { skill: { name: string; icon: string }; index: number }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[skill.icon] || Icons.Code

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -10 }}
    >
      <Card className="p-4 sm:p-6 text-center hover:border-blue-500 transition-all group cursor-pointer relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 border-2 border-transparent hover:border-blue-500/50">
        {/* Animated gradient background - MORE INTENSE */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
              "linear-gradient(90deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Stronger glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
        
        {/* Enhanced shimmer effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.25) 50%, transparent 80%)',
            animation: 'shimmer 3s infinite',
            transform: 'translateX(-100%) skewX(-20deg)',
          }}
        />
        
        {/* Pulsing border effect */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0)",
              "0 0 0 4px rgba(59, 130, 246, 0.2)",
              "0 0 0 0 rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="flex flex-col items-center gap-2 sm:gap-3 relative z-10">
          <motion.div 
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-all shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 relative overflow-hidden"
            whileHover={{ 
              rotate: [0, -12, 12, -12, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 group-hover:text-blue-200 transition-all relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          </motion.div>
          <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-blue-300 transition-colors drop-shadow-lg">
            {skill.name}
          </h3>
        </div>
        
        {/* Enhanced corner accent with animation */}
        <motion.div 
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Bottom left accent */}
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-8 md:py-16 w-full min-w-full h-auto relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatedHeading 
            highlight="Technologies"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Skills & Technologies
          </AnimatedHeading>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Full-stack technologies I use to build complete web solutions
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {/* Frontend Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
            >
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              Frontend Development
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 w-full min-w-0">
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
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
            >
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
              Backend & Database
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full min-w-0">
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
              className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
            >
              <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-pink-500 to-orange-600 rounded-full" />
              AI & Python
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full min-w-0">
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
