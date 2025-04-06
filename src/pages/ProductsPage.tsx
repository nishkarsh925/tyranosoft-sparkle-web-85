
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-tyrano-dark text-white">
      <Navbar />
      
      <div className="relative pt-20 px-4 bg-tyrano-light">
        <div className="container mx-auto py-20 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold font-heading text-tyrano-dark mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover our suite of innovative software products designed to solve real-world business challenges.
          </motion.p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
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
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-tyrano-light p-8 rounded-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-3xl font-bold text-tyrano-dark mb-4"
                  whileHover={{ color: "#33C3F0" }}
                  transition={{ duration: 0.3 }}
                >
                  Featured Product: TyranoCloud
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our comprehensive cloud management platform helps businesses optimize their infrastructure, reduce costs, and improve performance.
                </motion.p>
                <motion.ul 
                  className="space-y-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <FeatureItem text="Multi-cloud management" />
                  <FeatureItem text="Cost optimization tools" />
                  <FeatureItem text="Security compliance" />
                  <FeatureItem text="Performance monitoring" />
                </motion.ul>
                <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-white">
                  Learn More About TyranoCloud
                </Button>
              </motion.div>
              <motion.div 
                className="rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="TyranoCloud" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold text-tyrano-dark mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ready to transform your business?
            </motion.h2>
            <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-white text-lg px-8 py-6">
              Request a Demo
            </Button>
          </motion.div>
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
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden border-none shadow-xl transition-all hover:shadow-2xl duration-300 h-full">
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
          <CardContent>
            <motion.ul 
              className="space-y-2"
              initial="hidden"
              animate={hovering ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0.7 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </motion.ul>
          </CardContent>
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
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <motion.li 
      className="flex items-center text-gray-700"
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
      }}
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.svg 
        className="w-5 h-5 text-tyrano-teal mr-2" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </motion.svg>
      {text}
    </motion.li>
  );
}

export default ProductsPage;
