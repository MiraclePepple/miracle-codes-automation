import { ExternalLink } from "lucide-react";
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
import ecommerceChatbotDemo from "@/assets/ecommerce-chatbot-demo.mp4";

const projects = [
  {
    title: "AI-Powered HR Application Reviewer",
    category: "AI Automation",
    description: "Automated job application screening that reads emails, extracts resume data, scores candidates with AI, and logs results. Saves 2+ hours per application.",
    tags: ["n8n", "Google Gemini", "JavaScript"],
    images: [hrWorkflow, hrOutput, hrPrompt, hrResults],
  },
  {
    title: "Conversational AI Property Search",
    category: "AI Chatbot",
    description: "Natural language home searching. Users describe their needs, AI asks clarifying questions, maintains context, and surfaces relevant listings.",
    tags: ["n8n", "LLM", "NLP"],
    video: propertySearchDemo,
    videoStartTime: 81,
  },
  {
    title: "E-commerce Support Chatbot",
    category: "AI Automation",
    description: "Customer service AI handling order tracking, refunds, and product inquiries with a built-in knowledge base.",
    tags: ["n8n", "AI Agent", "Knowledge Base"],
    video: ecommerceChatbotDemo,
    videoStartTime: 290,
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
            Featured <span className="text-gradient">Work</span>
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
              {project.video && (
                <div className="px-4 pt-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50 ring-1 ring-white/10">
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
                          <div className="aspect-video rounded-xl overflow-hidden bg-secondary/50 ring-1 ring-white/10">
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
                <span className="tag-gradient mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded-lg bg-white/5 text-muted-foreground border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full group/btn">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PortfolioSection;
