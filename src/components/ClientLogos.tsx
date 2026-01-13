const clients = [
  "TechCorp", "StartupX", "DataFlow", "CloudSync", "APIFirst",
  "AutoScale", "DevOps Inc", "SaaS Pro", "CodeBase", "Integrate.io"
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider">
          Trusted by innovative companies
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="flex items-center justify-center h-12 px-6 rounded-lg bg-card/50 border border-border/50">
                <span className="text-muted-foreground font-semibold text-lg whitespace-nowrap">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default ClientLogos;
