import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MenuCTABanner from "@/components/MenuCTABanner";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <MenuCTABanner />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
