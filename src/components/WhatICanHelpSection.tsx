import { Code, Workflow, Link2, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const services = [
  {
    icon: Code,
    title: "Backend API Development",
    description: "Clean, well-documented APIs that power your applications reliably.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive business processes to save time and reduce errors.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description: "Connect your tools and services with seamless, reliable integrations.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database schemas that scale with your growing data needs.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Setup",
    description: "Ship with confidence. Proper architecture, testing, and deployment.",
  },
];

const WhatICanHelpSection = () => {
  return (
    <section id="help" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I Can <span className="text-gradient">Help With</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Focused solutions for your backend and automation needs.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl glass-card glow-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatICanHelpSection;
