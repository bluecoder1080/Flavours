import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const groceryCategories = [
  { id: 'all', name: 'All', icon: '🛒' },
  { id: 'fruits', name: 'Fruits', icon: '🍎' },
  { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
  { id: 'dairy', name: 'Dairy', icon: '🥛' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'beverages', name: 'Beverages', icon: '🧃' },
  { id: 'bakery', name: 'Bakery', icon: '🍞' },
];

const groceryItems = [
  // Fruits
  { id: 'g1', name: 'Fresh Apples', price: 120, unit: '1 kg', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200', category: 'fruits', isVeg: true },
  { id: 'g2', name: 'Bananas', price: 45, unit: '1 dozen', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200', category: 'fruits', isVeg: true },
  { id: 'g3', name: 'Oranges', price: 80, unit: '1 kg', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=200', category: 'fruits', isVeg: true },
  { id: 'g4', name: 'Grapes', price: 95, unit: '500 g', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200', category: 'fruits', isVeg: true },
  
  // Vegetables
  { id: 'g5', name: 'Fresh Tomatoes', price: 40, unit: '1 kg', image: 'https://images.unsplash.com/photo-1546470427-227c7b5d8c81?w=200', category: 'vegetables', isVeg: true },
  { id: 'g6', name: 'Potatoes', price: 35, unit: '1 kg', image: 'https://images.unsplash.com/photo-1518977676601-b53f82ber86?w=200', category: 'vegetables', isVeg: true },
  { id: 'g7', name: 'Onions', price: 30, unit: '1 kg', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200', category: 'vegetables', isVeg: true },
  { id: 'g8', name: 'Spinach', price: 25, unit: '250 g', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200', category: 'vegetables', isVeg: true },
  
  // Dairy
  { id: 'g9', name: 'Fresh Milk', price: 60, unit: '1 L', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200', category: 'dairy', isVeg: true },
  { id: 'g10', name: 'Curd', price: 45, unit: '400 g', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200', category: 'dairy', isVeg: true },
  { id: 'g11', name: 'Paneer', price: 120, unit: '200 g', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200', category: 'dairy', isVeg: true },
  { id: 'g12', name: 'Cheese', price: 95, unit: '200 g', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200', category: 'dairy', isVeg: true },
  
  // Snacks
  { id: 'g13', name: 'Potato Chips', price: 35, unit: '150 g', image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200', category: 'snacks', isVeg: true },
  { id: 'g14', name: 'Cookies', price: 45, unit: '200 g', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200', category: 'snacks', isVeg: true },
  { id: 'g15', name: 'Namkeen Mix', price: 55, unit: '400 g', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200', category: 'snacks', isVeg: true },
  
  // Beverages
  { id: 'g16', name: 'Orange Juice', price: 85, unit: '1 L', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200', category: 'beverages', isVeg: true },
  { id: 'g17', name: 'Cold Coffee', price: 45, unit: '200 ml', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200', category: 'beverages', isVeg: true },
  { id: 'g18', name: 'Green Tea', price: 150, unit: '100 bags', image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=200', category: 'beverages', isVeg: true },
  
  // Bakery
  { id: 'g19', name: 'Bread', price: 35, unit: '400 g', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200', category: 'bakery', isVeg: true },
  { id: 'g20', name: 'Croissants', price: 120, unit: '4 pcs', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200', category: 'bakery', isVeg: true },
];

const Groceries = () => {
  const { addToCart, cartItems } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = groceryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getItemQuantity = (itemId) => {
    const item = cartItems.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      isVeg: item.isVeg
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Groceries</h1>
          <p className="text-gray-400">Fresh produce & daily essentials delivered to your doorstep</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search groceries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-orange-500/50 focus:outline-none transition-all"
          />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {groceryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap
                  ${activeCategory === cat.id 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'}`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredItems.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl text-white mb-2">No items found</h3>
            <p className="text-gray-400">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="glass rounded-xl overflow-hidden group">
                <div className="relative aspect-square overflow-hidden bg-gray-900">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200?text=' + encodeURIComponent(item.name);
                    }}
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`w-5 h-5 rounded border-2 flex items-center justify-center ${item.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-white font-medium text-sm mb-1 truncate">{item.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{item.unit}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 font-semibold">₹{item.price}</span>
                    {getItemQuantity(item.id) > 0 ? (
                      <span className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 text-sm font-medium">
                        {getItemQuantity(item.id)} added
                      </span>
                    ) : (
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Delivery Info */}
        <div className="mt-12 glass rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="text-white font-semibold">Free Delivery</h3>
              <p className="text-gray-400 text-sm">Orders above ₹299</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="text-white font-semibold">Express Delivery</h3>
              <p className="text-gray-400 text-sm">Get in 30-45 mins</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✨</div>
              <h3 className="text-white font-semibold">Fresh Guaranteed</h3>
              <p className="text-gray-400 text-sm">Quality checked products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groceries;