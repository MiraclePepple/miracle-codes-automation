import introVideo from "@/assets/intro-video.mov";

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
          <div className="relative aspect-video rounded-2xl overflow-hidden card-gradient border border-border shadow-card">
            <video 
              src={introVideo}
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
