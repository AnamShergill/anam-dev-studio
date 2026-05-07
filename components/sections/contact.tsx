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
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <AnimatedHeading 
            highlight="Touch"
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </AnimatedHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Let's work together to create something amazing
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's talk about everything!</h3>
              <p className="text-gray-400 mb-8">
                Don't like forms? Send me an email or connect with me on social media. 👋
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-500 transition-colors font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-white font-medium">{personalInfo.location}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                    <GitHubIcon className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">GitHub</div>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors font-medium"
                    >
                      @AnamShergill
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-500 transition-all group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <LinkedInIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">LinkedIn</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors font-medium"
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
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
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
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center"
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
