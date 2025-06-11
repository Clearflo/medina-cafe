import React from 'react';
import { motion } from 'framer-motion';

interface SheeshaItemProps {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  notes?: string;
}

interface SheeshaMenuListProps {
  items: SheeshaItemProps[];
  category: string;
}

const SheeshaMenuList: React.FC<SheeshaMenuListProps> = ({ items, category }) => {
  return (
    <div className="mb-8">
      <h3 className="font-heading text-xl font-semibold text-accent-700 mb-4 border-l-4 border-primary-700 pl-3">
        {category}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100"
          >
            <div className="flex justify-between items-start gap-2 mb-1.5">
              <h4 className="font-heading text-base font-semibold text-accent-800">{item.name}</h4>
              <span className="text-primary-700 font-medium text-sm whitespace-nowrap">{item.price}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
            {item.notes && (
              <p className="text-xs text-gray-500 italic">
                {item.notes}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SheeshaMenuList;