import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const projects = [
  {
    title: "E-Commerce Backend System",
    description: "Built scalable API handling payments, inventory, and user auth",
    tags: ["NestJS", "PostgreSQL", "Stripe Integration"],
    hasCode: true,
    hasDemo: true,
  },
  {
    title: "AI Workflow Automation Platform",
    description: "Automated business processes saving 20+ hours/week",
    tags: ["n8n", "Langchain", "Node.js", "MongoDB"],
    hasCode: true,
    hasDemo: false,
  },
  {
    title: "Analytics Dashboard API",
    description: "Real-time data processing and reporting system",
    tags: ["Express", "TypeScript", "MySQL"],
    hasCode: true,
    hasDemo: false,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of backend systems and automation solutions I've built.
          </p>
        </ScrollReveal>

        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden glass-card glow-border card-hover"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-gradient"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.hasCode && (
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </Button>
                  )}
                  {project.hasDemo && (
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PortfolioSection;
