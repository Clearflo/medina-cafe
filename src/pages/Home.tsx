import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Star, MapPin, Utensils, Clock, Coffee, Users, Award, AlertTriangle, Info, CupSoda, CakeSlice, Zap } from 'lucide-react';

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

// Hookah/Sheesha Icon Component
const HookahIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    {/* Base/Bowl */}
    <circle cx="12" cy="8" r="3"/>
    {/* Stem */}
    <line x1="12" y1="11" x2="12" y2="18"/>
    {/* Water container */}
    <path d="M8 18c0 2.2 1.8 4 4 4s4-1.8 4-4"/>
    {/* Hose connection */}
    <path d="M8 15l-3 1"/>
    <path d="M16 15l3 1"/>
    {/* Hose curves */}
    <path d="M5 16c-1 0-2 1-2 2s1 2 2 2"/>
    <path d="M19 16c1 0 2 1 2 2s-1 2-2 2"/>
  </svg>
);

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const features = [
    {
      icon: <HookahIcon className="text-secondary-300" size={24} />,
      title: 'Premium Sheesha',
      description: 'We offer top-quality sheesha with a wide variety of flavors to choose from.',
      clickable: true,
      link: '/menu#sheesha'
    },
    {
      icon: <Utensils className="text-secondary-300" size={24} />,
      title: 'Authentic Cuisine',
      description: 'Our chefs prepare authentic Middle Eastern dishes using traditional recipes.',
      clickable: true,
      link: '/menu#maindishes'
    },
    {
      icon: <Coffee className="text-secondary-300" size={24} />,
      title: 'Drink Menu',
      description: 'Explore our selection of traditional teas, coffees, and specialty drinks.',
      clickable: true,
      link: '/menu#drinks'
    },
    {
      icon: <CakeSlice className="text-secondary-300" size={24} />,
      title: 'Dessert Menu',
      description: 'Indulge in our authentic Middle Eastern desserts and sweet treats.',
      clickable: true,
      link: '/menu#desserts'
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

      {/* Single Gallery Image Section */}
      <section className="py-8 md:py-12 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/medina101.jpeg"
                alt="Medina Cafe Interior Atmosphere"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
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

      {/* Featured Gallery Images Section */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 md:gap-8"
          >
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
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-secondary-300 flex-shrink-0" />
              <h3 className="font-heading text-xl sm:text-2xl font-semibold text-accent-700">
                House Policies
              </h3>
            </div>
            
            <div className="text-gray-700 space-y-4">
              <p className="text-base leading-relaxed">
                We're committed to creating a respectful and comfortable environment for all guests. Kindly review our policies below:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">18% gratuity will be added to groups of 6 or more</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">Minimum 1 shisha per 2 guests</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">Minimum 1 drink per guest</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">No vaping inside the premises</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">No loitering — seating is reserved for dining and lounge service</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">For safety, please ask your server to move any shisha</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-secondary-300 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">Guests may be responsible for damage caused by moving equipment</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">Do not place feet up on the seating</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">All prices are subject to change without notice</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">Shisha service is for guests 18+ (valid ID required)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">No outside food or drinks allowed</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary-300 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">We do not serve alcohol and cannot accommodate intoxicated guests</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                At Medina Café & Grill, our goal is to offer a high-quality experience in a welcoming space. 
                These policies help us maintain that standard so everyone can enjoy their visit. 
                Thank you for your understanding and cooperation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;