import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface SocialMediaLinksProps {
  className?: string;
  iconSize?: number;
  iconClassName?: string;
  showEmail?: boolean;
}

const SocialMediaLinks = ({ 
  className = "",
  iconSize = 20,
  iconClassName = "text-hustle-accent hover:text-hustle-accent/80 transition-colors",
  showEmail = false
}: SocialMediaLinksProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href="https://facebook.com/hustledigital"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook size={iconSize} className={iconClassName} />
      </a>
      <a
        href="https://instagram.com/hustledigital"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram size={iconSize} className={iconClassName} />
      </a>
      <a
        href="https://linkedin.com/company/hustledigital"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} className={iconClassName} />
      </a>
      {showEmail && (
        <a
          href="mailto:hustledigi@gmail.com"
          aria-label="Email"
        >
          <Mail size={iconSize} className={iconClassName} />
        </a>
      )}
    </div>
  );
};

export default SocialMediaLinks;
