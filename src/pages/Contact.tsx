
import { useState } from "react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";

const services = [
  { value: "website-development", label: "Full Stack Website Development" },
  { value: "google-business", label: "Google My Business Setup & Management" },
  { value: "business-strategy", label: "Business Strategy Consulting" },
  { value: "website-audit", label: "Free Website Audit" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "email-marketing", label: "Email Marketing" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "content-copywriting", label: "Content & Copywriting" },
  { value: "content-production", label: "Content Production" },
  { value: "review-management", label: "Review Collection & Management" }
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form would be here if this was a real form
    }, 1500);
  };
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-hustle-accent font-medium mb-3 opacity-0 animate-fade-in">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-100">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-hustle-light mb-8 opacity-0 animate-fade-in animate-delay-200">
              Have questions or ready to start? Reach out to us and let's explore how we can help grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <SectionHeader
                subtitle="Get in Touch"
                title="We're Here to Help"
                description="Reach out to us through any of these channels, or fill out the form to get started."
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-200">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-hustle-light">hello@hustledigital.com</p>
                    <p className="text-hustle-light">support@hustledigital.com</p>
                  </div>
                </div>
                
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-300">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-hustle-light">+1 (555) 123-4567</p>
                    <p className="text-hustle-light">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-400">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-hustle-light">
                      123 Marketing Street<br />
                      Digital City, DC 10101<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-500">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-hustle-light">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 opacity-0 animate-fade-in animate-delay-500">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton 
                    text="Book a Free Audit" 
                    to="#contact-form" 
                    variant="black"
                  />
                  <CTAButton 
                    text="Schedule a Strategy Call" 
                    to="#contact-form" 
                    variant="outline"
                  />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <div id="contact-form" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FormLabel htmlFor="name">Full Name</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="John Doe" required />
                      </FormControl>
                    </div>
                    
                    <div>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </FormControl>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <FormLabel htmlFor="phone">Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </FormControl>
                    </div>
                    
                    <div>
                      <FormLabel htmlFor="service">Service of Interest</FormLabel>
                      <Select>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project or inquiry..." 
                        rows={5}
                        required
                      />
                    </FormControl>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full bg-hustle-accent hover:bg-hustle-accent/90"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Find Us"
              description="Visit our office or schedule a virtual meeting - we're flexible and ready to assist you."
              center={true}
            />
            
            <div className="aspect-video mt-8 rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in animate-delay-200">
              {/* This would be a real map in a production website */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
