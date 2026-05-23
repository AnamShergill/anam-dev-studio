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
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12 sm:mb-16">
          <AnimatedHeading 
            highlight="Touch"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let&apos;s work together to create something amazing
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let&apos;s talk about everything!</h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Don&apos;t like forms? Send me an email or connect with me on social media. 👋
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-500 transition-colors font-medium text-sm sm:text-base truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-white font-medium text-sm sm:text-base">{personalInfo.location}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors flex-shrink-0">
                    <GitHubIcon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">GitHub</div>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors font-medium text-sm sm:text-base truncate block"
                    >
                      @AnamShergill
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                    <LinkedInIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">LinkedIn</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors font-medium text-sm sm:text-base truncate block"
                    >
                      Connect with me
                    </a>
                  </div>
                </CardContent>
              </Card>

              {personalInfo.facebook && (
                <Card className="hover:border-blue-500 transition-all group">
                  <CardContent className="p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors flex-shrink-0">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-gray-400 mb-1">Facebook</div>
                      <a
                        href={personalInfo.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors font-medium text-sm sm:text-base truncate block"
                      >
                        Follow me
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
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
            
            <Card className="border-gray-800 hover:border-blue-500/50 transition-all duration-300 relative bg-gray-900/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="mb-6">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      scale: 1
                    } : {}}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  >
                    Let&apos;s Build Your Next Project
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
                  className="space-y-4 sm:space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Your Name
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
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Your Email
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

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="fi-text-message"
                      required
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                      className="text-sm sm:text-base min-h-[120px] sm:min-h-[150px] hover:border-blue-500/50 focus:border-blue-500 transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-sm sm:text-base relative overflow-hidden group/btn"
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
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 inline-block" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </motion.div>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs sm:text-sm text-center"
                    >
                      ✓ Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs sm:text-sm text-center"
                    >
                      ✗ {errorMessage || "Failed to send message. Please try again or email me directly."}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
