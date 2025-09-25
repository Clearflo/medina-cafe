import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Sandwich, Wine, CakeSlice, Search, CupSoda, FilterX } from 'lucide-react';
import { useLocation } from 'react-router-dom';

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
      staggerChildren: 0.1
    }
  }
};

// Define types for each menu category - REMOVED drink subcategories
type CategoryType = 'all' | 'sheesha' | 'sheeshaHouse' | 'sheeshaFresh' | 'sheeshaPremium' | 'appetizers' | 'saladsAndWraps' | 'sandwichesAndBites' | 'mainDishes' | 'drinks' | 'desserts';

// Define subcategories for sheesha
const sheeshaSubcategories = {
  all: 'All Sheesha',
  sheeshaHouse: 'Classics',
  sheeshaFresh: 'Fresh',
  sheeshaPremium: 'Premium'
};

// Component for text-based menu items (unified for all categories)
const MenuItem = ({ name, description, price, notes, hasFlavorSelection, flavors }: { 
  name: string, 
  description: string, 
  price?: string, 
  notes?: string,
  hasFlavorSelection?: boolean,
  flavors?: string[]
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-heading text-lg font-semibold text-accent-800">{name}</h3>
        {price && <span className="text-secondary-300 font-medium whitespace-nowrap ml-2">{price}</span>}
      </div>
      
      {/* Special handling for Classic Teas */}
      {hasFlavorSelection && flavors ? (
        <div className="mb-4">
          <p className="text-sm font-bold text-amber-700 mb-3 bg-amber-50 px-3 py-2 rounded-md border-l-4 border-amber-400">
            🍵 Choose your flavour:
          </p>
          <div className="flex flex-wrap gap-2">
            {flavors.map((flavor, index) => (
              <span
                key={index}
                className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 rounded-full px-3 py-1 text-sm text-amber-800 font-medium shadow-sm"
              >
                {flavor}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-2 mt-3 italic">{description}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-600 mb-2">{description}</p>
      )}
      
      {notes && (
        <p className="text-xs text-secondary-300 font-medium">{notes}</p>
      )}
    </motion.div>
  );
};
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSheeshaSubcategories, setShowSheeshaSubcategories] = useState<boolean>(false);
  
  const menuResultsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Handle hash navigation from URL
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Map hash values to category types
      const hashToCategory: { [key: string]: CategoryType } = {
        'sheesha': 'sheesha',
        'drinks': 'drinks', 
        'desserts': 'desserts',
        'appetizers': 'appetizers',
        'food': 'mainDishes',
        'mainDishes': 'mainDishes',
        'saladsAndWraps': 'saladsAndWraps',
        'sandwichesAndBites': 'sandwichesAndBites'
      };
      
      const targetCategory = hashToCategory[hash];
      if (targetCategory) {
        setActiveCategory(targetCategory);
        
        // Set subcategory visibility - ONLY for sheesha now
        if (targetCategory === 'sheesha') {
          setShowSheeshaSubcategories(true);
        } else {
          setShowSheeshaSubcategories(false);
        }
      }
    }
  }, [location.hash]);
  
  // Reset search when changing categories
  useEffect(() => {
    setSearchTerm('');
  }, [activeCategory]);

  // Scroll to results after category change
  useEffect(() => {
    if (activeCategory !== 'all' && menuResultsRef.current) {
      setTimeout(() => {
        menuResultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', name: 'All', icon: <UtensilsCrossed size={24} /> },
    { 
      id: 'sheesha', 
      name: 'Sheesha', 
      icon: (
        <img 
          src="/images/adobe-express-sheesha1-icon.png" 
          alt="Sheesha" 
          className="w-6 h-6 object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(38%) saturate(492%) hue-rotate(18deg) brightness(92%) contrast(85%)' }}
        />
      )
    },
    { id: 'appetizers', name: 'Appetizers', icon: <Sandwich size={24} /> },
    { id: 'saladsAndWraps', name: 'Salads & Wraps', icon: <UtensilsCrossed size={24} /> },
    { id: 'sandwichesAndBites', name: 'Sandwiches & Bites', icon: <Sandwich size={24} /> },
    { id: 'mainDishes', name: 'Main Dishes', icon: <UtensilsCrossed size={24} /> },
    { id: 'drinks', name: 'Drinks', icon: <CupSoda size={24} /> },
    { id: 'desserts', name: 'Desserts', icon: <CakeSlice size={24} /> },
  ];

  // Filter menu items based on active category and search term - SIMPLIFIED drinks logic
  const getFilteredItems = () => {
    let filteredItems = [];
    
    // First, filter by category
    if (activeCategory === 'all') {
      filteredItems = [
        ...menuItems.sheesha,
        ...menuItems.appetizers,
        ...(menuItems.saladsAndWraps || []),
        ...(menuItems.sandwichesAndBites || []),
        ...menuItems.mainDishes,
        ...menuItems.drinks,
        ...menuItems.desserts,
      ];
    } else if (activeCategory === 'sheesha') {
      filteredItems = [...menuItems.sheesha];
    } else if (activeCategory === 'sheeshaHouse') {
      filteredItems = menuItems.sheesha.filter(item => item.category.includes('House Blend'));
    } else if (activeCategory === 'sheeshaFresh') {
      filteredItems = menuItems.sheesha.filter(item => item.category.includes('Fresh'));
    } else if (activeCategory === 'sheeshaPremium') {
      filteredItems = menuItems.sheesha.filter(item => item.category.includes('Premium'));
    } else if (activeCategory === 'drinks') {
      // SIMPLIFIED: Show all drinks in one category
      filteredItems = [...menuItems.drinks];
    } else {
      filteredItems = menuItems[activeCategory] || [];
    }
    
    // Then filter by search term if it exists
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filteredItems = filteredItems.filter(
        item => 
          item.name.toLowerCase().includes(term) || 
          item.description.toLowerCase().includes(term) || 
          item.category.toLowerCase().includes(term) || 
          (item.notes && item.notes.toLowerCase().includes(term))
      );
    }
    
    return filteredItems;
  };

  const filteredItems = getFilteredItems();
  
  // Group sheesha items by category
  const groupedSheeshaItems = {
    'Classics': filteredItems.filter(item => 
      item.category.includes('House Blend') && 
      (activeCategory === 'all' || activeCategory === 'sheesha' || activeCategory === 'sheeshaHouse')
    ),
    'Fresh Sheesha': filteredItems.filter(item => 
      item.category.includes('Fresh') && 
      (activeCategory === 'all' || activeCategory === 'sheesha' || activeCategory === 'sheeshaFresh')
    ),
    'Premium Sheesha': filteredItems.filter(item => 
      item.category.includes('Premium') && 
      (activeCategory === 'all' || activeCategory === 'sheesha' || activeCategory === 'sheeshaPremium')
    )
  };
  
  // Filter non-sheesha items and group them by category - SIMPLIFIED drinks filtering
  const groupedNonSheeshaItems = {
    'Appetizers': filteredItems.filter(item => 
      (item.category.includes('Warm Starters') || item.category.includes('Crispy Bites')) && 
      (activeCategory === 'all' || activeCategory === 'appetizers')
    ),
    'Salads & Wraps': filteredItems.filter(item => 
      (item.category.includes('Fresh Salads') || item.category.includes('Wraps')) && 
      (activeCategory === 'all' || activeCategory === 'saladsAndWraps')
    ),
    'Sandwiches & Bites': filteredItems.filter(item => 
      (item.category.includes('Grilled Sandwiches') || item.category.includes('Global Bites')) && 
      (activeCategory === 'all' || activeCategory === 'sandwichesAndBites')
    ),
    'Main Dishes': filteredItems.filter(item => 
      (item.category.includes('Signature Entrees') || item.category.includes('Global Plates')) && 
      (activeCategory === 'all' || activeCategory === 'mainDishes')
    ),
    'Drinks': filteredItems.filter(item => 
      (item.category.includes('Coffee') || item.category.includes('Tea') || item.category.includes('Milk') || 
       item.category.includes('Drink') || item.category.includes('Espresso') || item.category.includes('Smoothie') || 
       item.category.includes('Soda') || item.category.includes('Matcha') || item.category.includes('Mocktail') || 
       item.category.includes('Frappe') || item.category.includes('Beverage') || item.category.includes('Juice') || 
       item.category.includes('Energy') || item.category.includes('House') || item.category.includes('Signature')) && 
      (activeCategory === 'all' || activeCategory === 'drinks')
    ),
    'Desserts': filteredItems.filter(item => 
      item.category.includes('Dessert') && 
      (activeCategory === 'all' || activeCategory === 'desserts')
    )
  };  
  
  // Handle category click - SIMPLIFIED without drink subcategories
  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category);
    
    // Handle subcategory displays - ONLY for sheesha now
    if (category === 'sheesha') {
      setShowSheeshaSubcategories(true);
    } else {
      setShowSheeshaSubcategories(false);
    }
  };
  
  const clearSearch = () => {
    setSearchTerm('');
  };

  // Helper function to get category icon
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Appetizers':
        return <Sandwich size={24} className="text-secondary-300" />;
      case 'Salads & Wraps':
        return <UtensilsCrossed size={24} className="text-secondary-300" />;
      case 'Sandwiches & Bites':
        return <Sandwich size={24} className="text-secondary-300" />;
      case 'Main Dishes':
        return <UtensilsCrossed size={24} className="text-secondary-300" />;
      case 'Drinks':
        return <CupSoda size={24} className="text-secondary-300" />;
      case 'Desserts':
        return <CakeSlice size={24} className="text-secondary-300" />;
      default:
        return <UtensilsCrossed size={24} className="text-secondary-300" />;
    }
  };

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SectionHeading 
            title="Our Menu" 
            subtitle="Explore our selection of authentic cuisine and premium sheesha flavors"
            centered
            className="mt-8 mb-8"
          />
        </motion.div>

        {/* Search Bar */}
        <div className="my-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search our menu..."
              className="w-full px-4 py-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base bg-white"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            {searchTerm && (
              <button 
                onClick={clearSearch}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <FilterX size={20} />
              </button>
            )}
          </div>
        </div>

        {/* IMPROVED Category Filters */}
        <div className="mb-8">
          <div className="space-y-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id as CategoryType)}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 text-left ${
                  (activeCategory === category.id) || 
                  (activeCategory.includes('sheesha') && category.id === 'sheesha')
                    ? 'bg-secondary-300 text-white shadow-lg transform scale-[1.02]'
                    : 'bg-white text-accent-700 hover:bg-gray-50 shadow-md border border-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  {category.icon}
                  <span className="font-semibold text-lg">{category.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* ONLY Sheesha Subcategories - Drink subcategories REMOVED */}
          <AnimatePresence>
            {showSheeshaSubcategories && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-2"
              >
                <button
                  onClick={() => setActiveCategory('sheesha')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 text-center ${
                    activeCategory === 'sheesha'
                      ? 'bg-secondary-400 text-white shadow-md'
                      : 'bg-white text-accent-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {sheeshaSubcategories.all}
                </button>
                <button
                  onClick={() => setActiveCategory('sheeshaHouse')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 text-center ${
                    activeCategory === 'sheeshaHouse'
                      ? 'bg-secondary-400 text-white shadow-md'
                      : 'bg-white text-accent-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {sheeshaSubcategories.sheeshaHouse}
                </button>
                <button
                  onClick={() => setActiveCategory('sheeshaFresh')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 text-center ${
                    activeCategory === 'sheeshaFresh'
                      ? 'bg-secondary-400 text-white shadow-md'
                      : 'bg-white text-accent-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {sheeshaSubcategories.sheeshaFresh}
                </button>
                <button
                  onClick={() => setActiveCategory('sheeshaPremium')}
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 text-center ${
                    activeCategory === 'sheeshaPremium'
                      ? 'bg-secondary-400 text-white shadow-md'
                      : 'bg-white text-accent-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {sheeshaSubcategories.sheeshaPremium}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div ref={menuResultsRef} className="text-center mb-8">
          <p className="text-gray-600 text-lg font-medium">
            {searchTerm ? `Found ${filteredItems.length} items matching "${searchTerm}"` : 
             `Showing ${filteredItems.length} menu items`}
          </p>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            {/* Sheesha Menu Section */}
            {(activeCategory === 'all' || activeCategory.includes('sheesha')) && (
              Object.entries(groupedSheeshaItems).map(([category, items]) => 
                items.length > 0 ? (
                  <div key={category} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/images/adobe-express-sheesha1-icon.png" 
                        alt="Sheesha" 
                        className="w-8 h-8 object-contain"
                        style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(38%) saturate(492%) hue-rotate(18deg) brightness(92%) contrast(85%)' }}
                      />
                      <h3 className="font-heading text-2xl font-bold text-accent-700">
                        {category}
                        {category === 'Classics' && <span className="ml-2 text-secondary-300 font-semibold">$25.99</span>}
                        {category === 'Fresh Sheesha' && <span className="ml-2 text-secondary-300 font-semibold">$25.99</span>}
                        {category === 'Premium Sheesha' && <span className="ml-2 text-secondary-300 font-semibold">$28.99-$29.99</span>}
                      </h3>
                    </div>
                    
                    {/* Sheesha pricing info */}
                    <div className="p-4 bg-white rounded-lg border-l-4 border-secondary-300">
                      <p className="text-sm text-gray-700 font-medium">
                        {category.includes('Premium') 
                          ? 'Premium Sheesha: $28.99-$29.99 | After 1AM: $30.99-$31.99' 
                          : 'Regular: $25.99 | Refill: $18.99 | After 1AM: $27.99'}
                      </p>
                    </div>
                    
                    {/* Grid layout for sheesha flavors */}
                    <div className="space-y-4">
                      {items.map((item) => (
  <MenuItem
    key={item.id}
    name={item.name}
    description={item.description}
    notes={item.notes}
    hasFlavorSelection={item.hasFlavorSelection}
    flavors={item.flavors}
                        />
                      ))}
                    </div>
                  </div>
                ) : null
              )
            )}

            {/* Non-Sheesha Menu Items */}
            {Object.entries(groupedNonSheeshaItems).map(([category, items]) => 
              items.length > 0 ? (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(category)}
                    <h3 className="font-heading text-2xl font-bold text-accent-700">
                      {category}
                    </h3>
                  </div>
                  
                  {/* Grid layout for menu items */}
                  <div className="space-y-4">
                  {items.map((item) => (
  <MenuItem
    key={item.id}
    name={item.name}
    description={item.description}
    price={item.price}
    hasFlavorSelection={item.hasFlavorSelection}
    flavors={item.flavors}
  />
))}
                  </div>
                </div>
              ) : null
            )}

            {/* No results message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-6">No menu items found.</p>
                <button 
                  onClick={clearSearch}
                  className="bg-secondary-300 hover:bg-secondary-400 text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-semibold inline-flex items-center gap-2"
                >
                  Clear Search <FilterX size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Sheesha Sessions Info */}
        <div className="mt-20 bg-accent-700/5 p-6 rounded-xl border border-accent-700/10">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold text-accent-700 mb-4">
              Sheesha Sessions
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              All sheesha sessions last approximately 60-90 minutes. We offer premium tobacco and herbal options.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Must be 18+ to order sheesha. Please ask your server about our current special flavors and combinations.
            </p>
            <div className="p-4 bg-secondary-300/20 rounded-lg inline-block">
              <p className="text-sm text-accent-700 font-bold mb-2">Sheesha Pricing:</p>
              <p className="text-sm text-gray-600 font-medium">Regular: $25.99 | Refill: $18.99 | After 1AM: $27.99</p>
              <p className="text-sm text-gray-600 font-medium">Premium: $28.99-$29.99 | After 1AM: $30.99-$31.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
