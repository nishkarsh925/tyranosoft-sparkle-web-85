
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-tyrano-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-tyrano-dark mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to learn more about our services? Reach out to us today.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-lg shadow-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-heading font-bold text-tyrano-dark mb-6"
              whileHover={{ color: "#33C3F0" }}
              transition={{ duration: 0.3 }}
            >
              Send us a message
            </motion.h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="w-full" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="w-full min-h-[150px]" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button className="w-full bg-gradient-to-r from-tyrano-teal to-tyrano-accent hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          
          <div>
            <motion.div 
              className="bg-tyrano-dark text-white rounded-lg shadow-xl p-8 mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.h3 
                className="text-2xl font-heading font-bold mb-6"
                whileHover={{ color: "#33C3F0" }}
                transition={{ duration: 0.3 }}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-6">
                <ContactItem icon={<MailIcon className="h-6 w-6 text-tyrano-teal shrink-0 mt-1" />} title="Email Us" delay={0.1}>
                  <p className="text-white/70">info@tyranosoftwares.com</p>
                  <p className="text-white/70">support@tyranosoftwares.com</p>
                </ContactItem>
                
                <ContactItem icon={<PhoneIcon className="h-6 w-6 text-tyrano-teal shrink-0 mt-1" />} title="Call Us" delay={0.3}>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                  <p className="text-white/70">+1 (555) 987-6543</p>
                </ContactItem>
                
                <ContactItem icon={<MapPinIcon className="h-6 w-6 text-tyrano-teal shrink-0 mt-1" />} title="Visit Us" delay={0.5}>
                  <p className="text-white/70">
                    TyranoSoftwares HQ<br />
                    123 Innovation Drive<br />
                    Tech Park, California 94103<br />
                    United States
                  </p>
                </ContactItem>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}

function ContactItem({ icon, title, children, delay }: ContactItemProps) {
  return (
    <motion.div 
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ x: 5 }}
    >
      <motion.div
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        {children}
      </div>
    </motion.div>
  );
}
