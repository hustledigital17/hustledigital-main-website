
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  number: string;
  delay?: string;
}

const WhyChooseUsCard = ({ title, description, icon, number, delay = "animate-delay-100" }: WhyChooseUsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-sm opacity-0 animate-fade-in ${delay} relative overflow-hidden group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 bg-hustle-accent/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black">{description}</p>
      
      {/* Animated number */}
      <motion.div 
        className="absolute -bottom-5 -right-5 text-hustle-accent/10 text-[120px] font-bold leading-none z-0 pointer-events-none"
        initial={{ opacity: 0.1, y: 20 }}
        animate={isHovered ? { opacity: 0.2, y: 0 } : { opacity: 0.1, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {number}
      </motion.div>
    </div>
  );
};

export default WhyChooseUsCard;
