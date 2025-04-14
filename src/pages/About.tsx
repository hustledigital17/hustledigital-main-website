import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";
import { Award, Target, Users, Zap } from "lucide-react";

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
                We are Hustle Digital
              </h1>
              <p className="text-xl text-hustle-light mb-6 opacity-0 animate-fade-in animate-delay-200">
                A team of digital marketing experts dedicated to transforming businesses with strategic digital solutions.
              </p>
              <p className="mb-8 text-hustle-light opacity-0 animate-fade-in animate-delay-300">
                Founded with a passion for helping businesses thrive in the digital landscape, Hustle Digital combines technical expertise, creative thinking, and data-driven strategies to deliver exceptional results for our clients.
              </p>
              <div className="opacity-0 animate-fade-in animate-delay-400">
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

      {/* Our Values */}
      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="Our core principles guide everything we do and shape how we work with our clients."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <ValueCard 
              icon={<Zap className="text-hustle-accent" />}
              title="Innovation"
              description="We continuously explore new technologies and strategies to keep our clients ahead of the curve."
              delay={0}
            />
            
            <ValueCard 
              icon={<Target className="text-hustle-accent" />}
              title="Results-Focused"
              description="Every strategy we implement is designed with clear objectives and measurable outcomes."
              delay={100}
            />
            
            <ValueCard 
              icon={<Users className="text-hustle-accent" />}
              title="Partnership"
              description="We believe in building collaborative relationships with our clients that go beyond just service delivery."
              delay={200}
            />
            
            <ValueCard 
              icon={<Award className="text-hustle-accent" />}
              title="Excellence"
              description="We hold ourselves to the highest standards in every aspect of our work."
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                subtitle="Our Story"
                title="From Vision to Reality"
                description="The journey that made us who we are today."
              />
              
              <div className="space-y-6 text-hustle-light">
                <p className="opacity-0 animate-fade-in animate-delay-200">
                  Hustle Digital was born from a simple observation: many businesses were struggling to navigate the complexities of digital marketing while staying focused on their core operations.
                </p>
                
                <p className="opacity-0 animate-fade-in animate-delay-300">
                  Founded by a team of digital marketing veterans with experience across various industries, we set out to create an agency that delivers not just services, but true business transformation.
                </p>
                
                <p className="opacity-0 animate-fade-in animate-delay-400">
                  Today, we're proud to have helped dozens of businesses across sectors achieve significant growth through targeted digital strategies that align with their unique goals and challenges.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in animate-delay-300">
              <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-hustle-accent/30">
                <img 
                  src="/lovable-uploads/a01c26e3-eb4c-41b0-a94f-631d18c06121.png" 
                  alt="Data Analysis and Growth" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Our Expertise"
            title="Digital Analytics Specialists"
            description="We leverage data-driven insights to transform your business performance."
            center={true}
          />
          
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-2/5 opacity-0 animate-fade-in animate-delay-200">
              <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-hustle-accent/30">
                <img 
                  src="/lovable-uploads/b9a1d15f-fc22-474f-a937-f8f37ef302e7.png" 
                  alt="Data Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 lg:w-2/5 space-y-6 opacity-0 animate-fade-in animate-delay-300">
              <h3 className="text-2xl md:text-3xl font-semibold">Analytics That Drive Results</h3>
              <p className="text-hustle-light">
                Our team specializes in translating complex data into actionable business insights. We help you understand your audience behavior, optimize your marketing spend, and identify new growth opportunities.
              </p>
              <ul className="space-y-3 text-hustle-light">
                <li className="flex items-start">
                  <div className="w-6 h-6 mr-2 rounded-full bg-hustle-accent/10 flex items-center justify-center">
                    <span className="text-hustle-accent font-bold">✓</span>
                  </div>
                  <span>Comprehensive campaign tracking and analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 mr-2 rounded-full bg-hustle-accent/10 flex items-center justify-center">
                    <span className="text-hustle-accent font-bold">✓</span>
                  </div>
                  <span>Custom dashboard development for real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 mr-2 rounded-full bg-hustle-accent/10 flex items-center justify-center">
                    <span className="text-hustle-accent font-bold">✓</span>
                  </div>
                  <span>Data-driven strategy adjustments for maximum ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modified to remove whitespace */}
      <section className="py-16 bg-black text-white mb-0">
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

// Value Card Component for the Values section
const ValueCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-${delay} transform transition-all duration-500 hover:shadow-lg hover:shadow-hustle-accent/10 hover:-translate-y-1`}>
      <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:bg-hustle-accent/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-hustle-light">
        {description}
      </p>
    </div>
  );
};

export default About;
