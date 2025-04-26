import { Facebook, Instagram, Mail } from "lucide-react";
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
        href="https://www.facebook.com/share/1A5u8RB2yM/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-hustle-accent transition-colors"
      >
        <Facebook size={iconSize} className={iconClassName} />
      </a>
      <a
        href="https://www.instagram.com/_hustledigital_?igsh=MXFhb3JrbXV2OW1w"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram size={iconSize} className={iconClassName} />
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
