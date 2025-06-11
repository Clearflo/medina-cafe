import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Coffee, Award, Utensils, Info, AlertTriangle, Facebook, Instagram } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import { businessInfo } from '../utils/constants';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  const features = [
    {
      icon: <Coffee className="text-primary-700" size={24} />,
      title: 'Premium Sheesha',
      description: 'We offer top-quality sheesha with a wide variety of flavors to choose from.'
    },
    {
      icon: <Utensils className="text-primary-700\" size={24} />,
      title: 'Authentic Cuisine',
      description: 'Our chefs prepare authentic Middle Eastern dishes using traditional recipes.'
    },
    {
      icon: <Users className="text-primary-700\" size={24} />,
      title: 'Welcoming Atmosphere',
      description: 'A cozy space where friends and family can gather and enjoy good food.'
    },
    {
      icon: <Award className="text-primary-700\" size={24} />,
      title: 'Quality Service',
      description: 'Our dedicated staff ensures you have a memorable dining experience.'
    }
  ];

  return (
    <div className="pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SectionHeading 
            title="About Us" 
            subtitle="Learn more about Medina Cafe & Grill Sheesha Lounge"
            centered
            className="mt-4 sm:mt-8"
          />
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-8 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-md h-[300px] sm:h-auto"
          >
            <img 
              src="https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-md w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-3 sm:mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-3 sm:mb-4">
              Established in 2015, Medina Cafe & Grill was born from a passion for authentic Middle Eastern and Turkish cuisine and a desire to create a welcoming space for the Calgary community. Our founder, Ahmed Medina, brought his family recipes from Lebanon to share the rich culinary traditions of the Middle East.
            </p>
            <p className="text-gray-600 mb-3 sm:mb-4">
              What began as a small cafe has grown into a beloved destination for both locals and visitors seeking authentic flavors and a relaxing sheesha experience. Our commitment to quality and tradition has remained unwavering throughout our journey.
            </p>
            <p className="text-gray-600">
              Today, we continue to serve our community with the same passion and dedication, offering a taste of the Middle East in the heart of Calgary. Our menu features time-honored recipes prepared with the finest ingredients, and our sheesha selection is carefully curated to provide an exceptional experience.
            </p>
          </motion.div>
        </div>

        {/* Restaurant Concept */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-12 sm:mt-16 bg-accent-50 p-5 sm:p-6 md:p-8 rounded-lg"
        >
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-3 sm:mb-4">
            Our Concept
          </h3>
          <p className="text-gray-600 mb-3 sm:mb-4">
            Medina Cafe & Grill Sheesha Lounge brings together the best of Middle Eastern and Turkish cuisine with a premium sheesha experience. We've created a space where traditional flavors meet modern dining in a comfortable, welcoming atmosphere.
          </p>
          <p className="text-gray-600">
            Our concept revolves around creating an authentic experience that transports our guests to the vibrant streets of Istanbul, Beirut, and Cairo. From the aromatic spices in our dishes to the carefully selected sheesha flavors, every aspect of Medina is designed to provide a genuine taste of Middle Eastern hospitality.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-accent-700 mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-base text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Restaurant Rules */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-12 sm:mt-16 bg-primary-700/5 p-5 sm:p-6 md:p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={24} className="text-primary-700 flex-shrink-0" />
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700">
              Restaurant Policies
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Info size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">18% gratuity will be added for groups of 6 or more</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Minimum 1 shisha per 2 customers</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Minimum 1 drink per customer</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Info size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Please ask your server to move sheesha pipes</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">All prices are subject to change without notice</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Must be 18+ for sheesha service (ID required)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-white rounded-md shadow-sm">
            <p className="text-xs sm:text-sm text-gray-600">
              At Medina Cafe & Grill, we strive to provide an exceptional experience for all our guests. 
              These policies help us maintain the quality of our service and ensure everyone has an enjoyable time.
              We appreciate your understanding and cooperation.
            </p>
          </div>
        </motion.div>

        {/* Contact & Hours Section */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-5 sm:mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-accent-700">Address</h4>
                  <p className="text-gray-600">{businessInfo.address}</p>
                  <p className="text-gray-600 mt-1">Calgary, Alberta, Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-accent-700">Phone</h4>
                  <p className="text-gray-600">
                    <a href={`tel:${businessInfo.phone}`} className="hover:text-primary-700 transition-colors touch-manipulation">
                      {businessInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-accent-700">Email</h4>
                  <p className="text-gray-600">
                    <a href={`mailto:${businessInfo.email}`} className="hover:text-primary-700 transition-colors touch-manipulation">
                      {businessInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-5 sm:mt-6">
              <h4 className="font-medium text-accent-700 mb-3">Connect With Us</h4>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href={businessInfo.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent-700 hover:bg-accent-800 text-white p-3 rounded-full transition-colors touch-manipulation"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={businessInfo.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent-700 hover:bg-accent-800 text-white p-3 rounded-full transition-colors touch-manipulation"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="relative pb-[56.25%] h-0">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center p-4">
                    <MapPin size={36} className="text-primary-700 mb-2 mx-auto" />
                    <p className="text-gray-500 font-medium">Interactive Map</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-md"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-5 sm:mb-6">
              Business Hours
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary-700 mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h4 className="font-medium text-accent-700 mb-3">Open Hours</h4>
                  <div className="space-y-3">
                    {Object.entries(businessInfo.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-600 capitalize">{day}</span>
                        <span className="font-medium">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-5 sm:mt-6 bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-medium text-accent-700 mb-2">Special Notes</h4>
              <ul className="text-gray-600 space-y-1.5 sm:space-y-2 text-sm">
                <li>• Kitchen closes 30 minutes before closing time</li>
                <li>• Last sheesha orders taken 1 hour before closing</li>
                <li>• Reservations recommended for groups of 6 or more</li>
                <li>• Happy hour: Monday-Thursday 3-6PM (15% off select items)</li>
                <li>• Extended hours on holidays - please call for details</li>
              </ul>
            </div>

            {/* Reservations */}
            <div className="mt-5 sm:mt-6">
              <h4 className="font-medium text-accent-700 mb-3">Make a Reservation</h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                For group reservations or special events, please call us directly or send an email with your details.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href={`tel:${businessInfo.phone}`} 
                  className="bg-primary-700 hover:bg-primary-800 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-md transition-all duration-300 text-sm sm:text-base font-medium flex-1 text-center flex items-center justify-center gap-2 touch-manipulation"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a 
                  href={`mailto:${businessInfo.email}?subject=Reservation Request`} 
                  className="bg-accent-700 hover:bg-accent-800 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-md transition-all duration-300 text-sm sm:text-base font-medium flex-1 text-center flex items-center justify-center gap-2 touch-manipulation"
                >
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-12 sm:mt-16"
        >
          <SectionHeading 
            title="Frequently Asked Questions" 
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-accent-700 mb-2">
                Do you offer catering services?
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Yes, we offer catering for events of all sizes. Please contact us at least 48 hours in advance to discuss your requirements and place your order.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-accent-700 mb-2">
                Can I bring my own sheesha?
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                No, due to health and safety regulations, we do not allow outside sheesha. We offer a wide variety of premium flavors to choose from.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-accent-700 mb-2">
                Is there a dress code?
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                We maintain a casual to smart-casual dress code. We ask that guests refrain from wearing sportswear or beachwear in the evenings.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <h4 className="font-heading text-base sm:text-lg font-semibold text-accent-700 mb-2">
                Do you have vegetarian or vegan options?
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Yes, we have a variety of vegetarian and vegan dishes. Our menu clearly marks these options, and our staff is happy to accommodate dietary preferences.
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;