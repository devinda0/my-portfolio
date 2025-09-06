"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from "lucide-react"
import { useForm } from '@formspree/react'


export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_ID || 'demo')
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  // Add keyframes for gradient animation
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Watch for successful form submission
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessDialog(true)
      // Reset form data
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }
  }, [state.succeeded])

  const handleDialogClose = () => {
    setShowSuccessDialog(false)
    // Refresh the page after closing the dialog
    window.location.reload()
  }

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Base background colors - Enhanced for better dark mode appearance */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900" />
        
        {/* Light Mode Background - Multiple gradient layers */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/8 via-[#8b5cf6]/8 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/8 via-[#3b82f6]/8 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/6 to-[#3b82f6]/6" />
        </div>
        
        {/* Dark Mode Background - Enhanced with richer colors */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/20 via-[#3b82f6]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/15 to-[#3b82f6]/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
        </div>
        
        {/* Aurora Background Layer - Enhanced for dark mode */}
        <div className="absolute inset-0 z-5 opacity-60 dark:opacity-80">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 dark:from-[#6366f1]/25 dark:to-[#8b5cf6]/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#ec4899]/15 to-[#3b82f6]/15 dark:from-[#ec4899]/30 dark:to-[#3b82f6]/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-[#8b5cf6]/8 to-[#6366f1]/8 dark:from-[#8b5cf6]/20 dark:to-[#6366f1]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-center tracking-tight text-foreground/70 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 w-full flex flex-col items-left">
            <div className=" w-full tracking-tight">
              <h3 className="font-serif text-3xl md:text-4xl text-center md:text-justify font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                Whether you're looking for a passionate software engineer for your team, want to collaborate on an
                exciting project, or simply want to discuss the latest in technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:devindadilshan0@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    devindadilshan0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+94763881265" className="text-foreground/70 hover:text-primary transition-colors">
                    +94 76 388 1265
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-foreground/70">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/devinda-dilshan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/devinda0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors group"
              >
                <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-all duration-300 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" disabled={state.submitting} className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Message Sent Successfully!
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="text-muted-foreground">
                Thank you for reaching out! I've received your message and will get back to you as soon as possible.
              </p>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleDialogClose} className="w-full sm:w-auto">
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
