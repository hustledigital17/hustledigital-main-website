
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Add body class to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

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
            <Button asChild size="sm" className="bg-hustle-accent hover:bg-hustle-accent/90 shadow-sm hover:shadow-md transition-all">
              <Link to="/contact" onClick={handleLinkClick}>Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 focus:outline-none relative z-50" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div 
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            
            {/* Menu content */}
            <motion.div 
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl z-40 md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex-1 overflow-y-auto py-20 px-6">
                <div className="flex flex-col space-y-6">
                  <Link 
                    to="/" 
                    className="text-lg font-medium border-b border-gray-100 pb-4"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-lg font-medium border-b border-gray-100 pb-4"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                  <Link 
                    to="/services" 
                    className="text-lg font-medium border-b border-gray-100 pb-4"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-lg font-medium border-b border-gray-100 pb-4"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                  <div className="pt-4">
                    <Button asChild className="w-full bg-hustle-accent hover:bg-hustle-accent/90 shadow-sm">
                      <Link to="/contact" onClick={handleLinkClick}>Book Appointment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
