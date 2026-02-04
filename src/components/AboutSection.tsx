import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a backend engineer who builds systems that actually work in production. 
                My focus is on creating reliable backend logic, clean APIs, and automation 
                workflows that help teams ship faster and operate smoother.
              </p>
              
              <p>
                With experience across <span className="text-foreground font-medium">Node.js, TypeScript, Express, and NestJS</span>, 
                I've built everything from simple REST APIs to complex multi-tenant architectures. 
                I also work with <span className="text-foreground font-medium">AI automation tools</span> to help businesses 
                eliminate repetitive tasks and scale their operations without scaling their headcount.
              </p>
              
              <p>
                I care about clean code, clear communication, and solving real problems. 
                No over-engineering. No unnecessary complexity. Just systems that do what 
                they're supposed to do, reliably.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
