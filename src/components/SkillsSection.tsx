import { Server, Database, Blocks, Bot, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

const skills = [
  {
    icon: Server,
    title: "Backend Development",
    tools: ["Node.js", "TypeScript", "Express", "NestJS"],
  },
  {
    icon: Database,
    title: "Databases",
    tools: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: Blocks,
    title: "Systems & Architecture",
    tools: ["APIs", "Authentication", "Integrations", "Scalable Logic"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    tools: ["Workflow Automation", "Applied AI", "Process Automation"],
  },
  {
    icon: Cloud,
    title: "DevOps & Deployment",
    tools: ["Cloud Deployment", "Environments", "Production Readiness"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The technologies I use to build reliable, scalable systems.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl glass-card glow-border hover:border-primary/30 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsSection;
