import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Star, MapPin, Utensils, Clock } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import { menuItems } from '../utils/constants';
import ParallaxSection from '../components/ui/ParallaxSection';
import GlassmorphicCard from '../components/ui/GlassmorphicCard';
import ImageWithLoader from '../components/ui/ImageWithLoader';

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

  // Get featured items for homepage
  const featuredItems = [
    menuItems.mainDishes[0],
    menuItems.appetizers[0],
    menuItems.sheesha[1],
  ];

  // Function to scroll to sheesha section
  const scrollToSheesha = () => {
    // Navigate to menu page first
    window.location.href = '/menu';
    
    // After navigation, scroll to sheesha section
    setTimeout(() => {
      const sheeshaButton = document.querySelector('button[data-category="sheesha"]');
      if (sheeshaButton) {
        sheeshaButton.click();
      }
    }, 500);
  };

  return (
    <div>
      {/* Hero Section - Clean Image Only */}
      <section className="relative h-screen min-h-[550px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/medina 2021-08-15.jpeg')" }}
        >
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <SectionHeading 
                title="Welcome to Medina Cafe" 
                subtitle="A taste of the Middle East in Calgary"
              />
              <p className="text-gray-600 mb-4 sm:mb-6">
                Established in 2015, Medina Cafe & Grill brings authentic Middle Eastern flavors and traditions to Calgary. Our restaurant offers a warm, inviting atmosphere where friends and family can gather to enjoy delicious food and premium sheesha.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8">
                From our carefully sourced ingredients to our traditional cooking methods, we strive to provide an authentic experience with every visit. Our chefs prepare each dish with passion and attention to detail, ensuring a memorable dining experience.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-2 sm:gap-3 hover-lift p-3 rounded-lg bg-white shadow-sm">
                  <MapPin size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-accent-700">Location</h3>
                    <p className="text-sm text-gray-600">Downtown Calgary</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover-lift p-3 rounded-lg bg-white shadow-sm">
                  <Utensils size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-accent-700">Cuisine</h3>
                    <p className="text-sm text-gray-600">Middle Eastern</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover-lift p-3 rounded-lg bg-white shadow-sm">
                  <Clock size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-accent-700">Open Hours</h3>
                    <p className="text-sm text-gray-600">11 AM - 11 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover-lift p-3 rounded-lg bg-white shadow-sm">
                  <Star size={20} className="text-secondary-300 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-accent-700">Rating</h3>
                    <p className="text-sm text-gray-600">4.8/5 (200+ reviews)</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="text-secondary-300 hover:text-secondary-400 font-medium flex items-center gap-1 hover:-translate-y-1 transition-transform duration-300 touch-manipulation"
              >
                Learn more about us <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-2 sm:gap-4"
            >
              <div className="space-y-2 sm:space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md h-36 sm:h-48 hover-lift">
                  <ImageWithLoader
                    src="https://images.pexels.com/photos/7470753/pexels-photo-7470753.jpeg"
                    alt="Middle Eastern Food"
                    className="w-full h-full"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-48 sm:h-64 hover-lift">
                  <ImageWithLoader
                    src="https://images.pexels.com/photos/6157001/pexels-photo-6157001.jpeg"
                    alt="Restaurant Interior"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-2 sm:space-y-4 mt-4 sm:mt-8">
                <div className="rounded-lg overflow-hidden shadow-md h-48 sm:h-64 hover-lift">
                  <ImageWithLoader
                    src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg"
                    alt="Sheesha Lounge"
                    className="w-full h-full"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md h-36 sm:h-48 hover-lift">
                  <ImageWithLoader
                    src="https://images.pexels.com/photos/7474389/pexels-photo-7474389.jpeg"
                    alt="Cooking Preparation"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <ParallaxSection imageUrl="https://images.pexels.com/photos/6546258/pexels-photo-6546258.jpeg">
        <div className="max-w-4xl mx-auto py-12 md:py-16 text-center">
          <GlassmorphicCard className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl border border-white/20">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-4 text-accent-800">
              "Food is not just eating energy. It's an experience."
            </h2>
            <p className="text-gray-700">
              At Medina, we believe in creating memorable dining experiences through authentic flavors, warm hospitality, and premium sheesha.
            </p>
          </GlassmorphicCard>
        </div>
      </ParallaxSection>

      {/* Featured Menu Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Specialties" 
            subtitle="Discover our most popular dishes and sheesha flavors"
            centered
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
          >
            {featuredItems.map((item) => (
              <motion.div 
                key={item.id} 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 border border-gray-100">
                  {item.image && (
                    <div className="h-48 sm:h-52 overflow-hidden">
                      <ImageWithLoader 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-lg sm:text-xl font-semibold text-accent-800 pr-2">{item.name}</h3>
                      <span className="text-secondary-300 font-medium whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3">{item.description}</p>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <span className="text-xs py-1 px-2 bg-secondary-300/20 text-secondary-700 rounded-full">
                        {item.category}
                      </span>
                      {item.notes && (
                        <span className="text-xs text-gray-500 italic">
                          {item.notes}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/menu" 
              className="bg-gradient-to-r from-secondary-300 to-secondary-400 hover:from-secondary-400 hover:to-secondary-500 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 text-base sm:text-lg font-medium inline-flex items-center gap-2 touch-manipulation shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;