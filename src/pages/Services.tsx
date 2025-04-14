
import { Code, LayoutGrid, BriefcaseIcon, Search, Users, Mail, TrendingUp, FileText, Camera, Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";

// Service data
const services = [
  {
    id: 1,
    icon: <Code size={32} />,
    title: "Full Stack Website Development",
    description: "Custom websites designed to convert visitors into customers. We build responsive, fast-loading sites with SEO fundamentals baked in.",
    features: [
      "Responsive design for all devices",
      "Content management systems",
      "Custom functionality and integrations",
      "SEO-optimized architecture"
    ]
  },
  {
    id: 2,
    icon: <LayoutGrid size={32} />,
    title: "Google My Business Setup & Management",
    description: "Maximize your local presence with optimized Google Business profiles that improve visibility and drive local customers.",
    features: [
      "Profile optimization",
      "Photo and content management",
      "Review management",
      "Regular updates and posts"
    ]
  },
  {
    id: 3,
    icon: <BriefcaseIcon size={32} />,
    title: "Business Strategy Consulting",
    description: "Strategic guidance to align your digital efforts with your business goals for maximum ROI and sustainable growth.",
    features: [
      "Digital transformation roadmaps",
      "Competitive analysis",
      "Growth strategy development",
      "Performance tracking frameworks"
    ]
  },
  {
    id: 4,
    icon: <Search size={32} />,
    title: "Free Website Audit",
    description: "Comprehensive analysis of your website's performance, SEO, usability, and conversion optimization opportunities.",
    features: [
      "Technical SEO review",
      "Content quality assessment",
      "User experience evaluation",
      "Actionable recommendations"
    ]
  },
  {
    id: 5,
    icon: <Users size={32} />,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that build engagement, strengthen brand loyalty, and drive conversions.",
    features: [
      "Platform-specific strategies",
      "Content calendar development",
      "Community management",
      "Paid social campaigns"
    ]
  },
  {
    id: 6,
    icon: <Mail size={32} />,
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture leads, drive sales, and build lasting customer relationships.",
    features: [
      "List building strategies",
      "Campaign design and copywriting",
      "Automation sequences",
      "Performance analytics"
    ]
  },
  {
    id: 7,
    icon: <TrendingUp size={32} />,
    title: "Performance Marketing",
    description: "Data-driven campaigns focused on delivering measurable results and maximizing your marketing ROI.",
    features: [
      "PPC campaign management",
      "Conversion rate optimization",
      "Retargeting strategies",
      "ROI tracking and reporting"
    ]
  },
  {
    id: 8,
    icon: <FileText size={32} />,
    title: "Content & Copywriting",
    description: "Compelling content that tells your brand story, engages your audience, and drives action.",
    features: [
      "Website copywriting",
      "Blog content creation",
      "SEO content strategy",
      "Brand messaging development"
    ]
  },
  {
    id: 9,
    icon: <Camera size={32} />,
    title: "Content Production",
    description: "High-quality visual content that captures attention and communicates your brand message effectively.",
    features: [
      "Photography",
      "Video production",
      "Graphic design",
      "Social media assets"
    ]
  },
  {
    id: 10,
    icon: <Star size={32} />,
    title: "Review Collection & Management",
    description: "Proactive strategies to gather positive reviews and manage your online reputation across platforms.",
    features: [
      "Review solicitation campaigns",
      "Response management",
      "Reputation monitoring",
      "Negative review mitigation"
    ]
  }
];

const Services = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-hustle-accent font-medium mb-3 opacity-0 animate-fade-in">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-100">
              Strategic Digital Solutions for Growth
            </h1>
            <p className="text-xl text-hustle-light mb-8 opacity-0 animate-fade-in animate-delay-200">
              We offer a comprehensive suite of digital marketing services designed to help your business thrive in the digital landscape.
            </p>
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <CTAButton 
                text="Book a Free Consultation" 
                to="/contact" 
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="What We Offer"
            title="Comprehensive Digital Marketing Services"
            description="Each service is designed to address specific aspects of your digital presence and overall business growth."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`opacity-0 animate-fade-in animate-delay-${index % 5}00`}
              >
                <div className="flex flex-col h-full bg-white p-8 rounded-xl border border-gray-100 hover:border-hustle-accent/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-hustle-accent mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-hustle-light mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 text-hustle-accent">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.66674 10.1147L12.7947 3.98602L13.7381 4.92935L6.66674 12.0007L2.42407 7.75802L3.36741 6.81468L6.66674 10.1147Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <span className="text-hustle-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            subtitle="Our Approach"
            title="How We Deliver Results"
            description="Our proven process ensures we deliver consistent value and results for every client."
            center={true}
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center opacity-0 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hustle-accent">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-300">We take time to understand your business, goals, audience, and competitive landscape.</p>
            </div>
            
            <div className="text-center opacity-0 animate-fade-in animate-delay-100">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hustle-accent">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-gray-300">We develop a tailored strategy with clear objectives, tactics, and success metrics.</p>
            </div>
            
            <div className="text-center opacity-0 animate-fade-in animate-delay-200">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hustle-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-gray-300">Our team brings the strategy to life with expert implementation and attention to detail.</p>
            </div>
            
            <div className="text-center opacity-0 animate-fade-in animate-delay-300">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-hustle-accent">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-300">We continually analyze performance data to refine and improve results over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
              Ready to Elevate Your Digital Presence?
            </h2>
            <p className="text-lg mb-8 text-hustle-light opacity-0 animate-fade-in animate-delay-100">
              Schedule a free consultation to discuss how our services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animate-delay-200">
              <CTAButton 
                text="Book a Free Audit" 
                to="/contact"
                size="lg"
              />
              <CTAButton 
                text="Contact Us" 
                to="/contact"
                variant="outline"
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
