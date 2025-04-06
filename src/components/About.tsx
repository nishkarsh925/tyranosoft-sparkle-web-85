
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-tyrano-dark to-tyrano-dark/95 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
                About TyranoSoftwares
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-6">
              Founded in 2018, TyranoSoftwares has been at the forefront of software innovation, 
              helping businesses transform their digital presence and operations.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-tyrano-teal flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white/90">
                  <strong className="text-tyrano-teal">Customer-Centric Approach</strong> - We prioritize understanding your unique needs to deliver solutions that truly add value.
                </p>
              </div>
              
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-tyrano-teal flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white/90">
                  <strong className="text-tyrano-teal">Technical Excellence</strong> - Our team comprises industry experts who stay ahead of the technology curve.
                </p>
              </div>
              
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-tyrano-teal flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white/90">
                  <strong className="text-tyrano-teal">Innovation-Driven</strong> - We constantly explore new technologies to provide future-proof solutions.
                </p>
              </div>
            </div>
            
            <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-tyrano-dark font-medium">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-tyrano-teal/20 to-tyrano-accent/20 rounded-lg blur-xl opacity-50"></div>
            <div className="relative bg-tyrano-dark/80 border border-white/10 rounded-lg p-8 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent mb-2">150+</h3>
                  <p className="text-white/60">Projects Completed</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent mb-2">98%</h3>
                  <p className="text-white/60">Client Satisfaction</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent mb-2">50+</h3>
                  <p className="text-white/60">Team Members</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent mb-2">12+</h3>
                  <p className="text-white/60">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
