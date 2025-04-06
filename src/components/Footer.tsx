
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe } from "@/components/ui/globe";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-tyrano-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="relative h-[250px] mb-12 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tyrano-dark/80 z-10 pointer-events-none"></div>
          <motion.h3 
            className="absolute top-4 left-4 text-xl font-heading font-bold mb-4 z-20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Global Presence
          </motion.h3>
          <Globe className="scale-110" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
                TyranoSoftwares
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Empowering businesses with innovative software solutions since 2018.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="facebook" />
              <SocialIcon icon="twitter" />
              <SocialIcon icon="linkedin" />
              <SocialIcon icon="github" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/#services">Services</FooterLink>
              <FooterLink href="/#about">About Us</FooterLink>
              <FooterLink href="/#products">Products</FooterLink>
              <FooterLink href="/#testimonials">Testimonials</FooterLink>
              <FooterLink href="/#contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services/software-development">Custom Software Development</FooterLink>
              <FooterLink href="/services/cloud-solutions">Cloud Solutions</FooterLink>
              <FooterLink href="/services/data-analytics">Data Analytics</FooterLink>
              <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
              <FooterLink href="/services/ai-ml">AI & Machine Learning</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive updates on the latest tech trends and company news.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-white/10 border-white/20 text-white" />
              <Button className="bg-tyrano-teal text-tyrano-dark hover:bg-tyrano-teal/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TyranoSoftwares. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-white/60 text-sm hover:text-white">Privacy Policy</a>
            <a href="/terms" className="text-white/60 text-sm hover:text-white">Terms of Service</a>
            <a href="/cookie-policy" className="text-white/60 text-sm hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <a 
        href={href} 
        className="text-white/70 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

interface SocialIconProps {
  icon: string;
}

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <a
      href={`https://${icon}.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tyrano-teal hover:text-tyrano-dark transition-colors"
    >
      <span className="sr-only">{icon}</span>
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        {icon === "facebook" && <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />}
        {icon === "twitter" && <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />}
        {icon === "linkedin" && <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />}
        {icon === "github" && <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />}
      </svg>
    </a>
  );
}
