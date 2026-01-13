import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const posts = [
  {
    title: "Building Scalable APIs: A Practical Guide",
    excerpt: "Learn the best practices for designing and implementing APIs that can handle millions of requests.",
    date: "Jan 10, 2026",
    readTime: "8 min read",
    category: "Backend",
  },
  {
    title: "Automating SaaS Workflows with AI",
    excerpt: "How to leverage AI to automate repetitive tasks and improve operational efficiency in SaaS products.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    category: "Automation",
  },
  {
    title: "Microservices vs Monolith: Making the Right Choice",
    excerpt: "A practical framework for deciding between microservices and monolithic architecture.",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    category: "Architecture",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Technical insights and industry perspectives on backend development and automation.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="#blog">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              {/* Article Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/5 relative">
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>

                <button className="mt-4 text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
