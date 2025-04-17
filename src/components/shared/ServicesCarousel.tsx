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
  Code
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
      description: "Custom websites designed for performance, conversions, and exceptional user experience.",
      icon: <Laptop size={28} />
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build engagement and strengthen brand loyalty.",
      icon: <Users size={28} />
    },
    {
      title: "Business Strategy Consulting",
      description: "Expert guidance to align your digital efforts with your business objectives.",
      icon: <TrendingUp size={28} />
    },
    {
      title: "Data Analytics",
      description: "Transform your data into valuable insights that drive better business decisions.",
      icon: <BarChart size={28} />
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more qualified traffic to your website.",
      icon: <Search size={28} />
    },
    {
      title: "Content Creation",
      description: "Engaging, SEO-optimized content that resonates with your audience and drives conversions.",
      icon: <MessageSquare size={28} />
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive repeat business.",
      icon: <Mail size={28} />
    },
    {
      title: "App Development",
      description: "Custom mobile and web applications that solve real business problems.",
      icon: <Code size={28} />
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
