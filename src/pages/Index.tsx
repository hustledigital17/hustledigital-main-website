
import { 
  Laptop, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MonitorSmartphone, 
  Award, 
  Star,
  ChevronDown,
  ChevronRight,
  MessageSquare
} from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import ServiceCard from "@/components/shared/ServiceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import BusinessAnalyticsImage from "@/components/shared/BusinessAnalyticsImage";

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
              
              <p className="text-xl md:text-2xl text-black opacity-0 animate-fade-in animate-delay-200">
                Transform your digital presence with strategies that drive growth and deliver measurable success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in animate-delay-300">
                <CTAButton 
                  text="Book a Free Consultation" 
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
              <BusinessAnalyticsImage />
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
              <p className="text-black">Years of experience delivering successful digital marketing campaigns.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-100">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-black">Strategic decisions backed by analytics and performance metrics.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-200">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-black">Campaigns designed to maximize your return on investment.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-300">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Success</h3>
              <p className="text-black">Dedicated support team committed to your business goals.</p>
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
      
      {/* Testimonials Section */}
      <section className="py-20 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Client Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our clients have to say about working with Hustle Digital."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-black mb-6 italic">"Hustle Digital transformed our online presence completely. Their strategic approach to digital marketing helped us increase our conversion rates by 150% in just three months."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-hustle-accent/20 rounded-full flex items-center justify-center mr-4">
                  <p className="font-bold text-hustle-accent">SM</p>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Mitchell</h4>
                  <p className="text-black">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-100 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-black mb-6 italic">"Working with Hustle Digital has been a game-changer. Their team understood our brand's voice and created content that truly resonates with our audience. Our social media engagement is up by 200%."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-hustle-accent/20 rounded-full flex items-center justify-center mr-4">
                  <p className="font-bold text-hustle-accent">JD</p>
                </div>
                <div>
                  <h4 className="font-semibold">James Davis</h4>
                  <p className="text-black">Marketing Director, Retail Solutions</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in animate-delay-200 hover:shadow-lg transition-all duration-300">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-black mb-6 italic">"The website Hustle Digital built for us not only looks fantastic but performs incredibly well. Our load times decreased by 70%, and our bounce rate dropped significantly. The ROI has been incredible."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-hustle-accent/20 rounded-full flex items-center justify-center mr-4">
                  <p className="font-bold text-hustle-accent">AP</p>
                </div>
                <div>
                  <h4 className="font-semibold">Alicia Parker</h4>
                  <p className="text-black">Founder, Bloom Boutique</p>
                </div>
              </div>
            </div>
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
              Get a free consultation and discover opportunities to improve your online performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-200">
              <CTAButton 
                text="Book a Free Consultation" 
                to="/contact"
                variant="white"
                size="lg"
              />
              <CTAButton 
                text="Explore Our Services" 
                to="/services"
                variant="outline"
                size="lg"
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Now positioned below CTA */}
      <section className="py-20" id="faq-section">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Frequently Asked Questions"
            title="Got Questions? We've Got Answers"
            description="Here are some common questions we receive from our clients. If you can't find what you're looking for, don't hesitate to reach out."
            center={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12 opacity-0 animate-fade-in">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What makes Hustle Digital different from other agencies?
                </AccordionTrigger>
                <AccordionContent className="text-black">
                  Unlike traditional agencies, we focus on measurable results and ROI. We combine data-driven strategies with creative execution to ensure your marketing budget delivers real business growth. Our team stays at the forefront of digital trends, ensuring your brand is always ahead of the curve.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How long does it take to see results from digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-black">
                  While some tactics like paid advertising can show immediate results, most digital marketing strategies take 3-6 months to gain significant traction. We focus on building sustainable growth rather than quick fixes, though we'll always identify quick wins in the early stages of our partnership.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What's included in the free consultation?
                </AccordionTrigger>
                <AccordionContent className="text-black">
                  Our free consultation includes a comprehensive review of your current digital presence, identification of key opportunities for growth, and a preliminary strategy discussion. We'll analyze your competitors, assess your market position, and outline potential strategies tailored to your business goals.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How can I contact Hustle Digital?
                </AccordionTrigger>
                <AccordionContent className="text-black">
                  You can reach our team directly at <a href="mailto:hustledigi@gmail.com" className="text-hustle-accent hover:underline">hustledigi@gmail.com</a>, through our contact form, or via our social media channels. We aim to respond to all inquiries within 24 business hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-10 text-center">
              <CTAButton 
                text="View All FAQs" 
                to="/faq"
                variant="outline"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
