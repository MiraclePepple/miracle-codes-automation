import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce API Platform",
    category: "Backend Development",
    description: "Scalable RESTful API handling 1M+ daily transactions with real-time inventory management.",
    tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "SaaS Workflow Automation",
    category: "SaaS Automation",
    description: "AI-powered automation system reducing manual data entry by 80% for a fintech company.",
    tags: ["Node.js", "OpenAI", "Zapier", "AWS Lambda"],
  },
  {
    title: "Real-time Analytics Engine",
    category: "Backend Development",
    description: "High-performance data pipeline processing 500K events per minute with sub-second latency.",
    tags: ["Node.js", "Kafka", "ClickHouse", "Kubernetes"],
  },
  {
    title: "Multi-tenant CRM Backend",
    category: "SaaS Development",
    description: "Enterprise-grade CRM backend supporting 200+ tenants with custom workflow automation.",
    tags: ["Node.js", "MongoDB", "REST API", "Stripe"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A selection of backend systems and automation solutions I've built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Preview</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
