import { ArrowRight, Eye, Clock, Code2, Database, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const stats = [
  { icon: Clock, text: "3+ Years Building Backend Systems" },
  { icon: Code2, text: "Node.js, NestJS, TypeScript Expert" },
  { icon: Database, text: "MySQL, MongoDB & PostgreSQL" },
  { icon: Workflow, text: "n8n & Langchain Automation" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-glow" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
        style={{ background: "linear-gradient(135deg, hsl(245 82% 60%), hsl(270 75% 55%))" }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
        style={{ background: "linear-gradient(135deg, hsl(270 75% 55%), hsl(245 82% 60%))" }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(245 82% 60%) 1px, transparent 1px),
                           linear-gradient(to right, hsl(245 82% 60%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="text-sm text-muted-foreground">Backend Developer</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">AI Automation Specialist</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Node.js & TypeScript Expert</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            I Build{" "}
            <span className="text-gradient-animated">Backend Systems</span>{" "}
            &{" "}
            <span className="text-gradient-animated">AI Automations</span>{" "}
            That Save Businesses 15+ Hours Weekly
          </motion.h1>

          {/* Value Prop */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Helping startups and tech teams scale faster with production-ready APIs, 
            intelligent workflows, and automated processes.
          </motion.p>

          {/* Stats/Proof Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm"
              >
                <stat.icon className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="animate-glow-pulse" asChild>
              <a href="#portfolio">
                <Eye className="w-5 h-5" />
                View My Work
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
