
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";
import { MessageSquare } from "lucide-react";

const FAQ = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-hustle-accent font-medium mb-3 opacity-0 animate-fade-in">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-100">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-black mb-8 opacity-0 animate-fade-in animate-delay-200">
              Get answers to common questions about our services, processes, and how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* General Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 opacity-0 animate-fade-in">General Questions</h2>
              
              <Accordion type="single" collapsible className="w-full opacity-0 animate-fade-in animate-delay-100">
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
                    Do you work with small businesses or only large corporations?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    We work with businesses of all sizes, from startups to enterprise-level organizations. Our strategies are scalable and tailored to your specific needs and budget. We believe every business deserves access to high-quality digital marketing expertise, regardless of size.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Services Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 opacity-0 animate-fade-in">Services & Pricing</h2>
              
              <Accordion type="single" collapsible className="w-full opacity-0 animate-fade-in animate-delay-100">
                <AccordionItem value="service-1">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How much do your services cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Our pricing is customized based on your specific needs, goals, and the scope of work required. We offer flexible pricing models including monthly retainers, project-based pricing, and performance-based arrangements. During our initial consultation, we'll discuss your budget and provide transparent pricing options.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="service-2">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Do you require long-term contracts?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    While we recommend a minimum 3-month commitment for most digital marketing services to see meaningful results, we offer flexible contract terms. Our goal is to earn your business month after month by delivering results, not by locking you into lengthy contracts.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="service-3">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Can you work with our in-house marketing team?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Absolutely! We excel at collaborating with in-house teams, providing specialized expertise while integrating seamlessly with your existing processes. We can fill skill gaps, provide strategic guidance, or handle specific channels while your team focuses on other areas.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="service-4">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    How do you measure and report on results?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    We provide comprehensive monthly reports that track key performance indicators (KPIs) aligned with your business goals. Our reporting includes detailed analytics, performance insights, and strategic recommendations. We also offer access to real-time dashboards for continuous monitoring of your campaigns.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Technical Questions */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 opacity-0 animate-fade-in">Technical Questions</h2>
              
              <Accordion type="single" collapsible className="w-full opacity-0 animate-fade-in animate-delay-100">
                <AccordionItem value="tech-1">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What technology stack do you use for website development?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    We use modern, reliable technologies including React, Next.js, and other leading frameworks. Our websites are built with performance, security, and scalability in mind. We focus on creating responsive, accessible sites that provide exceptional user experiences across all devices.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-2">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Do you provide website hosting and maintenance?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Yes, we offer comprehensive hosting and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance includes regular updates, security monitoring, performance optimization, and technical support.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-3">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    What platforms do you use for e-commerce websites?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    We work with leading e-commerce platforms such as Shopify, WooCommerce, and Magento, tailoring our recommendation to your specific business needs, product complexity, and growth plans. Our e-commerce solutions include customized user experiences, seamless checkout processes, and integration with your business systems.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-4">
                  <AccordionTrigger className="text-left text-lg font-medium">
                    Do you offer website migration services?
                  </AccordionTrigger>
                  <AccordionContent className="text-black">
                    Yes, we provide comprehensive website migration services with minimal disruption to your business. Our migration process includes thorough planning, content transfer, SEO preservation, testing, and post-migration support to ensure a smooth transition.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-hustle-muted rounded-xl opacity-0 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-hustle-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare size={32} className="text-hustle-accent" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-black mb-0">We're here to help. Contact us for a personalized response to your specific needs.</p>
              </div>
              <CTAButton 
                text="Contact Us" 
                to="/contact" 
                className="flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
