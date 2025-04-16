import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

// Create a custom type for button variants
type CTAVariant = "default" | "outline" | "black" | "white";
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
  const handleClick = () => {
    // Scroll to top when link is clicked with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <Button asChild className={`rounded-md font-medium ${buttonClass} ${className || ""}`} size={size} {...props}>
      
    </Button>;
};
export default CTAButton;