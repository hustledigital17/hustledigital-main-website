
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <span className="text-xl font-bold tracking-tight">
              Hustle Digital
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-hustle-accent transition-colors" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-hustle-accent transition-colors" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-hustle-accent transition-colors" onClick={handleLinkClick}>
              Services
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-hustle-accent transition-colors" onClick={handleLinkClick}>
              Contact
            </Link>
            <Button asChild size="sm" className="bg-hustle-accent hover:bg-hustle-accent/90">
              <Link to="/contact" onClick={handleLinkClick}>Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-4 px-4 space-y-1">
            <Link 
              to="/" 
              className="block py-3 text-base font-medium border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-3 text-base font-medium border-b border-gray-100"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block py-3 text-base font-medium border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 text-base font-medium"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full bg-hustle-accent hover:bg-hustle-accent/90">
                <Link to="/contact" onClick={handleLinkClick}>Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
