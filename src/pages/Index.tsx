import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuPreview from "@/components/MenuPreview";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CateringSection from "@/components/CateringSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <MenuPreview />
      <GallerySection />
      <AboutSection />
      <ServicesSection />
      <CateringSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
