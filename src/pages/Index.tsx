import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import SkillsSection from "@/components/SkillsSection";
import WhatICanHelpSection from "@/components/WhatICanHelpSection";
import PortfolioSection from "@/components/PortfolioSection";
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
        <VideoSection />
        <SkillsSection />
        <WhatICanHelpSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
