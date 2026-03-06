import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  const contactInfo = [
    { icon: MapPin, text: "Yola, Nigeria" },
    { icon: Phone, text: "+234 8100333629" },
    { icon: Mail, text: "ddunama2007@gmail.com" },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-glow glow-effect">
              <img
                src="/uploads/33d77fa0-0685-4665-b7b8-b9162299921c.png"
                alt="Dunama Dahiru - Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-elegant animate-scale-in">
              <span className="text-primary-foreground font-bold text-lg">👋</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Dunama Dahiru
          </h1>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-lg font-semibold">
              Software Engineer
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg">
              Backend Developer
            </Badge>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-muted-foreground">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2 hover:text-primary transition-colors">
                <item.icon className="w-4 h-4" />
                <span className="text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mb-12 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-primary glow-effect"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}