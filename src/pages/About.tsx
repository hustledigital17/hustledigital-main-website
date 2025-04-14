
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="pt-20 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
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
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Hustle Digital Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-hustle-accent text-white p-4 rounded-lg shadow-lg md:max-w-xs">
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
            <div className="bg-white p-8 rounded-lg shadow-sm opacity-0 animate-fade-in">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-hustle-light">
                We continuously explore new technologies and strategies to keep our clients ahead of the curve.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-100">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <Target className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Results-Focused</h3>
              <p className="text-hustle-light">
                Every strategy we implement is designed with clear objectives and measurable outcomes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-200">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-hustle-light">
                We believe in building collaborative relationships with our clients that go beyond just service delivery.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm opacity-0 animate-fade-in animate-delay-300">
              <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-hustle-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-hustle-light">
                We hold ourselves to the highest standards in every aspect of our work.
              </p>
            </div>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Digital Marketing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Web Development" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Social Media Strategy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Content Creation" 
                    className="w-full h-full object-cover"
                  />
                </div>
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

export default About;
