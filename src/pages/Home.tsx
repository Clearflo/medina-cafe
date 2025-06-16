import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Star, MapPin, Utensils, Clock, Coffee, Users, Award, AlertTriangle, Info, CupSoda } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import { menuItems } from '../utils/constants';

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

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const features = [
    {
      icon: <Coffee className="text-secondary-300" size={24} />,
      title: 'Premium Sheesha',
      description: 'We offer top-quality sheesha with a wide variety of flavors to choose from.',
      clickable: false
    },
    {
      icon: <Utensils className="text-secondary-300" size={24} />,
      title: 'Authentic Cuisine',
      description: 'Our chefs prepare authentic Middle Eastern dishes using traditional recipes.',
      clickable: false
    },
    {
      icon: <CupSoda className="text-secondary-300" size={24} />,
      title: 'Drink Menu',
      description: 'Explore our selection of traditional teas, coffees, fresh juices, and specialty drinks.',
      clickable: true,
      link: '/menu'
    },
    {
      icon: <Utensils className="text-secondary-300" size={24} />,
      title: 'Food Menu',
      description: 'Discover our authentic Middle Eastern cuisine, appetizers, and main dishes.',
      clickable: true,
      link: '/menu'
    }
  ];

  return (
    <div>
      {/* Hero Section - Clean Image Only */}
      <section className="relative pt-16 md:pt-0">
        <div className="w-full">
          {/* Mobile Hero - Full image visible without cropping */}
          <div className="md:hidden relative bg-gray-100">
            <img 
              src="/images/medinamainimage.jpeg"
              alt="Medina Cafe Main Interior"
              className="w-full h-auto object-contain max-h-[70vh]"
              loading="eager"
            />
          </div>
          {/* Desktop Hero - Full height background */}
          <div className="hidden md:block">
            <div 
              className="h-screen min-h-[600px] bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url('/images/medinamainimage.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <SectionHeading 
                title="Premium Sheesha Lounge & Grill" 
                subtitle=""
                centered
              />
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>
                  Medina Café & Grill was established in 2010 with one goal in mind: to create a welcoming, vibrant space for everyone — a place that feels like home, no matter where you're from.
                </p>
                
                <p>
                  With over 20 years in the hospitality industry, we've built a space that reflects our taste: warm lighting, bold design, good food, and great atmosphere.
                </p>
                
                <p>
                  Our guests have always been diverse, and we're proud to be the kind of place where people come together — for meals, conversation, and a relaxed evening experience.
                </p>
                
                <p className="font-medium text-accent-700">
                  Come on in, take a seat, and enjoy the vibe — we'd love to welcome you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => {
              const CardContent = () => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center ${
                    feature.clickable ? 'cursor-pointer hover:scale-105 hover:bg-gray-50' : ''
                  }`}
                >
                  <div className="mb-3 sm:mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-accent-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-600">{feature.description}</p>
                  {feature.clickable && (
                    <div className="mt-3 flex justify-center">
                      <ArrowRight size={18} className="text-secondary-300" />
                    </div>
                  )}
                </motion.div>
              );

              if (feature.clickable) {
                return (
                  <Link key={index} to={feature.link}>
                    <CardContent />
                  </Link>
                );
              }

              return <CardContent key={index} />;
            })}
          </motion.div>
        </div>
      </section>

      {/* Restaurant Policies Section */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-5xl mx-auto bg-secondary-300/10 p-6 md:p-8 rounded-lg"
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
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">No Vaping!</p>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">No loitering</p>
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
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">No outside food or drinks</p>
                </div>
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-secondary-300 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">We do not serve alcohol and will not accept intoxicated customers</p>
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
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square">
                <img 
                  src="/images/medina101.jpeg"
                  alt="Medina Cafe Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square">
                <img 
                  src="/images/medina102.jpeg"
                  alt="Medina Cafe Experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="aspect-square">
                <img 
                  src="/images/medina103.jpeg"
                  alt="Medina Cafe Atmosphere"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;