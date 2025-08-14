"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, Code } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutSection() {
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

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BSc Engineering (Honours) in Computer Science & Engineering at University of Moratuwa",
      color: "from-[var(--color-primary)] to-[var(--color-accent)]",
      bgColor: "bg-gradient-to-br from-primary/10 to-accent/10",
      iconColor: "text-primary",
      hoverIconColor: "group-hover:text-accent",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Assistant Head of Web & Tech Pillar at MoraSpirit, mentoring teams and leading projects",
      color: "from-[var(--color-success)] to-[var(--color-primary)]",
      bgColor: "bg-gradient-to-br from-[var(--color-success)]/10 to-primary/10",
      iconColor: "text-[var(--color-success)]",
      hoverIconColor: "group-hover:text-primary",
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack developer with expertise in modern web technologies and machine learning",
      color: "from-[var(--color-accent)] to-[var(--color-warning)]",
      bgColor: "bg-gradient-to-br from-accent/10 to-[var(--color-warning)]/10",
      iconColor: "text-accent",
      hoverIconColor: "group-hover:text-[var(--color-warning)]",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by passion for technology and innovation, I'm constantly exploring new ways to solve complex problems
            through code.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
        >
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold mb-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              My Journey
            </h3>
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed hover:text-foreground transition-colors duration-300">
                Currently pursuing my Bachelor's degree at the prestigious{" "}
                <span className="text-primary font-semibold">University of Moratuwa</span>, I've immersed myself in the
                world of software engineering with a particular focus on{" "}
                <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent font-semibold">
                  full-stack development
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-[var(--color-success)] to-[var(--color-warning)] bg-clip-text text-transparent font-semibold">
                  machine learning
                </span>
                .
              </p>
              <p className="text-foreground/80 leading-relaxed hover:text-foreground transition-colors duration-300">
                As the{" "}
                <span className="text-[var(--color-success)] font-semibold">Assistant Head of Web & Tech Pillar</span>{" "}
                at MoraSpirit, I've had the opportunity to lead technical initiatives, mentor fellow students, and
                contribute to meaningful projects that impact our university community. This role has strengthened my
                ability to work in teams, manage projects, and deliver solutions under pressure.
              </p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="/my-full.jpeg"
              alt="University of Moratuwa"
              className="rounded-lg shadow-lg hover-lift group-hover:shadow-2xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Enhanced highlight cards with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className={`group hover-lift transition-all duration-500 card-enhanced hover:shadow-lg hover:shadow-primary/5 border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 backdrop-blur-sm ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Subtle background gradient that appears on hover */}
                <div
                  className={`absolute inset-0 ${highlight.bgColor} opacity-0 group-hover:opacity-20 transition-all duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`p-3 rounded-full group-hover:scale-110 transition-all duration-300 ${highlight.bgColor} group-hover:shadow-lg`}
                    >
                      <highlight.icon
                        className={`h-6 w-6 ${highlight.iconColor} ${highlight.hoverIconColor} transition-colors duration-300`}
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
