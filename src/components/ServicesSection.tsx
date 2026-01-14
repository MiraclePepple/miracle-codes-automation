import { Server, Workflow, Cpu, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust, scalable backend systems built with modern technologies. From APIs to microservices, I create the foundation your application needs.",
  },
  {
    icon: Workflow,
    title: "API Building & Integration",
    description: "Custom RESTful APIs designed for performance. Seamless third-party integrations that connect your systems efficiently.",
  },
  {
    icon: Cpu,
    title: "SaaS Automation",
    description: "AI-powered automation solutions that streamline workflows, reduce manual tasks, and improve operational efficiency across your organization.",
  },
  {
    icon: MessageSquare,
    title: "Technical Consulting",
    description: "Strategic guidance on architecture decisions, technology choices, and implementation strategies for scalable backend solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive backend and automation solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
