import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get to Know <span className="text-gradient">My Approach</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A quick introduction to how I work and the value I bring to your projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden card-gradient border border-border shadow-card group cursor-pointer">
            {/* Placeholder for video */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
              </div>
            </div>

            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <p className="text-foreground font-semibold">Introduction Video</p>
              <p className="text-muted-foreground text-sm">2 min watch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
