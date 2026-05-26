"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send } from "lucide-react"
import { personalInfo } from "@/data/portfolio"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import AnimatedHeading from "@/components/animated-heading"
import { Forminit } from 'forminit'

const forminit = new Forminit({ proxyUrl: '/api/forminit' })

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)
    
    try {
      const formDataObj = new FormData(e.currentTarget)
      const { error } = await forminit.submit('w3ceht0mtx9', formDataObj)

      if (error) {
        setIsSubmitting(false)
        setSubmitStatus("error")
        setErrorMessage(error.message)
        setTimeout(() => setSubmitStatus("idle"), 5000)
        return
      }

      setIsSubmitting(false)
      setSubmitStatus("success")
      formRef.current?.reset()
      
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setIsSubmitting(false)
      setSubmitStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="py-8 md:py-16 w-full min-w-full h-auto relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <div ref={ref} className="text-center mb-12">
          <AnimatedHeading 
            highlight="Project"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Start Your Project
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Ready to scale your business with AI automation or custom web solutions? Let&apos;s discuss your project.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto w-full min-w-0">
          {/* Contact Form - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Cards - Horizontal Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full min-w-0">
              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  </div>
                  <div className="min-w-0 w-full">
                    <div className="text-xs text-gray-400 mb-1">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-500 transition-colors font-medium text-xs sm:text-sm truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-purple-500 transition-all group">
                <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Location</div>
                    <div className="text-white font-medium text-xs sm:text-sm">{personalInfo.location}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-pink-500 transition-all group">
                <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                    <GitHubIcon className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500" />
                  </div>
                  <div className="min-w-0 w-full">
                    <div className="text-xs text-gray-400 mb-1">GitHub</div>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors font-medium text-xs sm:text-sm truncate block"
                    >
                      @AnamShergill
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  </div>
                  <div className="min-w-0 w-full">
                    <div className="text-xs text-gray-400 mb-1">LinkedIn</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors font-medium text-xs sm:text-sm truncate block"
                    >
                      Connect
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - Full Width Centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1,
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              {/* Animated glowing background effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { 
                  opacity: [0, 0.3, 0.5, 0.3, 0],
                } : {}}
                transition={{
                  duration: 2,
                  delay: 0.6,
                  times: [0, 0.2, 0.5, 0.8, 1]
                }}
              />
              
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              
              <Card className="border-gray-800 hover:border-blue-500/50 transition-all duration-300 relative bg-gray-900/50 backdrop-blur-sm shadow-2xl rounded-2xl">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="mb-8 text-center">
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        y: 0,
                        scale: 1
                      } : {}}
                      transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                    >
                      Tell Us About Your Project
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-sm sm:text-base"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      Fill out the form below and I&apos;ll get back to you within 24 hours.
                    </motion.p>
                  </div>
                  
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    className="space-y-5 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="fi-sender-firstName"
                          type="text"
                          required
                          placeholder="John Doe"
                          disabled={isSubmitting}
                          className="text-sm sm:text-base hover:border-blue-500/50 focus:border-blue-500 transition-colors"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9, duration: 0.5 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Email *
                        </label>
                        <Input
                          id="email"
                          name="fi-sender-email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          disabled={isSubmitting}
                          className="text-sm sm:text-base hover:border-blue-500/50 focus:border-blue-500 transition-colors"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.0, duration: 0.5 }}
                    >
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="fi-select-projectType"
                        required
                        disabled={isSubmitting}
                        className="flex h-11 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-blue-500/50"
                      >
                        <option value="" className="bg-gray-900 text-gray-400">Select a project type...</option>
                        <option value="AI Automation & Agents" className="bg-gray-900 text-white">AI Automation & Agents</option>
                        <option value="Full-Stack Web Development" className="bg-gray-900 text-white">Full-Stack Web Development</option>
                        <option value="GHL / Lead Gen Systems" className="bg-gray-900 text-white">GHL / Lead Gen Systems</option>
                        <option value="Business Website" className="bg-gray-900 text-white">Business Website</option>
                        <option value="Business Portfolio" className="bg-gray-900 text-white">Business Portfolio</option>
                        <option value="Personal Portfolio" className="bg-gray-900 text-white">Personal Portfolio</option>
                        <option value="E-Commerce Website" className="bg-gray-900 text-white">E-Commerce Website</option>
                        <option value="General Inquiry" className="bg-gray-900 text-white">General Inquiry</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="fi-text-message"
                        required
                        placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                        disabled={isSubmitting}
                        className="text-sm sm:text-base min-h-[140px] sm:min-h-[160px] hover:border-blue-500/50 focus:border-blue-500 transition-colors resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-base sm:text-lg py-6 relative overflow-hidden group/btn font-semibold"
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="mr-2 inline-block"
                              >
                                ⏳
                              </motion.div>
                              Sending Your Inquiry...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5 inline-block" />
                              Start Your Project
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </motion.div>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 sm:p-5 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm sm:text-base text-center"
                      >
                        ✓ Thank you! Your project inquiry has been received. I&apos;ll get back to you within 24 hours.
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 sm:p-5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm sm:text-base text-center"
                      >
                        ✗ {errorMessage || "Failed to send message. Please try again or email me directly."}
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
