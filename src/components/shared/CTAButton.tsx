
import { Link } from "react-router-dom";
import { Button, ButtonProps } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends ButtonProps {
  text: string;
  to: string;
  icon?: boolean;
  variant?: "default" | "outline" | "black" | "white";
}

const CTAButton = ({ 
  text, 
  to, 
  icon = true, 
  variant = "default",
  className,
  ...props 
}: CTAButtonProps) => {
  let buttonClass = "";
  
  switch (variant) {
    case "black":
      buttonClass = "bg-black text-white hover:bg-black/90";
      break;
    case "white":
      buttonClass = "bg-white text-black hover:bg-white/90";
      break;
    case "outline":
      buttonClass = "bg-transparent border border-current text-current hover:bg-hustle-muted/10";
      break;
    default:
      buttonClass = "bg-hustle-accent text-white hover:bg-hustle-accent/90";
  }
  
  return (
    <Button 
      asChild 
      className={`rounded-md font-medium ${buttonClass} ${className}`}
      {...props}
    >
      <Link to={to} className="inline-flex items-center">
        {text}
        {icon && <ArrowRight size={16} className="ml-2" />}
      </Link>
    </Button>
  );
};

export default CTAButton;
