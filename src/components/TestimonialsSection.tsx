import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechStartup",
    content: "Miracle transformed our backend infrastructure. Her expertise in automation reduced our operational costs by 40% and improved system reliability significantly.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder, SaaSFlow",
    content: "Working with Miracle was a game-changer. She built an API system that handles millions of requests daily without breaking a sweat. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering, DataCorp",
    content: "Miracle's consulting helped us make the right architecture decisions early on. Her deep knowledge of scalable systems saved us months of potential refactoring.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What clients and collaborators say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 md:p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 shadow-card relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
