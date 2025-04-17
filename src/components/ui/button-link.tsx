import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  variant?: "default" | "primary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  variant = "default",
  size = "default",
  fullWidth = false,
  showArrow = false,
  className,
  onClick,
  children
}) => {
  const baseStyles = {
    default: "bg-primary text-white hover:bg-primary/90",
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary/10"
  };

  const sizeStyles = {
    default: "h-[50px] min-w-[200px] px-6 text-base",
    sm: "h-[40px] min-w-[160px] px-4 text-sm",
    lg: "h-[60px] min-w-[240px] px-8 text-lg"
  };

  return (
    <Button
      asChild
      className={cn(
        "font-medium transition-all duration-300 rounded-full",
        baseStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        "flex items-center justify-center",
        className
      )}
    >
      <Link 
        to={href} 
        onClick={onClick}
        className="flex items-center justify-center gap-2 w-full h-full"
      >
        {children}
        {showArrow && <ArrowRight className="h-5 w-5 ml-2 flex-shrink-0" />}
      </Link>
    </Button>
  );
}; 