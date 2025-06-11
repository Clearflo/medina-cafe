import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, UtensilsCrossed, Sandwich, Wine, CakeSlice, Search, CupSoda, FilterX } from 'lucide-react';

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
      staggerChildren: 0.1
    }
  }
};

// Define types for each menu category
type CategoryType = 'all' | 'sheesha' | 'sheeshaHouse' | 'sheeshaFresh' | 'sheeshaPremium' | 'appetizers' | 'mainDishes' | 'drinks' | 'coffee' | 'tea' | 'milkshake' | 'juice' | 'desserts';

// Define subcategories for sheesha
const sheeshaSubcategories = {
  all: 'All Sheesha',
  sheeshaHouse: 'House Blend',
  sheeshaFresh: 'Fresh',
  sheeshaPremium: 'Premium'
};

// Define subcategories for drinks
const drinkSubcategories = {
  all: 'All Drinks',
  coffee: 'Coffee',
  tea: 'Tea',
  milkshake: 'Milkshakes',
  juice: 'Juices'
};

// Component for text-based sheesha menu items
const SheeshaMenuItem = ({ name, description, notes }: { name: string, description: string, notes?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="font-heading text-lg font-semibold text-accent-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      {notes && (
        <p className="text-xs text-primary-700 font-medium">{notes}</p>
      )}
    </motion.div>
  );
};

