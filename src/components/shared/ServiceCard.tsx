import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: string;
}

const ServiceCard = ({ title, description, icon, delay = "animate-delay-100" }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden group border border-gray-200 hover:border-hustle-accent hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-gray-50/50">
        <CardHeader className="pb-2 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-hustle-accent/5 rounded-bl-[48px] transform translate-x-10 -translate-y-10 group-hover:bg-hustle-accent/10 transition-colors duration-300"></div>
          <div className="flex items-start gap-4">
            <motion.div 
              className="text-hustle-accent relative z-10 bg-white/80 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-white transition-all duration-300 flex-shrink-0"
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg font-semibold relative z-10 group-hover:text-hustle-accent transition-colors duration-300 line-clamp-2">{title}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-80px)]">
          <CardDescription className="text-sm text-gray-600 flex-grow line-clamp-3">{description}</CardDescription>
          <Link 
            to="/services" 
            className="inline-flex items-center text-sm font-medium text-hustle-accent hover:text-hustle-accent/80 mt-4 group/link"
          >
            <span className="relative">
              Learn more
              <motion.span 
                className="absolute -bottom-px left-0 w-full h-px bg-hustle-accent/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="ml-1.5"
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
