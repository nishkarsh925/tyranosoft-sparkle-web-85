
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-tyrano-dark text-white">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticles404"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#33C3F0"
            speed={0.5}
          />
        </div>
        
        <div className="text-center relative z-10 px-4">
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent mb-4">404</h1>
          <p className="text-2xl text-white/80 mb-8">Oops! Page not found</p>
          <Button asChild className="bg-tyrano-teal text-tyrano-dark hover:bg-tyrano-teal/90">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
