"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Database, Gamepad2, Server, Monitor } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "RPAL-Compiler",
      description:
        "Developed a complete interpreter for the RPAL (Recursive Programming and Applicative Language) from the ground up, demonstrating a practical application of compiler theory and language processing fundamentals.",
      technologies: ["Python", "OOP", "Data Structures", "Algorithms"],
      icon: Code,
      year: "2025",
      category: "Compiler Design",
      link:"https://github.com/devinda0/RPAL-Compiler.git"
    },
    {
      title: "Online Train Ticket Booking System",
      description:
        "A comprehensive train scheduling management system showcasing modern application development by integrating Ballerina for the backend with React.js for the frontend, featuring secure admin controls.",
      technologies: ["Ballerina", "React.js", "MongoDB"],
      icon: Database,
      year: "2024",
      category: "Full-Stack Web Application",
      link: "https://github.com/devinda0/Online_Train_Ticket_Booking_System.git"
    },
    {
      title: "Mystic-Mayhem (OOP Game)",
      description:
        "Contributed to the design and implementation of a console-based role-playing game (RPG) from concept to completion as part of a development team for Object-Oriented Programming course.",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
      icon: Gamepad2,
      year: "2024",
      category: "Game Development",
      link: "https://github.com/devinda0/Mystic-Mayhem.git"
    },
    {
      title: "HRMS - Backend",
      description:
        "Engineered a robust and secure server-side application that powers a comprehensive Human Resource Management System, responsible for all business logic, data processing, and API communications.",
      technologies: ["Express.js", "Node.js", "MySQL", "REST API"],
      icon: Server,
      year: "2024",
      category: "Backend Development",
      link: "https://github.com/devinda0/HRMS-Project-Backend.git"
    },
    {
      title: "HRMS - Frontend",
      description:
        "Developed a feature-rich, responsive, and intuitive front-end for a comprehensive Human Resource Management System, providing seamless user experience for HR administrators and employees.",
      technologies: ["React.js", "Tailwind CSS", "REST API"],
      icon: Monitor,
      year: "2024",
      category: "Frontend Development",
      link: "https://github.com/devinda0/HRMS-Project-Frontend.git"
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30" data-section="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my technical projects showcasing expertise in full-stack development, compiler design, and software
            engineering principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden card-enhanced card-glow card-shimmer card-depth"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs badge-enhanced">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="group/btn bg-transparent">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
