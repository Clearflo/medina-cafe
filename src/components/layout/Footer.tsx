import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Google Maps URL for the restaurant by business name
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Medina+Cafe+%26+Grill+Sheesha+Lounge+Calgary";

  return (
    <footer className="bg-secondary-300 pt-10 sm:pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Layout: Logo on top, Contact and Hours side by side */}
        <div className="block md:hidden">
          {/* Logo Only */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <img 
                src="/images/adobe-express-sheesha1-icon.png" 
                alt="Medina Cafe Sheesha Logo" 
                className="w-7 h-7 object-contain"
              />
              <span className="font-heading text-xl sm:text-2xl font-semibold text-[#8B2C2C]">Medina Cafe</span>
            </div>
          </div>

          {/* Contact and Hours Side by Side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading text-[#8B2C2C]">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                  <a 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation underline"
                  >
                    1004 1 St SW, Calgary, AB T2R 1K4
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[#8B2C2C] flex-shrink-0" />
                  <a href="tel:+14032379002" className="text-xs text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation">(403)237-9002</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#8B2C2C] flex-shrink-0" />
                  <a href="mailto:info@medinacafe.com" className="text-xs text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation">info@medinacafe.com</a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4 font-heading text-[#8B2C2C]">Opening Hours</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Clock size={16} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Monday</p>
                    <p className="text-xs font-medium text-gray-600">4:00 PM - 2:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Tuesday - Thursday</p>
                    <p className="text-xs font-medium text-gray-600">2:00 PM - 2:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Friday - Saturday</p>
                    <p className="text-xs font-medium text-gray-600">2:00 PM - 3:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600">Sunday</p>
                    <p className="text-xs font-medium text-gray-600">2:00 PM - 2:00 AM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Original 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Logo Only */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/adobe-express-sheesha1-icon.png" 
                alt="Medina Cafe Sheesha Logo" 
                className="w-7 h-7 object-contain"
              />
              <span className="font-heading text-xl sm:text-2xl font-semibold text-[#8B2C2C]">Medina Cafe</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-[#8B2C2C]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation underline"
                >
                  1004 1 St SW, Calgary, AB T2R 1K4
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#8B2C2C] flex-shrink-0" />
                <a href="tel:+14032379002" className="text-sm text-gray-600 hover:text-[#8B2C2C] transition-colors touch-manipulation">(403)237-9002</a>
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
                  <p className="text-sm text-gray-600">Monday</p>
                  <p className="text-sm font-medium text-gray-600">4:00 PM - 2:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Tuesday - Thursday</p>
                  <p className="text-sm font-medium text-gray-600">2:00 PM - 2:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Friday - Saturday</p>
                  <p className="text-sm font-medium text-gray-600">2:00 PM - 3:00 AM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#8B2C2C] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Sunday</p>
                  <p className="text-sm font-medium text-gray-600">2:00 PM - 2:00 AM</p>
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