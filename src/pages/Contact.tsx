import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Calendar, Clock12 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "@/components/shared/CTAButton";
import SocialMediaLinks from "@/components/shared/SocialMediaLinks";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const services = [{
  value: "website-development",
  label: "Full Stack Website Development"
}, {
  value: "google-business",
  label: "Google My Business Setup & Management"
}, {
  value: "business-strategy",
  label: "Business Strategy Consulting"
}, {
  value: "website-audit",
  label: "Free Website Audit"
}, {
  value: "social-media",
  label: "Social Media Marketing"
}, {
  value: "email-marketing",
  label: "Email Marketing"
}, {
  value: "performance-marketing",
  label: "Performance Marketing"
}, {
  value: "content-copywriting",
  label: "Content & Copywriting"
}, {
  value: "content-production",
  label: "Content Production"
}, {
  value: "review-management",
  label: "Review Collection & Management"
}];
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});
type ContactFormValues = z.infer<typeof formSchema>;
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });
  const onSubmit = (data: ContactFormValues) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
      form.reset();
    }, 1500);
  };
  return <div className="pt-20 min-h-screen">
      <section className="py-16 md:py-20 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-hustle-accent font-medium mb-3 opacity-0 animate-fade-in">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in animate-delay-100">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-black mb-8 opacity-0 animate-fade-in animate-delay-200">
              Have questions or ready to start? Reach out to us and let's explore how we can help grow your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader subtitle="Get in Touch" title="We're Here to Help" description="Reach out to us through any of these channels, or fill out the form to get started." />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-200">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-black">
                      <a href="mailto:hustledigi@gmail.com" className="hover:text-hustle-accent transition-colors">
                        hustledigi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-300">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-black">+91 93951 85673 / +91 98642 30603</p>
                  </div>
                </div>
                
                
                
                <div className="flex items-start opacity-0 animate-fade-in animate-delay-500">
                  <div className="mr-4 p-3 rounded-full bg-hustle-accent/10 text-hustle-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-black">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              
              
              <div className="mt-10 opacity-0 animate-fade-in animate-delay-500">
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton text="Book a Free Consultation" to="#contact-form" variant="black" />
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <div id="contact-form" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="name" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="email" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="phone" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      
                      <FormField control={form.control} name="service" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Service of Interest</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map(service => <SelectItem key={service.value} value={service.value}>
                                    {service.label}
                                  </SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                    </div>
                    
                    <FormField control={form.control} name="message" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your project or inquiry..." rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    
                    <Button type="submit" className="w-full bg-hustle-accent hover:bg-hustle-accent/90" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-hustle-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader subtitle="Ready To Start?" title="Take Action Today" description="Schedule a personalized session with our digital experts to explore how we can elevate your brand." center={true} />
            
            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center max-w-xs w-full transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <div className="p-4 bg-hustle-accent/10 rounded-full mb-4">
                  <Calendar size={28} className="text-hustle-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-hustle-light text-center mb-6">Get expert advice on your digital marketing strategy.</p>
                <CTAButton text="Book Now" to="#contact-form" variant="black" size="sm" />
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;