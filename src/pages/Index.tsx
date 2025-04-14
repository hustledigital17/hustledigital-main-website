
import { Laptop, ShieldCheck, TrendingUp, DollarSign, Users } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import ServiceCard from "@/components/shared/ServiceCard";
import SectionHeader from "@/components/shared/SectionHeader";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in">
                Digital Marketing<br />
                <span className="text-hustle-accent">Crafted for Results</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-hustle-light opacity-0 animate-fade-in animate-delay-200">
                Transform your digital presence with strategies that drive growth and deliver measurable success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in animate-delay-300">
                <CTAButton 
                  text="Book an Appointment" 
                  to="/contact"
                  size="lg"
                />
                <CTAButton 
                  text="Our Services" 
                  to="/services"
                  variant="outline"
                  size="lg"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 opacity-0 animate-fade-in animate-delay-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Digital Marketing Professionals" 
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-hustle-accent/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Digital Excellence, Measurable Results"
            description="At Hustle Digital, we combine strategic thinking with cutting-edge execution to transform your digital presence."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
              <p className="text-hustle-light">Years of experience delivering successful digital marketing campaigns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-100">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-hustle-light">Strategic decisions backed by analytics and performance metrics.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-200">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-hustle-light">Campaigns designed to maximize your return on investment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-300">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Success</h3>
              <p className="text-hustle-light">Dedicated support team committed to your business goals.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Our Services"
            title="Strategic Digital Marketing Solutions"
            description="We offer a comprehensive suite of services designed to elevate your brand and drive measurable business growth."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Full Stack Website Development"
              description="Custom websites designed for performance, conversions, and exceptional user experience."
              icon={<Laptop size={28} />}
            />
            
            <ServiceCard 
              title="Social Media Marketing"
              description="Strategic social media campaigns that build engagement and strengthen brand loyalty."
              icon={<Users size={28} />}
              delay="animate-delay-200"
            />
            
            <ServiceCard 
              title="Business Strategy Consulting"
              description="Expert guidance to align your digital efforts with your business objectives."
              icon={<TrendingUp size={28} />}
              delay="animate-delay-300"
            />
          </div>
          
          <div className="mt-12 text-center opacity-0 animate-fade-in animate-delay-400">
            <CTAButton 
              text="View All Services" 
              to="/services"
              size="lg"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg mb-8 text-gray-300 opacity-0 animate-fade-in animate-delay-100">
              Get a free website audit and discover opportunities to improve your online performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-200">
              <CTAButton 
                text="Book a Free Audit" 
                to="/contact"
                variant="white"
                size="lg"
              />
              <CTAButton 
                text="Schedule a Strategy Call" 
                to="/contact"
                variant="outline"
                size="lg"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
