import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import VideoSection from "@/components/VideoSection";
import FeaturedOn from "@/components/FeaturedOn";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <VideoSection />
        <FeaturedOn />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
