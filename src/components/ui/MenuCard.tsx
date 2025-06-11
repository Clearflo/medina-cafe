import React from 'react';
import { motion } from 'framer-motion';
import ImageWithLoader from './ImageWithLoader';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  category: string;
  notes?: string;
}

const MenuCard: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  category,
  notes,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 border border-gray-100"
    >
      {image && (
        <div className="h-48 sm:h-52 overflow-hidden">
          <ImageWithLoader 
            src={image} 
            alt={name}
            className="w-full h-full"
          />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-accent-800 pr-2">{name}</h3>
          <span className="text-primary-700 font-medium whitespace-nowrap">{price}</span>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-3">{description}</p>
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="text-xs py-1 px-2 bg-secondary-300/20 text-secondary-700 rounded-full">
            {category}
          </span>
          {notes && (
            <span className="text-xs text-gray-500 italic">
              {notes}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;