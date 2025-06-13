import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-50 bg-secondary-300 shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center py-2">
            <img 
              src="/images/medina_transparent_image.png" 
              alt="Medina Cafe Logo" 
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 hover:text-[#6B1D1D] ${
                    isActive ? 'text-[#6B1D1D] font-semibold' : 'text-[#8B2C2C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/menu"
              className="bg-secondary-400 hover:bg-secondary-500 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center justify-center"
            >
              Order Now
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8B2C2C] focus:outline-none p-2 touch-manipulation transition-colors duration-300"
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
            className="md:hidden bg-secondary-300 absolute top-full left-0 right-0 shadow-lg min-h-[calc(100vh-80px)] z-50"
          >
            <div className="container mx-auto py-8 px-6">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-xl font-medium py-4 transition-colors duration-200 hover:text-[#6B1D1D] ${
                        isActive ? 'text-[#6B1D1D] font-semibold' : 'text-[#8B2C2C]'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <NavLink
                  to="/menu"
                  className="bg-secondary-400 hover:bg-secondary-500 text-white py-4 rounded-lg text-center transition-all duration-300 font-medium text-xl mt-4"
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