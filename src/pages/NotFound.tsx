
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <SparklesCore
            id="tsparticles404"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#9b87f5"
            speed={0.5}
          />
        </div>
        
        <div className="text-center relative z-10 px-4">
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200 mb-4">404</h1>
          <p className="text-2xl text-foreground/80 mb-8">Oops! Page not found</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
