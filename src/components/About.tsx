
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function About() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-tyrano-dark to-tyrano-dark/95 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerAnimation}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-geist tracking-tighter mb-6"
              variants={itemAnimation}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
                About TyranoSoftwares
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/80 mb-6"
              variants={itemAnimation}
            >
              Founded in 2018, TyranoSoftwares has been at the forefront of software innovation, 
              helping businesses transform their digital presence and operations.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerAnimation}
            >
              <motion.div 
                className="flex gap-3"
                variants={itemAnimation}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="h-6 w-6 rounded-full bg-tyrano-teal flex items-center justify-center mt-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <p className="text-white/90">
                  <strong className="text-tyrano-teal">Customer-Centric Approach</strong> - We prioritize understanding your unique needs to deliver solutions that truly add value.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex gap-3"
                variants={itemAnimation}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="h-6 w-6 rounded-full bg-tyrano-teal flex items-center justify-center mt-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <p className="text-white/90">
                  <strong className="text-tyrano-teal">Technical Excellence</strong> - Our team comprises industry experts who stay ahead of the technology curve.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex gap-3"
                variants={itemAnimation}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="h-6 w-6 rounded-full bg-tyrano-teal flex items-center justify-center mt-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <p className="text-white/90">
                  <strong className="text-tyrano-teal">Innovation-Driven</strong> - We constantly explore new technologies to provide future-proof solutions.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemAnimation}>
              <Button className="bg-tyrano-teal hover:bg-tyrano-teal/90 text-tyrano-dark font-medium">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-tyrano-teal/20 to-tyrano-accent/20 rounded-lg blur-xl opacity-50"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="relative bg-tyrano-dark/80 border border-white/10 rounded-lg p-8 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <CounterItem value="150+" label="Projects Completed" delay={0} />
                <CounterItem value="98%" label="Client Satisfaction" delay={0.2} />
                <CounterItem value="50+" label="Team Members" delay={0.4} />
                <CounterItem value="12+" label="Years Experience" delay={0.6} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface CounterItemProps {
  value: string;
  label: string;
  delay: number;
}

function CounterItem({ value, label, delay }: CounterItemProps) {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h3 
        className="text-4xl lg:text-5xl font-geist tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {value}
      </motion.h3>
      <p className="text-white/60">{label}</p>
    </motion.div>
  );
}
