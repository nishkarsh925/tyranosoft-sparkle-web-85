
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/ui/pricing";
import { SparklesCore } from "@/components/ui/sparkles";

const pricingPlans = [
  {
    name: "STARTER",
    price: "499",
    yearlyPrice: "399",
    period: "per month",
    features: [
      "Up to 5 custom software projects",
      "Basic technical support",
      "48-hour response time",
      "Limited API access",
      "Community forum access"
    ],
    description: "Perfect for startups and small businesses",
    buttonText: "Get Started",
    href: "/contact",
    isPopular: false,
  },
  {
    name: "BUSINESS",
    price: "999",
    yearlyPrice: "799",
    period: "per month",
    features: [
      "Up to 15 custom software projects",
      "Priority technical support",
      "24-hour response time",
      "Full API access",
      "Dedicated account manager",
      "Monthly performance reports",
      "Custom integrations"
    ],
    description: "Ideal for growing businesses and organizations",
    buttonText: "Choose Business",
    href: "/contact",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "2499",
    yearlyPrice: "1999",
    period: "per month",
    features: [
      "Unlimited software projects",
      "24/7 premium support",
      "4-hour response time",
      "Advanced API access",
      "Dedicated development team",
      "Weekly performance reports",
      "Custom solutions architecture",
      "On-site consultations"
    ],
    description: "For large organizations with complex needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="relative pt-20">
        <div className="absolute inset-0 w-full h-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <SparklesCore
            id="tsparticlespricing"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={70}
            className="w-full h-full"
            particleColor="#9b87f5"
            speed={0.8}
          />
        </div>
        
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Choose the plan that matches your business needs. All plans include our core software development services.
            </p>
          </div>
        </div>
      </div>
      
      <section className="bg-background py-6">
        <Pricing 
          plans={pricingPlans}
          title="Software Development Plans"
          description="Select the package that's right for your business needs.
All plans include our core development services, quality assurance, and maintenance support."
        />
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade your plan at any time. The new charges will be prorated for the remainder of the billing cycle.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">Do you offer custom pricing?</h3>
              <p className="text-muted-foreground">Yes, we offer custom pricing for organizations with specific needs that aren't covered by our standard plans. Contact our sales team for details.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept all major credit cards, bank transfers, and can accommodate purchase orders for enterprise clients.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-3">Is there a minimum contract period?</h3>
              <p className="text-muted-foreground">Our monthly plans can be canceled at any time. Annual plans have a 12-month commitment with significant savings.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
