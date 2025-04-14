
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
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Card className={`h-full overflow-hidden group border border-gray-200 hover:border-hustle-accent/50 hover:shadow-lg transition-all duration-300`}>
        <CardHeader className="pb-2 relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-hustle-accent/5 rounded-bl-full transform translate-x-8 -translate-y-8"></div>
          <motion.div 
            className="mb-3 text-hustle-accent relative z-10"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl relative z-10">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4 text-black">{description}</CardDescription>
          <Link 
            to="/services" 
            className="inline-flex items-center text-sm font-medium text-hustle-accent group-hover:underline"
          >
            Learn more 
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={16} className="ml-1" />
            </motion.div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
