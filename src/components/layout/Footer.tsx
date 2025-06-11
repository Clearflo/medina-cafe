import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Clock, Mail, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-700 text-white pt-10 sm:pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee size={28} className="text-secondary-300" />
              <span className="font-heading text-xl sm:text-2xl font-semibold">Medina</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Experience authentic Middle Eastern cuisine and premium sheesha in a welcoming atmosphere at Calgary's favorite lounge.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="text-gray-300 hover:text-secondary-300 transition-colors p-2 touch-manipulation"
              >
                <Facebook size={22} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="text-gray-300 hover:text-secondary-300 transition-colors p-2 touch-manipulation"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-secondary-300 transition-colors block py-1 touch-manipulation">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-gray-300 hover:text-secondary-300 transition-colors block py-1 touch-manipulation">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-secondary-300 transition-colors block py-1 touch-manipulation">About Us</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary-300 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">123 Calgary Avenue, Calgary, AB T2P 2Y3</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary-300 flex-shrink-0" />
                <a href="tel:+14031234567" className="text-sm text-gray-300 hover:text-secondary-300 transition-colors touch-manipulation">(403) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary-300 flex-shrink-0" />
                <a href="mailto:info@medinacafe.com" className="text-sm text-gray-300 hover:text-secondary-300 transition-colors touch-manipulation">info@medinacafe.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Monday - Thursday</p>
                  <p className="text-sm font-medium">11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Friday - Saturday</p>
                  <p className="text-sm font-medium">11:00 AM - 1:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Sunday</p>
                  <p className="text-sm font-medium">12:00 PM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} Medina Cafe & Grill Sheesha Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;