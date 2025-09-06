"use client"

import { Mail, Github, Linkedin, Code } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("footer")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="footer" className="relative overflow-hidden bg-background border-t border-border/50" aria-label="Footer">
      {/* Enhanced Background Animation with specified gradient colors */}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center">
            {/* Enhanced name with gradient text */}
            <div className="relative mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Devinda Dilshan
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#3b82f6] rounded-full opacity-60"></div>
            </div>

            {/* Enhanced description */}
            <div className="mb-8 animate-fade-in-up animate-delay-200">
              <p className="text-muted-foreground text-lg mb-2">Computer Science & Engineering Student</p>
              <p className="text-muted-foreground/80 text-sm">University of Moratuwa</p>
            </div>

            {/* Enhanced social links with icons and hover effects */}
            <div className="flex justify-center space-x-6 mb-10 animate-fade-in-up animate-delay-300">
              <a
                href="mailto:devindadilshan0@gmail.com"
                className="group flex items-center space-x-2 text-muted-foreground hover:text-[#6366f1] transition-all duration-300 hover:scale-110"
                aria-label="Send email"
              >
                <div className="p-2 rounded-full bg-muted/50 group-hover:bg-[#6366f1]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline text-sm font-medium">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/devinda-dilshan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-muted-foreground hover:text-[#8b5cf6] transition-all duration-300 hover:scale-110"
                aria-label="Visit LinkedIn profile"
              >
                <div className="p-2 rounded-full bg-muted/50 group-hover:bg-[#8b5cf6]/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/devinda0"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-muted-foreground hover:text-[#3b82f6] transition-all duration-300 hover:scale-110"
                aria-label="Visit GitHub profile"
              >
                <div className="p-2 rounded-full bg-muted/50 group-hover:bg-[#3b82f6]/10 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline text-sm font-medium">GitHub</span>
              </a>
            </div>
            
            {/* Enhanced copyright with tech stack */}
            <div className="space-y-3 text-sm text-muted-foreground/80 animate-fade-in-up animate-delay-500">
              <div className="flex items-center justify-center space-x-2">
                <Code className="w-4 h-4 text-primary/70" />
                <span>Built with Next.js, TypeScript & Tailwind CSS</span>
              </div>
              <div>
                © {new Date().getFullYear()} Devinda Dilshan. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom glow effect with new gradient colors */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-gradient-to-t from-[#6366f1]/10 via-[#8b5cf6]/5 to-transparent blur-2xl"></div>
    </footer>
  )
}
