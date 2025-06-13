import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-300 pt-10 sm:pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Only */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/Adobe Express - sheesha icon.png" 
                alt="Medina Cafe Sheesha Logo" 
                className="w-7 h-7 object-contain"
              />
              <span className="font-heading text-xl sm:text-2xl font-semibold text-[#8B2C2C]">Medina</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-[#8B2C2C]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-600">123 Calgary Avenue, Calgary, AB T2P 2Y3</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#8B2C2C] flex-shrink-0" />
                <a href="tel:+14031234567" className="text-sm text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation">(403) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#8B2C2C] flex-shrink-0" />
                <a href="mailto:info@medinacafe.com" className="text-sm text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation">info@medinacafe.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-[#8B2C2C]">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Monday - Thursday</p>
                  <p className="text-sm font-medium text-gray-600">11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Friday - Saturday</p>
                  <p className="text-sm font-medium text-gray-600">11:00 AM - 1:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Sunday</p>
                  <p className="text-sm font-medium text-gray-600">12:00 PM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600/30 mt-8 sm:mt-10 pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600/80">
            © {currentYear} Medina Cafe & Grill Sheesha Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;