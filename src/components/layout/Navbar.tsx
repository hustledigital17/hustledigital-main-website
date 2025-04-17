import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add body class to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.touchAction = '';
    };
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex items-center justify-between h-14 sm:h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <span className="text-lg sm:text-xl font-bold tracking-tight">
                Hustle Digital
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {['/', '/about', '/services', '/contact'].map((path, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                className="relative"
              >
                <Link 
                  to={path} 
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                    location.pathname === path ? 'text-primary' : ''
                  }`}
                  onClick={handleLinkClick}
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  {location.pathname === path && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 h-0.5 bg-primary bottom-[-4px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonLink 
                href="/contact"
                variant="primary"
                size="sm"
                onClick={handleLinkClick}
              >
                Book Appointment
              </ButtonLink>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="relative md:hidden z-[102] h-9 w-9 p-0 hover:bg-transparent focus:bg-transparent" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <React.Fragment>
            {/* Backdrop blur */}
            <motion.div 
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[101] touch-none md:hidden cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />
            
            {/* Menu content */}
            <motion.div 
              className="fixed inset-y-0 right-0 w-[min(85vw,400px)] bg-white shadow-xl z-[101] md:hidden flex flex-col overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300
              }}
            >
              {/* Menu Header */}
              <div className="relative h-16 sm:h-20 flex items-center justify-between px-6 border-b border-gray-100">
                <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Menu</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-10 w-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="flex flex-col py-6 px-6">
                  {[
                    { path: '/', label: 'Home', delay: 0 },
                    { path: '/about', label: 'About', delay: 0.1 },
                    { path: '/services', label: 'Services', delay: 0.2 },
                    { path: '/contact', label: 'Contact', delay: 0.3 }
                  ].map(({ path, label, delay }) => (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay,
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                      }}
                      className="relative mb-4"
                    >
                      <Link 
                        to={path} 
                        className={`flex items-center h-14 px-4 text-lg font-medium rounded-xl transition-all duration-300 ${
                          location.pathname === path 
                            ? 'text-primary bg-primary/5 shadow-sm' 
                            : 'text-gray-800 hover:bg-gray-50'
                        }`}
                        onClick={handleLinkClick}
                      >
                        {label}
                        {location.pathname === path && (
                          <motion.div
                            layoutId="mobile-navbar-indicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Menu Footer */}
              <motion.div 
                className="p-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ButtonLink 
                  href="/contact"
                  variant="primary"
                  fullWidth
                  size="lg"
                  className="rounded-xl shadow-lg shadow-primary/20"
                  onClick={handleLinkClick}
                >
                  Book Appointment
                </ButtonLink>
              </motion.div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
