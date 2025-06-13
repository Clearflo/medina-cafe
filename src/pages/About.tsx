import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Coffee, Award, Utensils, Info, AlertTriangle, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';

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

const businessHours = {
  monday: '4:00 PM - 2:00 AM',
  tuesday: '2:00 PM - 2:00 AM',
  wednesday: '2:00 PM - 2:00 AM',
  thursday: '2:00 PM - 2:00 AM',
  friday: '2:00 PM - 3:00 AM',
  saturday: '2:00 PM - 3:00 AM',
  sunday: '2:00 PM - 2:00 AM'
};

// Image carousel data
const carouselImages = [
  { src: '/images/aboutmedina.jpg', alt: 'Medina Cafe Interior' },
  { src: '/images/aboutmedina2.jpg', alt: 'Medina Cafe Atmosphere' },
  { src: '/images/aboutmedina3.jpg', alt: 'Medina Cafe Dining Area' },
  { src: '/images/aboutmedina4.jpg', alt: 'Medina Cafe Lounge' },
  { src: '/images/aboutmedina5.jpg', alt: 'Medina Cafe Experience' }
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    {
      icon: <Coffee className="text-secondary-300" size={24} />,
      title: 'Premium Sheesha',
      description: 'We offer top-quality sheesha with a wide variety of flavors to choose from.'
    },
    {
      icon: <Utensils className="text-secondary-300" size={24} />,
      title: 'Authentic Cuisine',
      description: 'Our chefs prepare authentic Middle Eastern dishes using traditional recipes.'
    },
    {
      icon: <Users className="text-secondary-300" size={24} />,
      title: 'Welcoming Atmosphere',
      description: 'A cozy space where friends and family can gather and enjoy good food.'
    },
    {
      icon: <Award className="text-secondary-300" size={24} />,
      title: 'Quality Service',
      description: 'Our dedicated staff ensures you have a memorable dining experience.'
    }
  ];

  const handleMapClick = () => {
    // Replace with your actual Google Maps URL
    const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=123+Calgary+Avenue,+Calgary,+AB+T2P+2Y3";
    window.open(googleMapsUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="pt-24 pb-12 bg-stone-50 min-h-screen">
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
            className="mt-4 mb-8"
          />
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Mobile Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:hidden rounded-lg overflow-hidden shadow-md h-[300px] relative"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
                loading="lazy"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(event, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextImage();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevImage();
                  }
                }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>

          {/* Desktop Single Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="hidden md:block rounded-lg overflow-hidden shadow-md h-[300px] md:h-auto"
          >
            <img 
              src="/images/aboutmedina.jpg" 
              alt="Medina Cafe Interior" 
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
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 mb-4">
              Established in 2010, Medina Cafe & Grill was born from a passion for authentic Middle Eastern and Turkish cuisine and a desire to create a welcoming space for the Calgary community. Our founder, Ahmed Medina, brought his family recipes from Lebanon to share the rich culinary traditions of the Middle East.
            </p>
            <p className="text-gray-600">
              What began as a small cafe has grown into a beloved destination for both locals and visitors seeking authentic flavors and a relaxing sheesha experience. Our commitment to quality and tradition has remained unwavering throughout our journey.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-accent-700 mb-2">
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
          className="mb-12 bg-secondary-300/10 p-6 md:p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={24} className="text-secondary-300 flex-shrink-0" />
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700">
              Restaurant Policies
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">18% gratuity will be added for groups of 6 or more</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Minimum 1 shisha per 2 customers</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Minimum 1 drink per customer</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Please ask your server to move sheesha pipes</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">All prices are subject to change without notice</p>
              </div>
              <div className="flex items-start gap-2">
                <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Must be 18+ for sheesha service (ID required)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-600">
              At Medina Cafe & Grill, we strive to provide an exceptional experience for all our guests. 
              These policies help us maintain the quality of our service and ensure everyone has an enjoyable time.
              We appreciate your understanding and cooperation.
            </p>
          </div>
        </motion.div>

        {/* Contact & Hours Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white p-6 md:p-8 rounded-lg shadow-md"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-accent-700">Address</h4>
                  <p className="text-gray-600">123 Calgary Avenue</p>
                  <p className="text-gray-600">Calgary, AB T2P 2Y3</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-accent-700">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+14031234567" className="hover:text-secondary-300 transition-colors touch-manipulation">
                      (403) 123-4567
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-accent-700">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@medinacafe.com" className="hover:text-secondary-300 transition-colors touch-manipulation">
                      info@medinacafe.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Simplified Map Button */}
            <div className="mt-6">
              <h4 className="font-medium text-accent-700 mb-3">Location</h4>
              <button
                onClick={handleMapClick}
                className="w-full bg-secondary-300 hover:bg-secondary-400 text-white p-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <MapPin size={24} />
                <span className="font-medium">View on Google Maps</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-white p-6 md:p-8 rounded-lg shadow-md"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700 mb-6">
              Business Hours
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                <div className="w-full">
                  <h4 className="font-medium text-accent-700 mb-3">Open Hours</h4>
                  <div className="space-y-3">
                    {Object.entries(businessHours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-600 capitalize">{day}</span>
                        <span className="font-medium text-sm">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

// Swipe detection utilities
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default About;