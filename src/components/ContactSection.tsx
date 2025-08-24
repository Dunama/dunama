import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Twitter, Send } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Yola, Nigeria",
      link: "https://maps.google.com/?q=Yola,Nigeria"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 8100333629",
      link: "tel:+2348100333629"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ddunama2007@gmail.com",
      link: "mailto:ddunama2007@gmail.com"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Dunama",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/dunama-dahiru",
      color: "hover:text-blue-600"
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://www.facebook.com/share/1BmRrs4isn/",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      url: "https://x.com/DahiruDuna32110?t=gvrC9jJ4o5KNCDTxmbLVqw&s=09",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations. Whether you have a project in mind or just want to chat 
                about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card/50 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} hover:scale-110 hover:shadow-glow transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="professional-card glow-effect">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm available for freelance projects, collaborations, or full-time opportunities. 
                  Let's discuss how we can work together to create something amazing.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="btn-primary w-full glow-effect"
                    onClick={() => window.open('mailto:ddunama2007@gmail.com', '_blank')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="btn-outline w-full"
                    onClick={() => window.open('https://linkedin.com/in/dunama-dahiru', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}