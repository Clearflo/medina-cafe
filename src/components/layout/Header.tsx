import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page (which has a dark hero background)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Prevent body scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
  ];

  // Determine header background and text colors based on page and scroll state
  const getHeaderStyles = () => {
    if (isHomePage) {
      // Home page: transparent when not scrolled, white when scrolled
      return scrolled
        ? 'bg-white shadow-md py-2'
        : 'bg-transparent backdrop-blur-sm py-4';
    } else {
      // Other pages: always white background
      return 'bg-white shadow-md py-2';
    }
  };

  const getTextColor = () => {
    if (isHomePage) {
      // Home page: white text when not scrolled, dark when scrolled
      return scrolled ? 'text-accent-700' : 'text-white';
    } else {
      // Other pages: always dark text
      return 'text-accent-700';
    }
  };

  const getLogoFilter = () => {
    if (isHomePage) {
      // Home page: inverted when not scrolled, normal when scrolled
      return scrolled ? 'none' : 'invert(1) brightness(2) contrast(1)';
    } else {
      // Other pages: always normal colors
      return 'none';
    }
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${getHeaderStyles()}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 py-2">
            <img 
              src="/images/Adobe Express - sheesha icon.png" 
              alt="Medina Cafe Sheesha Logo" 
              className="w-8 h-8 object-contain transition-all duration-300"
              style={{
                filter: getLogoFilter()
              }}
            />
            <span className={`font-heading text-xl md:text-2xl font-semibold ${getTextColor()} transition-colors duration-300`}>
              Medina Cafe
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 hover:text-primary-700 ${
                    isActive ? 'text-primary-700' : getTextColor()
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/menu"
              className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center justify-center"
            >
              Order Now
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${getTextColor()} focus:outline-none p-2 touch-manipulation transition-colors duration-300`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg min-h-[calc(100vh-80px)] z-50"
          >
            <div className="container mx-auto py-8 px-6">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-xl font-medium py-4 transition-colors duration-200 hover:text-primary-700 ${
                        isActive ? 'text-primary-700' : 'text-accent-700'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/menu"
                  className="bg-primary-700 hover:bg-primary-800 text-white py-4 rounded-lg text-center transition-all duration-300 font-medium text-xl mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Order Now
                </NavLink>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;