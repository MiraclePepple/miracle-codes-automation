import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl glass-card glow-border"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Looking for reliable backend development or automation solutions? 
              I'm open to remote work, contracts, and interesting collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:hello@miraclepepple.com">
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <p className="text-muted-foreground text-sm mt-6">
              Serious inquiries only. I typically respond within 24 hours.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
