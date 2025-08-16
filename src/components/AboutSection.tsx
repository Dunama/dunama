import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Smartphone } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "2+ Years Experience",
      description: "Building responsive websites and scalable applications"
    },
    {
      icon: Database,
      title: "Backend Expertise",
      description: "Python, Flask, FastAPI, and database optimization"
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description: "From frontend interfaces to backend systems"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach with modern frameworks"
    }
  ]

  const skills = [
    "Python", "JavaScript", "SQL", "HTML/CSS",
    "Flask", "FastAPI", "React", "Git",
    "PostgreSQL", "SQLAlchemy", "MySQL",
    "API Development", "Prompt Engineering"
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about solving complex problems with efficiency while continuously learning and growing as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Overview */}
          <div className="space-y-6">
            <Card className="professional-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Software engineer with 2+ years of experience building responsive websites and scalable web applications. 
                  Skilled in Python (Flask, FastAPI), SQL, and modern frontend technologies, with a focus on delivering 
                  clean, efficient, and user-friendly solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="tech-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="professional-card group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}