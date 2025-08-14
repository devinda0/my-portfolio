"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            Building leadership skills while contributing to meaningful technical projects
          </p>
        </div>

        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold text-primary">Assistant Head of Web & Tech Pillar</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <Building className="h-4 w-4" />
                  <span className="font-semibold">MoraSpirit</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>2024 – Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Colombo 06, Sri Lanka</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Led the development and successful implementation</strong> of moraspirit360.com, a key web
                    platform for the organization, ensuring optimal user experience and functionality.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Managed and maintained</strong> the entire technical infrastructure of MoraSpirit,
                    collaborating closely with the Head of Pillar to ensure operational excellence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Guided two co-chairs</strong> for SpiritX 2025 Hackathon, contributing to its successful
                    execution and providing technical oversight throughout the event.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">
                    <strong>Mentored and onboarded</strong> new members within the Web & Tech Pillar, fostering skill
                    development and team integration.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">Key Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Leadership",
                    "Project Management",
                    "Team Mentoring",
                    "Web Development",
                    "Technical Infrastructure",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
