"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation with mixed colors */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-accent opacity-15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-[var(--color-success)] to-[var(--color-warning)] opacity-10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Enhanced Profile Image with glow effect */}
          <div className="mb-8 animate-scale-in animate-delay-200">
            <div className="relative inline-block">
              <img
                src="/my-circle.png"
                alt="Devinda Dilshan"
                className="w-48 h-48 rounded-full mx-auto border-4 border-primary/30 shadow-2xl hover-lift animate-pulse-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-gradient"></div>
            </div>
          </div>

          {/* Enhanced title with mixed gradient */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up animate-delay-300">
            Devinda Dilshan
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium animate-fade-in-up animate-delay-400">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-success)] bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warning)] bg-clip-text text-transparent">
              Innovator
            </span>
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-500">
            A motivated and detail-oriented Computer Science & Engineering undergraduate at the
            <span className="text-primary font-semibold hover:text-accent transition-colors duration-300">
              {" "}
              University of Moratuwa
            </span>{" "}
            with a strong foundation in software engineering, algorithms, and data structures. Passionate about
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent font-semibold">
              {" "}
              Full-Stack Development
            </span>{" "}
            and
            <span className="bg-gradient-to-r from-[var(--color-success)] to-[var(--color-warning)] bg-clip-text text-transparent font-semibold">
              {" "}
              Machine Learning
            </span>
            .
          </p>

          {/* Enhanced buttons with mixed colors */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-600">
            <Button
              size="lg"
              className="group bg-gradient-primary hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={handleScrollToProjects}
            >
              <span className="flex items-center">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="group glass hover:bg-gradient-accent hover:text-foreground hover:border-transparent hover:scale-105 transition-all duration-300 bg-transparent cursor-pointer"
              >
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  Download CV
              </Button>
            </a>
          </div>

          {/* Enhanced social links with hover animations */}
          <div className="flex justify-center space-x-8 animate-fade-in-up animate-delay-700">
            <a
              href="mailto:devindadilshan0@gmail.com"
              className="text-muted-foreground hover:text-[var(--color-success)] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/devinda-dilshan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/devinda0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[var(--color-warning)] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
