import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer, { itemVariants } from "./StaggerContainer";

import hrWorkflow from "@/assets/hr-reviewer-workflow.png";
import hrOutput from "@/assets/hr-reviewer-output.jpg";
import hrPrompt from "@/assets/hr-reviewer-prompt.jpg";
import hrResults from "@/assets/hr-reviewer-results.jpg";
import propertySearchDemo from "@/assets/property-search-demo.mp4";

const projects = [
  {
    title: "AI-Powered HR Application Reviewer",
    category: "AI Automation",
    description: "Automated end-to-end job application screening: reads emails, extracts resume data from PDFs, scores candidates using AI, and logs results. Saves 2+ hours per application.",
    tags: ["n8n", "Google Gemini", "JavaScript", "Google Sheets"],
    status: "completed",
    images: [hrWorkflow, hrOutput, hrPrompt, hrResults],
  },
  {
    title: "Conversational AI Property Search",
    category: "AI Chatbot",
    description: "Natural chat-based home searching for PropertyProNG. Users describe needs casually, AI asks clarifying questions, maintains context, and surfaces relevant listings.",
    tags: ["n8n", "LLM", "Property Data", "NLP"],
    status: "completed",
    video: propertySearchDemo,
    videoStartTime: 81,
  },
  {
    title: "E-commerce Support Chatbot",
    category: "AI Automation",
    description: "Customer service AI prototype for Jumia Nigeria handling order tracking, refund requests, and product inquiries with built-in knowledge base.",
    tags: ["n8n", "AI Agent", "Knowledge Base"],
    status: "completed",
  },
  {
    title: "RAG System",
    category: "Backend Development",
    description: "Retrieval-Augmented Generation system grounding AI responses in verified documents. Ingests files, embeds in vector DB, retrieves chunks, generates accurate answers.",
    tags: ["n8n", "Pinecone", "LLM Agent", "Vector DB"],
    status: "completed",
  },
  {
    title: "Multi-Tenancy Backend Architecture",
    category: "Backend Development",
    description: "Scalable multi-tenant backend system for SaaS applications focusing on tenant isolation, secure data separation, and performance at scale.",
    tags: ["Node.js", "NestJS", "TypeScript", "APIs"],
    status: "in-development",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group rounded-2xl overflow-hidden glass-card glow-border hover:border-primary/30 transition-all duration-500 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {project.video && (
                <div className="px-4 pt-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50">
                    <video
                      src={`${project.video}#t=${project.videoStartTime || 0}`}
                      className="w-full h-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              )}
              {project.images && project.images.length > 0 && !project.video && (
                <div className="relative px-4 pt-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    {project.category}
                  </span>
                  {project.status === "in-development" && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
                      In Development
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded-lg bg-secondary/50 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </Button>
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
