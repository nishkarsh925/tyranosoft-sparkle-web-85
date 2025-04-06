
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-tyrano-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-tyrano-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? Reach out to us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-tyrano-dark mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="w-full min-h-[150px]" />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-tyrano-teal to-tyrano-accent hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-tyrano-dark text-white rounded-lg shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MailIcon className="h-6 w-6 text-tyrano-teal shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <p className="text-white/70">info@tyranosoftwares.com</p>
                    <p className="text-white/70">support@tyranosoftwares.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-tyrano-teal shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Call Us</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                    <p className="text-white/70">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-tyrano-teal shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                    <p className="text-white/70">
                      TyranoSoftwares HQ<br />
                      123 Innovation Drive<br />
                      Tech Park, California 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-tyrano-teal to-tyrano-accent rounded-lg p-8 text-white">
              <h3 className="text-xl font-heading font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
