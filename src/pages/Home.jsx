import { useState, useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoreEssenceSection from "@/components/CoreEssenceSection";
import SignatureSection from "@/components/SignatureSection";
import Footer from "@/components/Footer";
import QuickMenu from "@/components/QuickMenu";

/**
 * TOPS CRE - Crested Gecko Breeder Website
 * Design Philosophy: Minimalism + Naturalism
 * Color Palette: Warm cream (#F5F1E8), Forest green (#2D3D2D), Terracotta (#C85A3A)
 * Typography: Playfair Display (display), Lora (serif), Inter (sans-serif)
 */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead page="home" />
      <Navigation scrolled={scrolled} />
      <main>
        <HeroSection />
        <AboutSection />
        <CoreEssenceSection />
        <SignatureSection />
      </main>
      <QuickMenu />
      <Footer />
    </div>
  );
}
