import { ThemeToggle } from "@/components/ThemeToggle"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { EducationSection } from "@/components/EducationSection"
import { ContactSection } from "@/components/ContactSection"

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Dunama Dahiru. Built with passion and dedication.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
