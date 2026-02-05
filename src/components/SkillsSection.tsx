import { Server, Database, Blocks, Bot, Cloud, Code2, GitBranch, Shield } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const skillGroups = [
  {
    category: "Backend",
    skills: [
      {
        icon: Server,
        title: "Backend Development",
        description: "Building robust server-side applications and APIs",
        tools: ["Node.js", "TypeScript", "Express", "NestJS"],
      },
      {
        icon: Code2,
        title: "API Design",
        description: "RESTful APIs with clean architecture patterns",
        tools: ["REST", "GraphQL", "WebSockets", "OpenAPI"],
      },
    ]
  },
  {
    category: "Databases",
    skills: [
      {
        icon: Database,
        title: "Database Systems",
        description: "Efficient data modeling and query optimization",
        tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      {
        icon: Shield,
        title: "Authentication",
        description: "Secure auth systems and access control",
        tools: ["JWT", "OAuth", "Sessions", "RBAC"],
      },
    ]
  },
  {
    category: "Tools & Concepts",
    skills: [
      {
        icon: Blocks,
        title: "Architecture",
        description: "Scalable system design and integrations",
        tools: ["Microservices", "Monolith", "Event-Driven"],
      },
      {
        icon: Bot,
        title: "AI Automation",
        description: "Intelligent workflows and process automation",
        tools: ["n8n", "Workflows", "LLM Integration"],
      },
      {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Deployment and infrastructure management",
        tools: ["AWS", "Docker", "CI/CD", "Linux"],
      },
      {
        icon: GitBranch,
        title: "Version Control",
        description: "Collaborative development workflows",
        tools: ["Git", "GitHub", "GitLab", "Code Review"],
      },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The technologies I use to build reliable, scalable systems.
          </p>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto space-y-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <ScrollReveal delay={groupIndex * 0.1}>
                <h3 className="text-xl font-semibold text-muted-foreground mb-6 text-center">
                  {group.category}
                </h3>
              </ScrollReveal>
              
              <StaggerContainer 
                className={`grid gap-6 ${
                  group.skills.length === 2 
                    ? 'md:grid-cols-2 max-w-4xl mx-auto' 
                    : 'sm:grid-cols-2 lg:grid-cols-4'
                }`}
                staggerDelay={0.1}
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    className="group p-6 rounded-2xl glass-card glow-border card-hover"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:shadow-glow-sm transition-all duration-300">
                      <skill.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="tag-gradient"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
