
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X, HomeIcon, Package, Component, Activity, Mail, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    {
      title: 'Home',
      icon: <HomeIcon className='h-full w-full text-white' />,
      href: '/',
    },
    {
      title: 'Services',
      icon: <Component className='h-full w-full text-white' />,
      href: '/services',
    },
    {
      title: 'About',
      icon: <Users className='h-full w-full text-white' />,
      href: '/about',
    },
    {
      title: 'Products',
      icon: <Package className='h-full w-full text-white' />,
      href: '/products',
    },
    {
      title: 'Pricing',
      icon: <Activity className='h-full w-full text-white' />,
      href: '/pricing',
    },
    {
      title: 'Contact',
      icon: <Mail className='h-full w-full text-white' />,
      href: '/contact',
    }
  ];
  
  return (
    <nav className="w-full fixed top-0 z-50 bg-tyrano-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
            TyranoSoftwares
          </span>
        </Link>
        
        {/* Desktop Navigation (Dock-style) */}
        <div className="hidden md:block">
          <Dock className="items-end pb-1 bg-transparent">
            {navItems.map((item, idx) => (
              <DockItem
                key={idx}
                className={`aspect-square rounded-full ${location.pathname === item.href ? 'bg-tyrano-teal' : 'bg-tyrano-dark/80 hover:bg-tyrano-dark'}`}
              >
                <Link to={item.href}>
                  <DockIcon>{item.icon}</DockIcon>
                  <DockLabel>{item.title}</DockLabel>
                </Link>
              </DockItem>
            ))}
            <DockItem className="aspect-square rounded-full bg-gradient-to-r from-tyrano-teal to-tyrano-accent">
              <Link to="/contact">
                <DockIcon>
                  <Mail className='h-full w-full text-white' />
                </DockIcon>
                <DockLabel>Contact Us</DockLabel>
              </Link>
            </DockItem>
          </Dock>
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
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
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
