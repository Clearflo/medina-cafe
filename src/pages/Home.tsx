import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Star, MapPin, Utensils, Clock } from 'lucide-react';

import SectionHeading from '../components/ui/SectionHeading';
import { menuItems } from '../utils/constants';
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

  return (
    <div>
      {/* Hero Section - Clean Image Only */}
      <section className="relative">
        <div className="w-full">
          <img 
            src="/images/medina 2021-08-15.jpeg"
            alt="Medina Cafe"
            className="w-full h-auto object-contain md:hidden"
          />
          <div 
            className="hidden md:block h-screen min-h-[550px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/medina 2021-08-15.jpeg')" }}
          />
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
                title="Premium Sheesha Lounge" 
                subtitle=""
                centered
              />
              <p className="text-gray-600 text-lg leading-relaxed">
                Established in 2010, Medina Cafe & Grill brings authentic Middle Eastern flavors and traditions to Calgary. Our restaurant offers a warm, inviting atmosphere where friends and family can gather to enjoy delicious food and premium sheesha.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-gray-50">
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
                <ImageWithLoader 
                  src="/images/medina101.jpeg"
                  alt="Medina Cafe Interior"
                  className="w-full h-full object-cover"
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
                <ImageWithLoader 
                  src="/images/medina102.jpeg"
                  alt="Medina Cafe Experience"
                  className="w-full h-full object-cover"
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
                <ImageWithLoader 
                  src="/images/medina103.jpeg"
                  alt="Medina Cafe Atmosphere"
                  className="w-full h-full object-cover"
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