import React, { useState } from 'react';
import { useParams } from 'react-router';
import { menuData } from './data/menuData';
import { restaurants } from './data/restaurants';
import { useCart } from './context/CartContext';

const RestaurantInfo = () => {
  const { resid } = useParams();
  const { addToCart } = useCart();
  const [expandedCategory, setExpandedCategory] = useState(0);

  const restaurant = restaurants.find(r => r.id === resid);
  const menu = menuData[resid];

  if (!restaurant || !menu) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-white">Restaurant not found</h1>
      </div>
    );
  }

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="min-h-screen px-6 py-8 max-w-5xl mx-auto animate-fade-in">
      {/* Restaurant Header */}
      <div className="glass rounded-xl p-8 mb-8 animate-slide-up">
        <div className="flex items-start gap-6">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gradient mb-2">
              {restaurant.name}
            </h1>
            <p className="text-gray-400 mb-3">{restaurant.cuisine}</p>
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1">
                <span className="text-[var(--color-primary)]">⭐</span>
                <span className="text-white font-semibold">{restaurant.avgRating}</span>
              </span>
              <span className="text-gray-400">{restaurant.deliveryTime}</span>
              <span className="text-[var(--color-accent)]">{restaurant.costForTwo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-4">
        {menu.categories.map((category, catIndex) => (
          <div key={catIndex} className="glass rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === catIndex ? -1 : catIndex)}
              className="w-full p-5 flex justify-between items-center text-left
                         hover:bg-white/5 transition"
            >
              <h2 className="text-xl font-bold text-white">
                {category.title} ({category.items.length})
              </h2>
              <span className="text-[var(--color-primary)]">
                {expandedCategory === catIndex ? '▲' : '▼'}
              </span>
            </button>

            {expandedCategory === catIndex && (
              <div className="p-5 pt-0 space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start gap-4 
                                                 p-4 rounded-lg bg-black/20">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                      <p className="text-[var(--color-accent)] font-bold">₹{item.price}</p>
                    </div>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                    )}
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="px-6 py-2 rounded-lg font-semibold
                                 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                                 hover:scale-105 transition-transform"
                    >
                      Add +
                    </button>
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
