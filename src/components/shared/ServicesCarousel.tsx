
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

const ServicesCarousel = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (autoPlay) {
        api.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <Carousel
      className="w-full max-w-6xl mx-auto"
      setApi={setApi}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="Full Stack Website Development"
            description="Custom websites designed for performance, conversions, and exceptional user experience."
            icon={<Laptop size={28} />}
          />
        </CarouselItem>
        
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="Social Media Marketing"
            description="Strategic social media campaigns that build engagement and strengthen brand loyalty."
            icon={<Users size={28} />}
          />
        </CarouselItem>
        
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="Business Strategy Consulting"
            description="Expert guidance to align your digital efforts with your business objectives."
            icon={<TrendingUp size={28} />}
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="Data Analytics"
            description="Transform your data into valuable insights that drive better business decisions."
            icon={<BarChart size={28} />}
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="SEO Optimization"
            description="Improve your search engine rankings and drive more qualified traffic to your website."
            icon={<Search size={28} />}
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="Content Creation"
            description="Engaging, SEO-optimized content that resonates with your audience and drives conversions."
            icon={<MessageSquare size={28} />}
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="Email Marketing"
            description="Targeted email campaigns that nurture leads and drive repeat business."
            icon={<Mail size={28} />}
          />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <ServiceCard 
            title="App Development"
            description="Custom mobile and web applications that solve real business problems."
            icon={<Code size={28} />}
          />
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="static transform-none mx-2" />
        <CarouselNext className="static transform-none mx-2" />
      </div>
    </Carousel>
  );
};

export default ServicesCarousel;
