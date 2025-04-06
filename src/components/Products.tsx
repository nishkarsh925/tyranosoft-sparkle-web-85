
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-tyrano-dark mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our suite of innovative software products designed to solve real-world business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="TyranoFlow"
            description="Workflow automation platform that streamlines your business processes and increases operational efficiency."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tag="Automation"
          />
          
          <ProductCard
            title="TyranoAnalytics"
            description="Advanced analytics solution that transforms your data into actionable business insights in real-time."
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tag="Analytics"
          />
          
          <ProductCard
            title="TyranoSecure"
            description="Comprehensive security suite that protects your digital assets from evolving cyber threats."
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tag="Security"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-tyrano-teal text-tyrano-dark hover:bg-tyrano-teal/10">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
}

function ProductCard({ title, description, image, tag }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl duration-300">
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
      <CardFooter>
        <Button variant="ghost" className="text-tyrano-teal hover:text-tyrano-blue hover:bg-tyrano-teal/10 p-0">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
