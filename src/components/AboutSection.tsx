import { motion } from "framer-motion";
import { Code2, Zap, Users, Coffee } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import profilePhoto from "@/assets/profile-photo.jpeg";

const stats = [
  { icon: Code2, value: "5+", label: "Years Experience" },
  { icon: Zap, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Get to know the person behind the code
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden glass-card p-2">
                <img 
                  src={profilePhoto} 
                  alt="Miracle Pepple" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 -z-10" />
            </motion.div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="right" className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-lg">
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
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
