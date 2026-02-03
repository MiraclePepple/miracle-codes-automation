import introVideo from "@/assets/intro-video.mov";
import profilePhoto from "@/assets/profile-photo.jpeg";
import ScrollReveal from "./ScrollReveal";

const VideoSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get to Know <span className="text-gradient">My Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A quick introduction to how I work and the value I bring to your projects.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-card glow-border">
            <video 
              src={introVideo}
              controls
              preload="metadata"
              poster={profilePhoto}
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoSection;
