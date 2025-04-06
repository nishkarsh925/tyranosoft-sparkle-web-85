
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, CloudIcon, BarChartIcon, LayoutIcon, CpuIcon, DatabaseIcon } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { motion } from "framer-motion";

export function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const [hovering, setHovering] = useState(false);
  
  return (
    <Lens hovering={hovering} setHovering={setHovering} zoomFactor={1.3}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
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
  );
}

const ServicesPage = () => {
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
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive software solutions tailored to your business needs and challenges.
          </motion.p>
        </div>
      </div>
      
      <section className="bg-tyrano-light py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard 
                icon={<CodeIcon className="h-10 w-10 text-tyrano-teal" />}
                title="Custom Software Development"
                description="Tailor-made software solutions designed to meet your specific business requirements and challenges."
              />
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard 
                icon={<CloudIcon className="h-10 w-10 text-tyrano-teal" />}
                title="Cloud Solutions"
                description="Scalable and secure cloud infrastructure and migration services to optimize your IT resources."
              />
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard 
                icon={<BarChartIcon className="h-10 w-10 text-tyrano-teal" />}
                title="Data Analytics"
                description="Transform your raw data into actionable insights with our advanced analytics solutions."
              />
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard 
                icon={<LayoutIcon className="h-10 w-10 text-tyrano-teal" />}
                title="UI/UX Design"
                description="Create intuitive, engaging user experiences that enhance customer satisfaction and drive conversion."
              />
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard 
                icon={<CpuIcon className="h-10 w-10 text-tyrano-teal" />}
                title="AI & Machine Learning"
                description="Implement intelligent automation and predictive capabilities to revolutionize your business processes."
              />
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <ServiceCard 
                icon={<DatabaseIcon className="h-10 w-10 text-tyrano-teal" />}
                title="Database Management"
                description="Optimize your data storage, security, and accessibility with our database management expertise."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-tyrano-dark to-tyrano-dark/95">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-tyrano-dark/60 border border-white/10 rounded-lg p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold font-heading text-center mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
                Our Development Process
              </span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProcessStep step={1} title="Discovery" description="Understanding your business needs and project requirements through in-depth consultation." delay={0.1} />
              <ProcessStep step={2} title="Planning" description="Creating a detailed project roadmap, architecture, and technical specifications." delay={0.3} />
              <ProcessStep step={3} title="Development" description="Building your solution with iterative development cycles and regular progress updates." delay={0.5} />
              <ProcessStep step={4} title="Delivery" description="Thorough testing, deployment, and ongoing support to ensure long-term success." delay={0.7} />
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  delay: number;
}

function ProcessStep({ step, title, description, delay }: ProcessStepProps) {
  return (
    <motion.div 
      className="bg-tyrano-dark/80 p-6 rounded-lg border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(51, 195, 240, 0.2)" }}
    >
      <motion.div 
        className="bg-tyrano-teal/20 w-12 h-12 rounded-full flex items-center justify-center mb-4"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-tyrano-teal font-bold text-xl">{step}</span>
      </motion.div>
      <motion.h3 
        className="text-xl font-bold text-white mb-2"
        whileHover={{ color: "#33C3F0" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

export default ServicesPage;
