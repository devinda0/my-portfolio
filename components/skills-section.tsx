"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Database, GitBranch } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "JavaScript", "Python", "C++"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Technologies & Frameworks",
      icon: Wrench,
      skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Scikit-learn", "Pandas", "NumPy"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <section id="skills" className="py-20" data-section="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-enhanced card-glow card-shimmer card-depth">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default badge-enhanced"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl font-bold text-center mb-8">Competitions & Volunteering</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 card-enhanced card-shimmer">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Ballerina Coding Competition 2024</h4>
                <p className="text-sm text-muted-foreground">Competed at the national level</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 card-enhanced card-shimmer">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">MoraXtreme 9.0</h4>
                <p className="text-sm text-muted-foreground">12-hour university-wide hackathon</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 card-enhanced card-shimmer">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Mathematics Teaching</h4>
                <p className="text-sm text-muted-foreground">Volunteer educator at MoraMaths Circle</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
