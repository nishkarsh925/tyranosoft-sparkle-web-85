
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, CloudIcon, BarChartIcon, LayoutIcon, CpuIcon, DatabaseIcon } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";

export function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const [hovering, setHovering] = useState(false);
  
  return (
    <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.3}>
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group h-full">
        <CardHeader className="pb-2">
          <div className="mb-4 transition-transform group-hover:scale-110 duration-300">
            {icon}
          </div>
          <CardTitle className="text-xl font-heading text-tyrano-dark">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardContent>
      </Card>
    </Lens>
  );
}

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-tyrano-dark text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4 bg-tyrano-light">
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-tyrano-dark mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs and challenges.
          </p>
        </div>
      </div>
      
      <section className="bg-tyrano-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<CodeIcon className="h-10 w-10 text-tyrano-teal" />}
              title="Custom Software Development"
              description="Tailor-made software solutions designed to meet your specific business requirements and challenges."
            />
            
            <ServiceCard 
              icon={<CloudIcon className="h-10 w-10 text-tyrano-teal" />}
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure and migration services to optimize your IT resources."
            />
            
            <ServiceCard 
              icon={<BarChartIcon className="h-10 w-10 text-tyrano-teal" />}
              title="Data Analytics"
              description="Transform your raw data into actionable insights with our advanced analytics solutions."
            />
            
            <ServiceCard 
              icon={<LayoutIcon className="h-10 w-10 text-tyrano-teal" />}
              title="UI/UX Design"
              description="Create intuitive, engaging user experiences that enhance customer satisfaction and drive conversion."
            />
            
            <ServiceCard 
              icon={<CpuIcon className="h-10 w-10 text-tyrano-teal" />}
              title="AI & Machine Learning"
              description="Implement intelligent automation and predictive capabilities to revolutionize your business processes."
            />
            
            <ServiceCard 
              icon={<DatabaseIcon className="h-10 w-10 text-tyrano-teal" />}
              title="Database Management"
              description="Optimize your data storage, security, and accessibility with our database management expertise."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-tyrano-dark to-tyrano-dark/95">
        <div className="container mx-auto px-4">
          <div className="bg-tyrano-dark/60 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold font-heading text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
                Our Development Process
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-tyrano-dark/80 p-6 rounded-lg border border-white/10">
                <div className="bg-tyrano-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-tyrano-teal font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
                <p className="text-white/70">Understanding your business needs and project requirements through in-depth consultation.</p>
              </div>
              
              <div className="bg-tyrano-dark/80 p-6 rounded-lg border border-white/10">
                <div className="bg-tyrano-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-tyrano-teal font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
                <p className="text-white/70">Creating a detailed project roadmap, architecture, and technical specifications.</p>
              </div>
              
              <div className="bg-tyrano-dark/80 p-6 rounded-lg border border-white/10">
                <div className="bg-tyrano-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-tyrano-teal font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                <p className="text-white/70">Building your solution with iterative development cycles and regular progress updates.</p>
              </div>
              
              <div className="bg-tyrano-dark/80 p-6 rounded-lg border border-white/10">
                <div className="bg-tyrano-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-tyrano-teal font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Delivery</h3>
                <p className="text-white/70">Thorough testing, deployment, and ongoing support to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
