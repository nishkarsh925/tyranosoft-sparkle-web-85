
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-tyrano-dark text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4 bg-tyrano-light">
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-tyrano-dark mb-6">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our suite of innovative software products designed to solve real-world business challenges.
          </p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <ProductCard
              title="TyranoFlow"
              description="Workflow automation platform that streamlines your business processes and increases operational efficiency."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              tag="Automation"
              features={[
                "Visual workflow builder",
                "Pre-built templates",
                "Custom integrations",
                "Advanced reporting"
              ]}
            />
            
            <ProductCard
              title="TyranoAnalytics"
              description="Advanced analytics solution that transforms your data into actionable business insights in real-time."
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              tag="Analytics"
              features={[
                "Real-time dashboards",
                "Custom reports",
                "AI-powered insights",
                "Data visualization"
              ]}
            />
            
            <ProductCard
              title="TyranoSecure"
              description="Comprehensive security suite that protects your digital assets from evolving cyber threats."
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              tag="Security"
              features={[
                "Threat detection",
                "Vulnerability scanning",
                "Compliance reporting",
                "Security monitoring"
              ]}
            />
          </div>
          
          <div className="bg-tyrano-light p-8 rounded-lg mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-tyrano-dark mb-4">
                  Featured Product: TyranoCloud
                </h2>
                <p className="text-gray-600 mb-6">
                  Our comprehensive cloud management platform helps businesses optimize their infrastructure, reduce costs, and improve performance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-tyrano-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Multi-cloud management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-tyrano-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cost optimization tools
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-tyrano-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Security compliance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-tyrano-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Performance monitoring
                  </li>
                </ul>
                <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-white">
                  Learn More About TyranoCloud
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="TyranoCloud" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-tyrano-dark mb-8">Ready to transform your business?</h2>
            <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-white text-lg px-8 py-6">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  features: string[];
}

function ProductCard({ title, description, image, tag, features }: ProductCardProps) {
  const [hovering, setHovering] = useState(false);
  
  return (
    <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.3}>
      <Card className="overflow-hidden border-none shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl duration-300 h-full">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform hover:scale-110 duration-700"
          />
        </div>
        <div className="absolute top-4 right-4 bg-tyrano-teal text-white text-xs font-medium px-2 py-1 rounded">
          {tag}
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-heading text-tyrano-dark">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-tyrano-teal mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="text-tyrano-teal hover:text-tyrano-blue hover:bg-tyrano-teal/10 p-0">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Lens>
  );
}

export default ProductsPage;
