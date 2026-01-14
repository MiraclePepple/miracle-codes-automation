import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const highlights = [
  "5+ years in backend development",
  "Expert in Node.js, Python, and Go",
  "SaaS automation specialist",
  "Consulting for startups & enterprises",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden card-gradient border border-border shadow-card">
              <img 
                src={profilePhoto} 
                alt="Miracle Tamunodein Pepple - Backend Developer & SaaS Automation Specialist"
                className="w-full h-full object-contain bg-secondary/50"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-gradient">5+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              I'm Miracle Tamunodein Pepple, a backend developer and SaaS automation specialist 
              passionate about building systems that scale. I help businesses transform their 
              operations through intelligent backend architecture and automation solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              With expertise spanning API development, database optimization, and workflow automation, 
              I've helped dozens of companies streamline their processes and improve performance. 
              My approach combines technical excellence with business understanding to deliver 
              solutions that truly make an impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Let's Work Together</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
