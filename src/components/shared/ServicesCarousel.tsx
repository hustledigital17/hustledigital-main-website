import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ServiceCard from "@/components/shared/ServiceCard";
import { 
  Laptop, 
  Users, 
  TrendingUp, 
  BarChart, 
  Search, 
  MessageSquare,
  Mail,
  Code,
  LayoutGrid,
  Camera,
  Star
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ServicesCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (autoPlay) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, autoPlay]);

  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const services = [
    {
      title: "Full Stack Website Development",
      description: "Custom websites designed to convert visitors into customers. We build responsive, fast-loading sites with SEO fundamentals baked in.",
      icon: <Laptop size={28} />
    },
    {
      title: "Google My Business Setup & Management",
      description: "Maximize your local presence with optimized Google Business profiles that improve visibility and drive local customers.",
      icon: <LayoutGrid size={28} />
    },
    {
      title: "Business Strategy Consulting",
      description: "Strategic guidance to align your digital efforts with your business goals for maximum ROI and sustainable growth.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Free Website Audit",
      description: "Comprehensive analysis of your website's performance, SEO, usability, and conversion optimization opportunities.",
      icon: <Search size={28} />
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build engagement, strengthen brand loyalty, and drive conversions.",
      icon: <Users size={28} />
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads, drive sales, and build lasting customer relationships.",
      icon: <Mail size={28} />
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns focused on delivering measurable results and maximizing your marketing ROI.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Content & Copywriting",
      description: "Compelling content that tells your brand story, engages your audience, and drives action.",
      icon: <MessageSquare size={28} />
    },
    {
      title: "Content Production",
      description: "High-quality visual content that captures attention and communicates your brand message effectively.",
      icon: <Camera size={28} />
    },
    {
      title: "Review Collection & Management",
      description: "Proactive strategies to gather positive reviews and manage your online reputation across platforms.",
      icon: <Star size={28} />
    }
  ];

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Carousel
        className="w-full max-w-7xl mx-auto relative"
        setApi={setApi}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-4 md:pl-6 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-[280px]">
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={`animate-delay-${index * 100}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex items-center justify-center gap-6 mt-8">
          <CarouselPrevious 
            className="relative left-0 right-0 mx-0 bg-white hover:bg-hustle-accent hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-hustle-accent h-10 w-10"
          />
          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index 
                    ? 'bg-hustle-accent w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext 
            className="relative left-0 right-0 mx-0 bg-white hover:bg-hustle-accent hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-hustle-accent h-10 w-10"
          />
        </div>
      </Carousel>
    </motion.div>
  );
};

export default ServicesCarousel;
