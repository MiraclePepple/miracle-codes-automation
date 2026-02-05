import { Code, Workflow, Link2, Database, Rocket, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const services = [
  {
    icon: Code,
    title: "Backend API Development",
    description: "Clean, well-documented APIs that power your applications reliably. RESTful design with proper error handling and validation.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive business processes to save time and reduce errors. From simple scripts to complex multi-step workflows.",
  },
  {
    icon: Link2,
    title: "System Integration",
    description: "Connect your tools and services with seamless, reliable integrations. Third-party APIs, webhooks, and data sync.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database schemas that scale with your growing data needs. Performance tuning and query optimization.",
  },
  {
    icon: Rocket,
    title: "Production-Ready Setup",
    description: "Ship with confidence. Proper architecture, testing, monitoring, and deployment pipelines for production environments.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Integrate LLMs and AI capabilities into your applications. From chatbots to intelligent document processing.",
  },
];

const WhatICanHelpSection = () => {
  return (
    <section id="help" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I Can <span className="text-gradient">Help With</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Focused solutions for your backend and automation needs.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl glass-card glow-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:shadow-glow-sm transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
