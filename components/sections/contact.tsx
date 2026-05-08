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

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
      
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
            Have a project in mind? Let's work together to create something amazing
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Let's talk about everything!</h3>
              <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                Don't like forms? Send me an email or connect with me on social media. 👋
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-gray-800">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      disabled={isSubmitting}
                      className="text-sm sm:text-base min-h-[120px] sm:min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          ⏳
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs sm:text-sm text-center"
                    >
                      ✓ Message sent successfully! I'll get back to you soon.
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
