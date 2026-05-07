"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedHeadingProps {
  children: ReactNode
  highlight?: string
  className?: string
  delay?: number
}

export default function AnimatedHeading({ 
  children, 
  highlight, 
  className = "",
  delay = 0 
}: AnimatedHeadingProps) {
  // Split children into parts if highlight is provided
  const renderContent = () => {
    if (typeof children === 'string' && highlight) {
      const parts = children.split(highlight)
      return (
        <>
          {parts[0]}
          <span className="relative inline-block">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: delay + 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent relative"
            >
              {highlight}
              {/* Animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: delay + 0.4,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 origin-left"
              />
              {/* Subtle glow */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.2, 0] }}
                viewport={{ once: true }}
                transition={{
                  delay: delay + 0.6,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-500 to-purple-600 -z-10"
              />
            </motion.span>
          </span>
          {parts[1]}
        </>
      )
    }
    return children
  }

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {renderContent()}
    </motion.h2>
  )
}
