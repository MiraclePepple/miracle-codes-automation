import { motion } from "framer-motion";
import introVideo from "@/assets/intro-video.mov";
import profilePhoto from "@/assets/profile-photo.jpeg";
import ScrollReveal from "./ScrollReveal";

const VideoSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] opacity-30"
        style={{ background: "linear-gradient(135deg, hsl(245 82% 60%), hsl(270 75% 55%))" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know <span className="text-gradient">My Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A quick introduction to how I work and the value I bring to your projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
          <motion.div 
            className="relative aspect-video rounded-2xl overflow-hidden glass-card glow-border p-1"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <video 
              src={introVideo}
              controls
              preload="metadata"
              poster={profilePhoto}
              className="w-full h-full object-cover rounded-xl"
            >
              Your browser does not support the video tag.
            </video>
            {/* Decorative gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-50 -z-10" />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoSection;
