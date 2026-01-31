import React, { useState } from 'react';
import { useParams } from 'react-router';
import { menuData } from './data/menuData';
import { restaurants } from './data/restaurants';
import { useCart } from './context/CartContext';

const RestaurantInfo = () => {
  const { resid } = useParams();
  const { addToCart, cartItems } = useCart();
  const { toggleFavorite, isFavorited } = useFavorites();
  const [expandedCategory, setExpandedCategory] = useState(0);

  const restaurant = restaurants.find(r => r.id === resid);
  const menu = menuData[resid];

  if (!restaurant || !menu) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Restaurant not found</h1>
          <Link to="/" className="text-orange-500 hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  const isLiked = isFavorited(restaurant.id, 'restaurant');

  const handleFavoriteClick = () => {
    toggleFavorite({
      itemId: restaurant.id,
      type: 'restaurant',
      name: restaurant.name,
      image: restaurant.image,
      cuisine: restaurant.cuisine,
      avgRating: restaurant.avgRating,
      deliveryTime: restaurant.deliveryTime,
      costForTwo: restaurant.costForTwo
    });
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const getItemQuantity = (itemId) => {
    const item = cartItems.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-5xl mx-auto animate-fade-in pb-24">
      {/* Restaurant Header */}
      <div className="glass rounded-3xl p-6 sm:p-10 mb-8 animate-slide-up relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
          <div className="relative">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-2xl ring-4 ring-white/10"
            />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-between mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {restaurant.name}
              </h1>
              <button 
                onClick={handleFavoriteClick}
                className="hidden sm:flex w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center transition-all active:scale-95"
              >
                 <span className={`text-xl ${isLiked ? 'text-red-500 scale-110' : 'text-gray-400'}`}>
                    {isLiked ? '❤️' : '🤍'}
                 </span>
              </button>
            </div>
            
            <p className="text-gray-400 text-lg mb-4">{restaurant.cuisine}</p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-900/30 border border-green-800">
                <span className="text-green-500 text-base">⭐</span>
                <span className="text-white font-bold">{restaurant.avgRating}</span>
                <span className="text-gray-400 border-l border-gray-600 pl-2 ml-1">1K+ ratings</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-xl">🕒</span>
                <span className="text-white font-medium">{restaurant.deliveryTime}</span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700">
                <span className="text-xl">💰</span>
                <span className="text-white font-medium">{restaurant.costForTwo} for two</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Favorite Button */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 sm:hidden w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center"
        >
            <span className={`text-xl ${isLiked ? 'text-red-500' : 'text-white'}`}>
              {isLiked ? '❤️' : '🤍'}
            </span>
        </button>
      </div>

      {/* Menu Categories */}
      <div className="space-y-6">
        {menu.categories.map((category, catIndex) => (
          <div key={catIndex} className="glass rounded-2xl overflow-hidden border border-gray-800/50">
            <button
              onClick={() => setExpandedCategory(expandedCategory === catIndex ? -1 : catIndex)}
              className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
            >
              <h2 className="text-xl font-bold text-white">
                {category.title} <span className="text-gray-500 text-lg font-normal ml-2">({category.items.length})</span>
              </h2>
              <span className={`text-gray-400 transition-transform duration-300 ${expandedCategory === catIndex ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </button>

            {expandedCategory === catIndex && (
              <div className="p-6 pt-0 space-y-6 animate-fade-in">
                <div className="h-px bg-gray-800 mb-6" />
                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start gap-4 group">
                    <div className="flex-1 space-y-2">
                       <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${item.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                          <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                       </span>
                      <h3 className="font-bold text-white text-lg">{item.name}</h3>
                      <p className="text-white font-medium">₹{item.price}</p>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                    
                    <div className="relative w-32 h-32 sm:w-40 sm:h-36 flex-shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center text-3xl">🍲</div>
                      )}
                      
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                        {getItemQuantity(item.id) > 0 ? (
                            <div className="flex items-center bg-white text-green-600 rounded-lg shadow-lg font-bold border border-gray-200 overflow-hidden min-w-[100px]">
                              <button className="px-3 py-2 hover:bg-gray-100 text-lg">-</button>
                              <span className="flex-1 text-center px-1">{getItemQuantity(item.id)}</span>
                              <button onClick={() => handleAddToCart(item)} className="px-3 py-2 hover:bg-gray-100 text-lg">+</button>
                            </div>
                        ) : (
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="px-8 py-2 rounded-lg font-bold text-green-600 bg-white shadow-lg hover:bg-gray-50 transition-colors uppercase text-sm tracking-wide border border-gray-200"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantInfo;
