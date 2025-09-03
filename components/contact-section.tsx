"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Whether you're looking for a passionate software engineer for your team, want to collaborate on an
                exciting project, or simply want to discuss the latest in technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:devindadilshan0@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    devindadilshan0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+94763881265" className="text-muted-foreground hover:text-primary transition-colors">
                    +94 76 388 1265
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/devinda-dilshan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/devinda0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
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
