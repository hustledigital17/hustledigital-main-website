
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

// Create a custom type for button variants
type CTAVariant = "default" | "outline" | "black" | "white" | "purple";
interface CTAButtonProps {
  text: string;
  to: string;
  icon?: boolean;
  variant?: CTAVariant;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}
const CTAButton = ({
  text,
  to,
  icon = true,
  variant = "default",
  className,
  size = "default",
  ...props
}: CTAButtonProps) => {
  let buttonClass = "";
  switch (variant) {
    case "black":
      buttonClass = "bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg";
      break;
    case "white":
      buttonClass = "bg-white text-black hover:bg-white/90 shadow-md hover:shadow-lg";
      break;
    case "purple":
      buttonClass = "bg-[#9b30f5] text-white hover:bg-[#9b30f5]/90 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out";
      break;
    case "outline":
      buttonClass = "bg-transparent border border-current text-current hover:bg-hustle-muted/10 hover:border-opacity-70";
      break;
    default:
      buttonClass = "bg-hustle-accent text-white hover:bg-hustle-accent/90 shadow-md hover:shadow-lg";
  }
  
  const handleClick = () => {
    // Scroll to top when link is clicked with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Button 
      asChild 
      className={`
        rounded-xl 
        font-medium 
        px-6 
        py-3 
        text-base 
        tracking-wider 
        transition-all 
        duration-300 
        ease-in-out 
        hover:-translate-y-1 
        hover:scale-[1.02] 
        ${buttonClass} 
        ${className || ""} 
      `} 
      size={size} 
      {...props}
    >
      <Link to={to} onClick={handleClick} className="flex items-center justify-center gap-2">
        {text}
        {icon && <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </Link>
    </Button>
  );
};

export default CTAButton;
