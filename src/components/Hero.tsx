
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-tyrano-dark">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#33C3F0"
          speed={0.8}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center text-center gap-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="opacity-0 animate-fade-in [animation-delay:0.2s]"
        >
          <motion.h1 
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70"
              whileHover={{ letterSpacing: "1px" }}
              transition={{ duration: 0.3 }}
            >
              Innovative Software
            </motion.span>
            <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent"
              whileHover={{ letterSpacing: "1px" }}
              transition={{ duration: 0.3 }}
            >
              Solutions That Evolve
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          className="max-w-2xl text-lg text-white/80 opacity-0 animate-fade-in [animation-delay:0.4s]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Empowering businesses with cutting-edge software development, cloud solutions, 
          and digital transformation services to stay ahead in today's competitive landscape.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-fade-in [animation-delay:0.6s]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-gradient-to-r from-tyrano-teal to-tyrano-accent hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg">
            Get Started
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-in [animation-delay:1s]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="animate-bounce"
          >
            <a href="#services" className="flex flex-col items-center text-white/60 hover:text-white/90 transition-colors">
              <span className="text-sm mb-2">Scroll Down</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
