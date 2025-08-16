import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, CalendarDays } from "lucide-react"

export function EducationSection() {
  const education = {
    degree: "Bachelor's in Computer Science",
    school: "Modibbo Adama University, Yola",
    period: "Expected 2027",
    status: "In Progress"
  }

  const certifications = [
    {
      title: "Backend Developer Certificate",
      issuer: "Mentors Innovation Hub",
      year: "2025",
      type: "Professional Development"
    },
    {
      title: "Web Developer Certificate",
      issuer: "Realty Technologies",
      year: "2023",
      type: "Technical Certification"
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="professional-card">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground text-sm">Academic Background</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-1">{education.degree}</h4>
                  <p className="text-muted-foreground mb-2">{education.school}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{education.period}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {education.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="professional-card">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                  <p className="text-muted-foreground text-sm">Professional Credentials</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4 last:pb-0">
                    <h4 className="font-semibold text-primary mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {cert.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}