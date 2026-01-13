import { ArrowRight, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Backend Developer & SaaS Automation Expert</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
            Building{" "}
            <span className="text-gradient">Scalable Backend</span>
            <br />
            & Automation Solutions
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-200">
            I help SaaS companies and startups streamline operations through smart backend systems, 
            AI-powered automation, and efficient workflow integrations that drive growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#portfolio">
                View My Portfolio
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">30+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
