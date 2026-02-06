import { motion } from "framer-motion";
import { Server, Database, Bot, Puzzle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const expertise = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Production-ready APIs with Node.js, Express, NestJS. TypeScript for type-safe, maintainable code. RESTful architecture & API design.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "PostgreSQL, MySQL, MongoDB expertise. Schema design & optimization. Data modeling for scale and performance.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Workflow automation with n8n. AI applications using Langchain. LLM integration & prompt engineering.",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    description: "Third-party API integration. Payment gateways & authentication. Microservices & system design.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 -right-32 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized skills that help businesses build scalable, automated systems.
          </p>
        </ScrollReveal>

        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 glow-border card-hover text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-glow-sm transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ExpertiseSection;
