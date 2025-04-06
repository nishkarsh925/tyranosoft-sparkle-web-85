
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { motion } from "framer-motion";

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-tyrano-dark mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Products
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Discover our suite of innovative software products designed to solve real-world business challenges.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="TyranoFlow"
            description="Workflow automation platform that streamlines your business processes and increases operational efficiency."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tag="Automation"
            index={0}
          />
          
          <ProductCard
            title="TyranoAnalytics"
            description="Advanced analytics solution that transforms your data into actionable business insights in real-time."
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tag="Analytics"
            index={1}
          />
          
          <ProductCard
            title="TyranoSecure"
            description="Comprehensive security suite that protects your digital assets from evolving cyber threats."
            image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tag="Security"
            index={2}
          />
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" className="border-tyrano-teal text-tyrano-dark hover:bg-tyrano-teal/10">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  index: number;
}

function ProductCard({ title, description, image, tag, index }: ProductCardProps) {
  const [hovering, setHovering] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.3}>
        <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card className="overflow-hidden border-none shadow-xl transition-all hover:shadow-2xl duration-300 relative h-full">
            <Spotlight className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 from-tyrano-teal/30 via-transparent to-transparent" />
            <div className="h-48 overflow-hidden">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            <motion.div 
              className="absolute top-4 right-4 bg-tyrano-teal text-white text-xs font-medium px-2 py-1 rounded"
              animate={hovering ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {tag}
            </motion.div>
            <CardHeader>
              <CardTitle className="text-xl font-heading text-tyrano-dark">{title}</CardTitle>
              <CardDescription className="text-gray-600">{description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button variant="ghost" className="text-tyrano-teal hover:text-tyrano-blue hover:bg-tyrano-teal/10 p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </Lens>
    </motion.div>
  );
}
