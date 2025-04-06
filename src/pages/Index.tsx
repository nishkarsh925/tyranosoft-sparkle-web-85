
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tyrano-dark text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
