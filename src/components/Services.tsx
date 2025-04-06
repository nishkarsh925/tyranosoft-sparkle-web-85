
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, CloudIcon, BarChartIcon, LayoutIcon, CpuIcon, DatabaseIcon } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-tyrano-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-tyrano-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive software solutions to help businesses thrive in the digital era.
          </p>
        </div>
        
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
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card withTilt rotationFactor={6} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
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
  );
}
