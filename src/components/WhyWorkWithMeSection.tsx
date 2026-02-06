import { motion } from "framer-motion";
import { CheckCircle2, Brain, Cpu, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Production-Ready Code",
    description: "Clean, maintainable systems that actually work in real environments.",
  },
  {
    icon: Brain,
    title: "Systems Thinking",
    description: "I don't just code—I architect solutions that scale.",
  },
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "Leverage automation and AI to 10x your team's output.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Clear communication, realistic timelines, quality results.",
  },
];

const WhyWorkWithMeSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Work With Me</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 glow-border card-hover text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
