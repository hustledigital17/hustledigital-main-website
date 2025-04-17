import React from "react";
import { ButtonLink } from "./button-link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  variant = "primary",
  className,
  onClick,
  children
}) => {
  return (
    <ButtonLink
      href={href}
      variant={variant === "primary" ? "primary" : "outline"}
      size="lg"
      fullWidth
      showArrow
      className={cn(
        "rounded-full font-semibold",
        variant === "primary" 
          ? "bg-primary text-white hover:bg-primary/90" 
          : "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </ButtonLink>
  );
}; 