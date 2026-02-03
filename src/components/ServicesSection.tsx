import { Server, Workflow, Cpu, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust, scalable backend systems built with modern technologies. From APIs to microservices, I create the foundation your application needs.",
  },
  {
    icon: Workflow,
    title: "API Building & Integration",
    description: "Custom RESTful APIs designed for performance. Seamless third-party integrations that connect your systems efficiently.",
  },
  {
    icon: Cpu,
    title: "SaaS Automation",
    description: "AI-powered automation solutions that streamline workflows, reduce manual tasks, and improve operational efficiency across your organization.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description: "Strategic guidance on architecture decisions, technology choices, and implementation strategies for scalable backend solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive backend and automation solutions tailored to your business needs.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 md:p-8 rounded-2xl glass-card glow-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
