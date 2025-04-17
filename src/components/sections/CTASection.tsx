import React from "react";
import { CTAButton } from "@/components/ui/cta-button";

export const CTASection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center gap-4 max-w-[440px] mx-auto">
        <CTAButton 
          href="/faqs" 
          variant="outline"
          className="bg-white w-full"
        >
          View All FAQs
        </CTAButton>
        <CTAButton 
          href="/contact" 
          variant="primary"
          className="w-full"
        >
          Book a Free Consultation
        </CTAButton>
      </div>
    </div>
  );
}; 