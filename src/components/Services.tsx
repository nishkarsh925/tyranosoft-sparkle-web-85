
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, CloudIcon, BarChartIcon, LayoutIcon, CpuIcon, DatabaseIcon } from "lucide-react";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="bg-tyrano-light py-20">
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
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            We provide comprehensive software solutions to help businesses thrive in the digital era.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<CodeIcon className="h-10 w-10 text-tyrano-teal" />}
            title="Custom Software Development"
            description="Tailor-made software solutions designed to meet your specific business requirements and challenges."
            index={0}
          />
          
          <ServiceCard 
            icon={<CloudIcon className="h-10 w-10 text-tyrano-teal" />}
            title="Cloud Solutions"
            description="Scalable and secure cloud infrastructure and migration services to optimize your IT resources."
            index={1}
          />
          
          <ServiceCard 
            icon={<BarChartIcon className="h-10 w-10 text-tyrano-teal" />}
            title="Data Analytics"
            description="Transform your raw data into actionable insights with our advanced analytics solutions."
            index={2}
          />
          
          <ServiceCard 
            icon={<LayoutIcon className="h-10 w-10 text-tyrano-teal" />}
            title="UI/UX Design"
            description="Create intuitive, engaging user experiences that enhance customer satisfaction and drive conversion."
            index={3}
          />
          
          <ServiceCard 
            icon={<CpuIcon className="h-10 w-10 text-tyrano-teal" />}
            title="AI & Machine Learning"
            description="Implement intelligent automation and predictive capabilities to revolutionize your business processes."
            index={4}
          />
          
          <ServiceCard 
            icon={<DatabaseIcon className="h-10 w-10 text-tyrano-teal" />}
            title="Database Management"
            description="Optimize your data storage, security, and accessibility with our database management expertise."
            index={5}
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
  index: number;
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const [hovering, setHovering] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.3}>
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow group h-full">
            <CardHeader className="pb-2">
              <motion.div 
                className="mb-4 transition-transform group-hover:scale-110 duration-300"
                animate={hovering ? { rotateY: 180 } : { rotateY: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                {icon}
              </motion.div>
              <CardTitle className="text-xl font-heading text-tyrano-dark">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </Lens>
    </motion.div>
  );
}
