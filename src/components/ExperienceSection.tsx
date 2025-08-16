import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Mentors Innovation Hub",
      location: "On-site",
      period: "2025",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained backend systems using Python/Flask, improving data handling and efficiency",
        "Built RESTful APIs to manage user registration, authentication, and real-time ticket verification for events (C.A.R.I.S.S.A)",
        "Designed optimized database systems (PostgreSQL, SQLAlchemy) for sales record tracking and reporting",
        "Integrated backend services with frontend apps for real-time notifications and secure interactions"
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "REST APIs"]
    },
    {
      title: "Web Developer Intern",
      company: "Realty Estate India",
      location: "Remote",
      period: "2023",
      type: "Internship",
      responsibilities: [
        "Assisted in building and maintaining responsive websites using HTML, CSS, and JavaScript with React",
        "Ensured compatibility across desktop and mobile devices with responsive design principles",
        "Collaborated with the team to design user-friendly interfaces, improving website navigation and UX",
        "Worked with senior developers to debug issues, test features, and improve website performance"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building scalable solutions and delivering exceptional user experiences
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="professional-card">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="tech-tag">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}