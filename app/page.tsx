import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PortfolioSchema } from "@/components/seo-schemas"
import { Code, Database, Gamepad2, Monitor, Server } from "lucide-react"

export default function Home() {
  // Example projects data - customize with your actual projects
  const projects = [
    {
      title: "RPAL-Compiler",
      name: "RPAL-Compiler",
      description:
        "Developed a complete interpreter for the RPAL (Recursive Programming and Applicative Language) from the ground up, demonstrating a practical application of compiler theory and language processing fundamentals.",
      technologies: ["Python", "OOP", "Data Structures", "Algorithms"],
      icon: Code,
      year: "2025",
      category: "Compiler Design",
      link:"https://github.com/devinda0/RPAL-Compiler.git",
      url: "https://github.com/devinda0/RPAL-Compiler.git"
    },
    {
      title: "Online Train Ticket Booking System",
      name: "Online Train Ticket Booking System",
      description:
        "A comprehensive train scheduling management system showcasing modern application development by integrating Ballerina for the backend with React.js for the frontend, featuring secure admin controls.",
      technologies: ["Ballerina", "React.js", "MongoDB"],
      icon: Database,
      year: "2024",
      category: "Full-Stack Web Application",
      link: "https://github.com/devinda0/Online_Train_Ticket_Booking_System.git",
      url: "https://github.com/devinda0/Online_Train_Ticket_Booking_System.git"
    },
    {
      title: "Mystic-Mayhem (OOP Game)",
      name: "Mystic-Mayhem (OOP Game)",
      description:
        "Contributed to the design and implementation of a console-based role-playing game (RPG) from concept to completion as part of a development team for Object-Oriented Programming course.",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
      icon: Gamepad2,
      year: "2024",
      category: "Game Development",
      link: "https://github.com/devinda0/Mystic-Mayhem.git",
      url: "https://github.com/devinda0/Mystic-Mayhem.git"
    },
    {
      title: "HRMS - Backend",
      name: "HRMS - Backend",
      description:
        "Engineered a robust and secure server-side application that powers a comprehensive Human Resource Management System, responsible for all business logic, data processing, and API communications.",
      technologies: ["Express.js", "Node.js", "MySQL", "REST API"],
      icon: Server,
      year: "2024",
      category: "Backend Development",
      link: "https://github.com/devinda0/HRMS-Project-Backend.git",
      url: "https://github.com/devinda0/HRMS-Project-Backend.git"
    },
    {
      title: "HRMS - Frontend",
      name: "HRMS - Frontend",
      description:
        "Developed a feature-rich, responsive, and intuitive front-end for a comprehensive Human Resource Management System, providing seamless user experience for HR administrators and employees.",
      technologies: ["React.js", "Tailwind CSS", "REST API"],
      icon: Monitor,
      year: "2024",
      category: "Frontend Development",
      link: "https://github.com/devinda0/HRMS-Project-Frontend.git",
      url: "https://github.com/devinda0/HRMS-Project-Frontend.git"
    },
  ]

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Machine Learning", "Full-Stack Development",
    "Software Engineering", "Data Structures", "Algorithms",
    "MongoDB", "PostgreSQL", "Git", "Docker"
  ];

  return (
    <>
      <PortfolioSchema
        name="Devinda Dilshan Portfolio"
        description="Computer Science & Engineering student portfolio showcasing software engineering projects and technical skills"
        url="https://devinda-dilshan.dev"
        author="Devinda Dilshan"
        skills={skills}
        projects={projects}
      />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
