
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full fixed top-0 z-50 bg-tyrano-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
            TyranoSoftwares
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
          </div>
          <Button className="bg-gradient-to-r from-tyrano-teal to-tyrano-accent hover:opacity-90 transition-opacity">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-tyrano-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <MobileNavLink href="/services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/products" onClick={() => setIsMenuOpen(false)}>Products</MobileNavLink>
            <MobileNavLink href="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</MobileNavLink>
            <Button className="bg-gradient-to-r from-tyrano-teal to-tyrano-accent hover:opacity-90 transition-opacity w-full mt-2">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      to={href} 
      className="text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-tyrano-teal after:transition-all"
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link 
      to={href} 
      className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
