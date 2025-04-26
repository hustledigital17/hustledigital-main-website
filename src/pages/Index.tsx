import { Laptop, ShieldCheck, TrendingUp, DollarSign, Users, MonitorSmartphone, Award, Star, ChevronDown, ChevronRight, MessageSquare, Calendar } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import ServiceCard from "@/components/shared/ServiceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import BusinessAnalyticsImage from "@/components/shared/BusinessAnalyticsImage";
import ServicesCarousel from "@/components/shared/ServicesCarousel";
import WhyChooseUsCard from "@/components/shared/WhyChooseUsCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return <div className="flex flex-col min-h-screen">
    <section className="pt-36 md:pt-44 pb-28 md:pb-36 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:gap-12">
          <div className="w-full md:w-1/2 mb-16 md:mb-0 space-y-8">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              ease: "easeOut"
            }}>
              Digital Marketing<br />
              <span className="text-hustle-accent">Crafted for Results</span>
            </motion.h1>
            
            <motion.p className="text-xl md:text-2xl text-black my-8" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut"
            }}>
              Transform your digital presence with strategies that drive growth and deliver measurable success.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 pt-6" 
              initial={{
                opacity: 0,
                y: 20
              }} 
              animate={{
                opacity: 1,
                y: 0
              }} 
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut"
              }}
            >
              <CTAButton 
                text="Book a Free Consultation" 
                to="https://calendly.com/hustledigi/30min" 
                size="lg" 
                icon={true} 
                className="w-full sm:w-auto h-[56px] text-lg"
              />
              <CTAButton 
                text="Our Services" 
                to="/services" 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto h-[56px] text-lg"
              />
            </motion.div>
          </div>
          
          <motion.div className="w-full md:w-1/2" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }}>
            <BusinessAnalyticsImage />
          </motion.div>
        </div>
      </div>
    </section>
    
    <section className="py-28 bg-hustle-muted">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeader subtitle="Why Choose Us" title="Digital Excellence, Measurable Results" description="At Hustle Digital, we combine strategic thinking with cutting-edge execution to transform your digital presence." center={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          <WhyChooseUsCard title="Proven Expertise" description="Years of experience delivering successful digital marketing campaigns across multiple industries." icon={<ShieldCheck className="text-hustle-accent" />} number="1" stats="8+ Years Experience" delay="" />
          
          <WhyChooseUsCard title="Data-Driven" description="Strategic decisions backed by analytics and performance metrics to ensure optimal results." icon={<TrendingUp className="text-hustle-accent" />} number="2" stats="237% Average ROI" delay="animate-delay-100" />
          
          <WhyChooseUsCard title="ROI Focused" description="Campaigns designed to maximize your return on investment and deliver tangible business growth." icon={<DollarSign className="text-hustle-accent" />} number="3" stats="$1.2M+ Revenue Generated" delay="animate-delay-200" />
          
          <WhyChooseUsCard title="Client Success" description="Dedicated support team committed to your business goals and long-term success." icon={<Users className="text-hustle-accent" />} number="4" stats="99% Client Retention" delay="animate-delay-300" />
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in animate-delay-400 space-y-4">
          <CTAButton text="Book a Free Consultation" to="https://calendly.com/hustledigi/30min" size="lg" className="mx-auto" icon={true} />
        </div>
      </div>
    </section>
    
    <section className="py-28">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            subtitle="Our Services" 
            title="Strategic Digital Marketing Solutions" 
            description="We offer a comprehensive suite of services designed to elevate your brand and drive measurable business growth." 
            center={true} 
          />
        </motion.div>
        
        <div className="mt-20 mb-24">
          <ServicesCarousel />
        </div>
        
        <motion.div 
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CTAButton 
            text="View All Services" 
            to="/services" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px]" 
          />
          <CTAButton 
            text="Book a Free Consultation" 
            to="https://calendly.com/hustledigi/30min" 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px]" 
            icon={true} 
          />
        </motion.div>
      </div>
    </section>
    
    <section className="py-28 bg-hustle-muted">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeader subtitle="Client Testimonials" title="What Our Clients Say" description="Don't just take our word for it. Here's what our clients have to say about working with Hustle Digital." center={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Hustle Digital transformed our online presence completely. Their strategic approach to digital marketing helped us increase our conversion rates by 150% in just three months."
            name="Ankita Thakur"
            title="Founder, Dipitreats."
            delay="animate-delay-100"
          />
          <TestimonialCard
            quote="Working with Hustle Digital has been a game-changer. Their team understood our brand's voice and created content that truly resonates with our audience. Our social media engagement has doubled since we started working with them."
            name="Ananya Joshi"
            title="Founder, Bloom Interiors"
            delay="animate-delay-100"
          />
          <TestimonialCard
            quote="The website Hustle Digital built for us not only looks fantastic but performs incredibly well. Our load times decreased by 70%, and our bounce rate dropped significantly. The ROI has been outstanding."
            name="Saurav Patel"
            title="Founder, GreenAura Organic"
            delay="animate-delay-100"
          />
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in animate-delay-300">
          <CTAButton text="Book a Free Consultation" to="https://calendly.com/hustledigi/30min" size="lg" className="mx-auto" icon={true} />
        </div>
      </div>
    </section>
    
    <section className="py-28 bg-black text-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
            Ready to Transform Your Digital Presence?
          </motion.h2>
          
          <Separator className="bg-hustle-accent/30 h-[2px] w-24 mx-auto mb-8" />
          
          <motion.p className="text-xl mb-10 text-gray-300 leading-relaxed" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
            Get a free consultation and discover opportunities to improve your online performance.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
            <CTAButton text="Book a Free Consultation" to="https://calendly.com/hustledigi/30min" variant="white" size="lg" icon={true} />
            <CTAButton text="Explore Our Services" to="/services" variant="outline" size="lg" className="text-white" />
          </motion.div>
        </div>
      </div>
    </section>
    
    <section className="py-28 bg-white" id="faq-section">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeader subtitle="Frequently Asked Questions" title="Got Questions? We've Got Answers" description="Here are some common questions we receive from our clients. If you can't find what you're looking for, don't hesitate to reach out." center={true} />
        
        <div className="max-w-3xl mx-auto mt-16 opacity-0 animate-fade-in">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-md px-6 py-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                What makes Hustle Digital different from other agencies?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                Unlike traditional agencies, we focus on measurable results and ROI. We combine data-driven strategies with creative execution to ensure your marketing budget delivers real business growth. Our team stays at the forefront of digital trends, ensuring your brand is always ahead of the curve.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-md px-6 py-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                How long does it take to see results from digital marketing?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                While some tactics like paid advertising can show immediate results, most digital marketing strategies take 3-6 months to gain significant traction. We focus on building sustainable growth rather than quick fixes, though we'll always identify quick wins in the early stages of our partnership.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-md px-6 py-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                What's included in the free consultation?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                Our free consultation includes a comprehensive review of your current digital presence, identification of key opportunities for growth, and a preliminary strategy discussion. We'll analyze your competitors, assess your market position, and outline potential strategies tailored to your business goals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-md px-6 py-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                How can I contact Hustle Digital?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                You can reach our team directly at <a href="mailto:hustledigi@gmail.com" className="text-hustle-accent hover:underline">hustledigi@gmail.com</a>, through our contact form, or via our social media channels. We aim to respond to all inquiries within 24 business hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-16 flex flex-col items-center gap-4 max-w-[440px] mx-auto">
            <CTAButton text="View All FAQs" to="/faq" variant="outline" className="w-full" />
            <CTAButton text="Book a Free Consultation" to="https://calendly.com/hustledigi/30min" size="lg" className="w-full" icon={true} />
          </div>
        </div>
      </div>
    </section>
  </div>;
};
export default Index;
