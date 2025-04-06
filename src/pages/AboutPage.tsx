
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-tyrano-dark text-white">
      <Navbar />
      
      <div className="relative pt-20">
        <div className="absolute inset-0 w-full h-screen">
          <SparklesCore
            id="tsparticlesabout"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#33C3F0"
            speed={0.8}
          />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
                About TyranoSoftwares
              </span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Founded in 2018, TyranoSoftwares has been at the forefront of software innovation, helping businesses transform their digital presence and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/80 mb-6">
                At TyranoSoftwares, our mission is to empower businesses with innovative software solutions that drive growth, enhance efficiency, and create exceptional digital experiences for their customers.
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
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-tyrano-dark text-center mb-16">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-tyrano-dark mb-1">Alex Richardson</h3>
              <p className="text-tyrano-teal font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                With over 20 years of experience in software development and business leadership.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-tyrano-dark mb-1">Samantha Chen</h3>
              <p className="text-tyrano-teal font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Leading our technical strategy with expertise in cloud architecture and AI solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-tyrano-dark mb-1">Marcus Johnson</h3>
              <p className="text-tyrano-teal font-medium mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Ensuring smooth delivery of all projects with a focus on efficiency and client satisfaction.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-tyrano-dark">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
