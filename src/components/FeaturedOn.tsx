const publications = [
  "TechCrunch",
  "Dev.to",
  "Hashnode",
  "Medium",
  "Product Hunt",
];

const FeaturedOn = () => {
  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">
          Featured On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {publications.map((pub) => (
            <div
              key={pub}
              className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 font-semibold text-xl"
            >
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
