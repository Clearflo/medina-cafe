// This is a patch file to fix the menu filtering logic
// Replace the groupedNonSheeshaItems object in Menu.tsx around line 250

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
    (activeCategory === 'all' || activeCategory === 'drinks' || activeCategory === 'coffee' || activeCategory === 'tea' || activeCategory === 'milkshake')
  ),
  'Desserts': filteredItems.filter(item => 
    item.category.includes('Dessert') && 
    (activeCategory === 'all' || activeCategory === 'desserts')
  )
};

// INSTRUCTIONS:
// The issue is in Menu.tsx around line 250 where the filtering logic doesn't match the actual category names.
// 
// OLD (broken) filters:
// - 'Appetizers' was looking for 'Appetizer' but categories are 'Warm Starters & Crispy Bites'  
// - 'Main Dishes' was looking for 'Main Dish' but categories are 'Signature Entrees & Global Plates'
// 
// NEW (fixed) filters above match the actual category names from constants.ts