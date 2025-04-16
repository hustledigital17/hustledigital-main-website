
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";
import { Award, Globe, LayoutGrid, Mail, MessageSquare, PenTool, Settings, Smartphone, Target, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pb-0 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 pt-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <p className="text-hustle-accent font-medium mb-3 opacity-0 animate-fade-in">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-100">
                We Hustle, You Scale
              </h1>
              <p className="text-xl text-hustle-light mb-6 opacity-0 animate-fade-in animate-delay-200">
                That's not just our tagline—it's how we operate.
              </p>
              <p className="mb-8 text-hustle-light opacity-0 animate-fade-in animate-delay-300">
                At Hustle Digital, we're the crew behind the brands that break the internet, dominate search results, and turn followers into loyal fans. 
                We're not your average agency—we're your digital growth partners, your creative pit crew, your strategy-first, results-always team.
              </p>
              <p className="mb-8 text-hustle-light opacity-0 animate-fade-in animate-delay-400">
                Whether you're just getting started or ready to level up, we've got the tools, the team, and the energy to make it happen.
              </p>
              <div className="opacity-0 animate-fade-in animate-delay-500">
                <CTAButton 
                  text="Work With Us" 
                  to="/contact" 
                  size="lg"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 relative opacity-0 animate-fade-in animate-delay-300">
              <div className="aspect-video rounded-xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-hustle-accent/20">
                <img 
                  src="/lovable-uploads/c44718e1-3483-4794-9e45-34eca77c194d.png" 
                  alt="Business Analytics Chart"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-hustle-accent text-white p-4 rounded-lg shadow-lg md:max-w-xs transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <p className="font-medium">
                  "We don't just execute marketing campaigns; we build digital ecosystems that drive sustainable growth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're About */}
      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="What We're About"
            title="Our Mission"
            description={
              <div className="space-y-4">
                <p>
                  We're all in on helping businesses like yours grow fast and grow smart. Hustle Digital was built to solve one problem: helping brands win online without wasting time or budget. We're lean, sharp, and laser-focused on results.
                </p>
                <p>
                  Our squad blends business brains with creative firepower, delivering full-stack digital services that are as strategic as they are scroll-stopping.
                </p>
              </div>
            }
            center={true}
          />
          
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-hustle-accent/30">
              <img 
                src="/lovable-uploads/a01c26e3-eb4c-41b0-a94f-631d18c06121.png" 
                alt="Data Analysis and Growth" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="What We Do"
            title="Your Digital Arsenal"
            description="Our comprehensive suite of services designed to transform your online presence."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              icon={<LayoutGrid className="text-hustle-accent" />}
              title="Full Stack Website Development"
              description="Custom-built websites that actually convert, not just look pretty."
              delay={0}
            />
            
            <ServiceCard 
              icon={<Globe className="text-hustle-accent" />}
              title="Google My Business Setup & Management"
              description="Be seen where it matters most—locally and on the map."
              delay={100}
            />
            
            <ServiceCard 
              icon={<Settings className="text-hustle-accent" />}
              title="Business Strategy Consulting"
              description="Because tactics without a strategy? Useless. We help you zoom out before we zoom in."
              delay={200}
            />
            
            <ServiceCard 
              icon={<Wrench className="text-hustle-accent" />}
              title="Free Website Audit"
              description="Real talk: We'll tell you what's working, what's broken, and how to fix it—on the house."
              delay={300}
            />

            <ServiceCard 
              icon={<Smartphone className="text-hustle-accent" />}
              title="Social Media Marketing"
              description="Not just likes and shares. We build brand stories that get traction and drive action."
              delay={400}
            />

            <ServiceCard 
              icon={<Mail className="text-hustle-accent" />}
              title="Email Marketing"
              description="Inbox domination with campaigns that feel personal and perform like crazy."
              delay={500}
            />

            <ServiceCard 
              icon={<Target className="text-hustle-accent" />}
              title="Performance Marketing"
              description="Click, convert, repeat. Data-driven campaigns that stretch every dollar."
              delay={600}
            />

            <ServiceCard 
              icon={<PenTool className="text-hustle-accent" />}
              title="Content & Copywriting"
              description="Words that work. From landing pages to social captions, we make every line count."
              delay={700}
            />

            <ServiceCard 
              icon={<MessageSquare className="text-hustle-accent" />}
              title="Content Production"
              description="Photo, video, audio—we create content people stop scrolling for."
              delay={800}
            />
          </div>
        </div>
      </section>

      {/* The Hustle Difference */}
      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in animate-delay-300">
              <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-hustle-accent/30">
                <img 
                  src="/lovable-uploads/b9a1d15f-fc22-474f-a937-f8f37ef302e7.png" 
                  alt="Data Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <SectionHeader
                subtitle="The Hustle Difference"
                title="What Sets Us Apart"
                description={
                  <div className="space-y-4">
                    <p>
                      We're not here to sell you stuff you don't need. We're here to build something with you. We work fast, stay agile, and never settle. You bring the ambition—we'll bring the hustle.
                    </p>
                    <p>
                      Let's scale your brand the smart way.
                    </p>
                  </div>
                }
              />
              
              <div className="mt-8">
                <CTAButton 
                  text="Start Your Journey" 
                  to="/contact" 
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Ready to Write Your Success Story With Us?
            </h2>
            <p className="text-lg mb-8 text-gray-300 opacity-0 animate-fade-in animate-delay-100">
              Let's collaborate to take your business to new heights with our strategic digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-200">
              <CTAButton 
                text="Contact Us" 
                to="/contact"
                variant="white"
                size="lg"
              />
              <CTAButton 
                text="View Our Services" 
                to="/services"
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

// Service Card Component for the What We Do section
const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      className="bg-white p-8 rounded-lg shadow-sm border border-transparent hover:border-hustle-accent/10"
    >
      <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:bg-hustle-accent/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-hustle-light">
        {description}
      </p>
    </motion.div>
  );
};

export default About;
