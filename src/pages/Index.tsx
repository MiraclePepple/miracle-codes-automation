import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TechStackSection />
        <PortfolioSection />
        <WhyWorkWithMeSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
