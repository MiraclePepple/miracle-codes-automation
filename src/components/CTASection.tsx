import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(245 82% 60% / 0.15), transparent)"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10 md:p-14 glow-border"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Build Something{" "}
              <span className="text-gradient">That Scales?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              I'm available for backend development, AI automation projects, and technical consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#" download>
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
