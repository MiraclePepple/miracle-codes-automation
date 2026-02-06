import { motion } from "framer-motion";
import { Code2, Zap, Users, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import profilePhoto from "@/assets/profile-photo.jpeg";

const highlights = [
  { icon: Code2, label: "Production-Ready APIs" },
  { icon: Zap, label: "Workflow Automation" },
  { icon: Users, label: "Team Scalability" },
  { icon: Sparkles, label: "AI Integration" },
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
            Backend Systems + AI Automation ={" "}
            <span className="text-gradient">Growth</span>
          </h2>
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
                  I'm a backend engineer who builds the infrastructure that powers modern applications. 
                  From RESTful APIs to intelligent automation workflows, I create systems that are 
                  <span className="text-foreground font-medium"> scalable, secure, and actually work in production</span>.
                </p>
                
                <p>
                  My approach combines solid backend fundamentals (<span className="text-foreground font-medium">Node.js, TypeScript, databases</span>) 
                  with cutting-edge AI automation tools (<span className="text-foreground font-medium">n8n, Langchain, LLMs</span>) to help 
                  businesses eliminate manual work and move faster.
                </p>
                
                <p>
                  Whether you need a robust API, a database architecture that scales, or workflows 
                  that run on autopilot—I build solutions that deliver results.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
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
