
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text";
import { HeroSection } from "@/components/ui/hero-section";

export function Hero() {
  return (
    <HeroSection
      title="TyranoSoftwares"
      subtitle={{
        regular: "Solutions That ",
        gradient: "Evolve",
      }}
      description="Empowering businesses with cutting-edge software development, cloud solutions, and digital transformation services to stay ahead in today's competitive landscape."
      ctaText="Get Started"
      ctaHref="#services"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  );
}
