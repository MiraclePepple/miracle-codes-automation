import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const techStack = {
  Backend: ["Node.js", "Express.js", "NestJS", "TypeScript"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "AI/Automation": ["n8n", "Langchain", "OpenAI"],
  Tools: ["Git", "Docker", "REST APIs", "JWT Auth"],
};

const TechStackSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="text-center"
              >
                <h3 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      className="px-3 py-1.5 text-sm font-mono rounded-lg glass-card border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