// Component for food menu items with images
const FoodMenuItem = ({ name, description, price, image, category }: { 
  name: string, 
  description: string, 
  price: string, 
  image?: string, 
  category: string 
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
        </div>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSheeshaSubcategories, setShowSheeshaSubcategories] = useState<boolean>(false);
  const [showDrinkSubcategories, setShowDrinkSubcategories] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const categoryRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);
  
  // Reset search when changing categories
  useEffect(() => {
    setSearchTerm('');
  }, [activeCategory]);

  // Handle sticky category navigation
  useEffect(() => {
    const handleScroll = () => {
      if (categoryRef.current) {
        const categoryTop = categoryRef.current.getBoundingClientRect().top;
        const currentScrollY = window.scrollY;
        
        if (categoryTop <= 80 && currentScrollY > prevScrollY.current) {
          setIsSticky(true);
        } else if (currentScrollY < prevScrollY.current) {
          setIsSticky(false);
        }
        
        prevScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: <UtensilsCrossed size={20} /> },
    { id: 'sheesha', name: 'Sheesha', icon: <Coffee size={20} /> },
    { id: 'appetizers', name: 'Appetizers', icon: <Sandwich size={20} /> },
    { id: 'mainDishes', name: 'Main Dishes', icon: <UtensilsCrossed size={20} /> },
    { id: 'drinks', name: 'Drinks', icon: <CupSoda size={20} /> },
    { id: 'desserts', name: 'Desserts', icon: <CakeSlice size={20} /> },
  ];

  // Filter menu items based on active category and search term
  const getFilteredItems = () => {
    let filteredItems = [];
    
    // First, filter by category
    if (activeCategory === 'all') {
      filteredItems = [
        ...menuItems.sheesha,
        ...menuItems.appetizers,
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
      filteredItems = [...menuItems.drinks];
    } else if (activeCategory === 'coffee') {
      filteredItems = menuItems.drinks.filter(item => item.category.includes('Coffee'));
    } else if (activeCategory === 'tea') {
      filteredItems = menuItems.drinks.filter(item => item.category.includes('Tea'));
    } else if (activeCategory === 'milkshake') {
      filteredItems = menuItems.drinks.filter(item => item.category.includes('Milkshake'));
    } else if (activeCategory === 'juice') {
      filteredItems = menuItems.drinks.filter(item => item.category.includes('Juice'));
    } else {
      filteredItems = menuItems[activeCategory];
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
    'House Blend Sheesha': filteredItems.filter(item => 
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
  
  // Filter non-sheesha items
  const nonSheeshaItems = filteredItems.filter(item => !item.category.includes('Sheesha'));
  
  // Handle category click
  const handleCategoryClick = (category: CategoryType) => {
    setActiveCategory(category);
    
    // Handle subcategory displays
    if (category === 'sheesha') {
      setShowSheeshaSubcategories(true);
      setShowDrinkSubcategories(false);
    } else if (category === 'drinks') {
      setShowDrinkSubcategories(true);
      setShowSheeshaSubcategories(false);
    } else {
      setShowSheeshaSubcategories(false);
      setShowDrinkSubcategories(false);
    }
    
    // Scroll to results when on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const resultsElement = document.getElementById('menu-results');
        if (resultsElement) {
          window.scrollTo({
            top: resultsElement.offsetTop - 150,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };
  
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SectionHeading 
            title="Our Menu" 
            subtitle="Explore our selection of authentic Middle Eastern cuisine and premium sheesha flavors"
            centered
            className="mt-8 mb-6"
          />
        </motion.div>

        {/* Search Bar */}
        <div className="my-6 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search our menu..."
              className="w-full px-4 py-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
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

        {/* Category Filters */}
        <div 
          ref={categoryRef} 
          className={`transition-all duration-300 ${isSticky ? 'sticky top-[60px] z-30 bg-white shadow-md py-3 -mx-4 px-4 md:mx-0 md:px-0 md:static md:shadow-none md:py-0' : ''}`}
        >
          <div className="flex justify-start md:justify-center mb-6 mt-4 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-2 md:space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id as CategoryType)}
                  data-category={category.id}
                  className={`flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full transition-all duration-300 min-w-[80px] justify-center touch-manipulation ${
                    (activeCategory === category.id) || 
                    (activeCategory.includes('sheesha') && category.id === 'sheesha') ||
                    ((activeCategory.includes('coffee') || activeCategory.includes('tea') || activeCategory.includes('milkshake') || activeCategory.includes('juice')) && category.id === 'drinks')
                      ? 'bg-primary-700 text-white'
                      : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="whitespace-nowrap font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sheesha Subcategories */}
          <AnimatePresence>
            {showSheeshaSubcategories && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start md:justify-center mb-6 overflow-x-auto pb-2 hide-scrollbar"
              >
                <div className="flex space-x-2 md:space-x-4">
                  <button
                    onClick={() => setActiveCategory('sheesha')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'sheesha'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {sheeshaSubcategories.all}
                  </button>
                  <button
                    onClick={() => setActiveCategory('sheeshaHouse')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'sheeshaHouse'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {sheeshaSubcategories.sheeshaHouse}
                  </button>
                  <button
                    onClick={() => setActiveCategory('sheeshaFresh')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'sheeshaFresh'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {sheeshaSubcategories.sheeshaFresh}
                  </button>
                  <button
                    onClick={() => setActiveCategory('sheeshaPremium')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'sheeshaPremium'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {sheeshaSubcategories.sheeshaPremium}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Drink Subcategories */}
          <AnimatePresence>
            {showDrinkSubcategories && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start md:justify-center mb-6 overflow-x-auto pb-2 hide-scrollbar"
              >
                <div className="flex space-x-2 md:space-x-4">
                  <button
                    onClick={() => setActiveCategory('drinks')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'drinks'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {drinkSubcategories.all}
                  </button>
                  <button
                    onClick={() => setActiveCategory('coffee')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'coffee'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {drinkSubcategories.coffee}
                  </button>
                  <button
                    onClick={() => setActiveCategory('tea')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'tea'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {drinkSubcategories.tea}
                  </button>
                  <button
                    onClick={() => setActiveCategory('milkshake')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'milkshake'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {drinkSubcategories.milkshake}
                  </button>
                  <button
                    onClick={() => setActiveCategory('juice')}
                    className={`px-4 py-2.5 rounded-full transition-all duration-300 min-w-[100px] text-center touch-manipulation ${
                      activeCategory === 'juice'
                        ? 'bg-secondary-400 text-white'
                        : 'bg-gray-100 text-accent-700 hover:bg-gray-200'
                    }`}
                  >
                    {drinkSubcategories.juice}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div id="menu-results" className="text-center mb-6 mt-4">
          <p className="text-gray-600">
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
          >
            {/* Sheesha Menu Section - Text-based layout */}
            {(activeCategory === 'all' || activeCategory.includes('sheesha')) && (
              Object.entries(groupedSheeshaItems).map(([category, items]) => 
                items.length > 0 ? (
                  <div key={category} className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Coffee size={24} className="text-primary-700" />
                      <h3 className="font-heading text-xl font-semibold text-accent-700">
                        {category}
                        {category === 'House Blend Sheesha' && <span className="ml-2 text-primary-700">$25.99</span>}
                        {category === 'Fresh Sheesha' && <span className="ml-2 text-primary-700">$25.99</span>}
                        {category === 'Premium Sheesha' && <span className="ml-2 text-primary-700">$28.99-$29.99</span>}
                      </h3>
                    </div>
                    
                    {/* Sheesha pricing info */}
                    {items.length > 0 && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          {category.includes('Premium') 
                            ? 'Premium Sheesha: $28.99-$29.99 | After 1AM: $30.99-$31.99' 
                            : 'Regular: $25.99 | Refill: $18.99 | After 1AM: $27.99'}
                        </p>
                      </div>
                    )}
                    
                    {/* Sheesha category image - one per category */}
                    {items.length > 0 && (
                      <div className="mb-6 rounded-lg overflow-hidden h-48 sm:h-64">
                        <ImageWithLoader 
                          src={category === 'House Blend Sheesha' 
                            ? "https://images.pexels.com/photos/6546260/pexels-photo-6546260.jpeg"
                            : category === 'Fresh Sheesha'
                              ? "https://images.pexels.com/photos/6546619/pexels-photo-6546619.jpeg"
                              : "https://images.pexels.com/photos/6544945/pexels-photo-6544945.jpeg"
                          } 
                          alt={category}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Grid layout for sheesha flavors */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <SheeshaMenuItem
                          key={item.id}
                          name={item.name}
                          description={item.description}
                          notes={item.notes}
                        />
                      ))}
                    </div>
                  </div>
                ) : null
              )
            )}

            {/* Non-Sheesha Menu Items - Keep images for these */}
            {nonSheeshaItems.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {nonSheeshaItems.map((item) => (
                  <FoodMenuItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                  />
                ))}
              </div>
            )}

            {/* No results message */}
            {filteredItems.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600 mb-4">No menu items found.</p>
                <button 
                  onClick={clearSearch}
                  className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-full transition-all duration-300 text-base font-medium inline-flex items-center gap-2"
                >
                  Clear Search <FilterX size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <div className="mt-16 bg-accent-700/5 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-accent-700 mb-4">
                Special Requests
              </h3>
              <p className="text-gray-600 mb-4">
                Have dietary restrictions or special requests? Our chefs are happy to accommodate your needs whenever possible.
              </p>
              <p className="text-gray-600">
                Please inform your server of any allergies or dietary requirements when placing your order.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-accent-700 mb-4">
                Sheesha Sessions
              </h3>
              <p className="text-gray-600 mb-4">
                All sheesha sessions last approximately 60-90 minutes. We offer premium tobacco and herbal options.
              </p>
              <p className="text-gray-600">
                Must be 18+ to order sheesha. Please ask your server about our current special flavors and combinations.
              </p>
              <div className="mt-4 p-3 bg-secondary-300/20 rounded-md">
                <p className="text-sm text-accent-700 font-medium">Sheesha Pricing:</p>
                <p className="text-sm text-gray-600">Regular: $25.99 | Refill: $18.99 | After 1AM: $27.99</p>
                <p className="text-sm text-gray-600">Premium: $28.99-$29.99 | After 1AM: $30.99-$31.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;