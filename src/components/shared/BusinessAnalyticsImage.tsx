import React from "react";
import { motion } from "framer-motion";

const BusinessAnalyticsImage = () => {
  return (
    <div className="relative flex justify-center items-center">
      <motion.div 
        className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
      />
      <motion.div 
        className="relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.4
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 25 
          }
        }}
      >
        <motion.img
          src="/lovable-uploads/analytics-world-map.png"
          alt="Global Business Analytics"
          className="max-w-full h-auto object-contain"
          style={{
            maxHeight: "400px"
          }}
          initial={{ filter: "drop-shadow(0px 4px 8px rgba(234, 56, 76, 0))" }}
          animate={{ filter: "drop-shadow(0px 4px 8px rgba(234, 56, 76, 0.2))" }}
          whileHover={{ 
            filter: "drop-shadow(0px 8px 16px rgba(234, 56, 76, 0.4))",
          }}
          transition={{
            filter: { duration: 0.3 }
          }}
        />
      </motion.div>
    </div>
  );
};

export default BusinessAnalyticsImage;
