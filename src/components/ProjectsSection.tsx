import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Users, GraduationCap } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "C.A.R.I.S.S.A",
      description: "AI-powered event registration and database tracking app designed for seamless and scalable collaboration. Features real-time ticket verification, user management, and comprehensive analytics.",
      icon: Zap,
      technologies: ["Python", "Flask", "PostgreSQL", "AI Integration", "Real-time APIs"],
      features: [
        "AI-powered registration system",
        "Real-time ticket verification",
        "Scalable database architecture",
        "Comprehensive analytics dashboard"
      ],
      status: "In Development"
    },
    {
      title: "TEDx Yola Registration Desk",
      description: "Comprehensive online event registration system built for TEDx Yola. Streamlined registration process with secure user management and real-time capacity tracking.",
      icon: Users,
      technologies: ["React", "Node.js", "MongoDB", "JWT Authentication"],
      features: [
        "Secure user registration",
        "Real-time capacity tracking",
        "Email notifications",
        "Admin dashboard"
      ],
      status: "Completed"
    },
    {
      title: "M.A.M.B.O",
      description: "E-learning platform designed to improve continuous student learning in schools. Features interactive course management, progress tracking, and collaborative learning tools.",
      icon: GraduationCap,
      technologies: ["React", "Python", "Django", "PostgreSQL", "WebRTC"],
      features: [
        "Interactive course content",
        "Progress tracking system",
        "Collaborative learning tools",
        "Teacher-student communication"
      ],
      status: "Beta Testing"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/10 text-green-600 border-green-500/20"
      case "In Development": return "bg-blue-500/10 text-blue-600 border-blue-500/20"
      case "Beta Testing": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      default: return "bg-gray-500/10 text-gray-600 border-gray-500/20"
    }
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase my expertise in full-stack development and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="professional-card group h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="tech-tag text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 text-xs"
                      onClick={() => window.open(`https://github.com/DunamaDahiru`, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs"
                      disabled={project.status === "In Development"}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-outline"
            onClick={() => window.open('https://github.com/DunamaDahiru', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}