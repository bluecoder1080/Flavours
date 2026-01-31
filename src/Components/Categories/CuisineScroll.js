import React from 'react';

const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'biryani', name: 'Biryani', icon: '🍚' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'chinese', name: 'Chinese', icon: '🥡' },
  { id: 'south', name: 'South Indian', icon: '🥘' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'chai', name: 'Chai', icon: '☕' },
];

const CuisineScroll = ({ activeCategory, onSelect }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-white mb-4">What's on your mind?</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex flex-col items-center gap-2 flex-shrink-0 p-3 rounded-xl transition-all
              ${activeCategory === cat.id 
                ? 'bg-orange-500/20 border-orange-500' 
                : 'bg-gray-800/50 hover:bg-gray-800'} border border-transparent`}
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center text-2xl">
              {cat.icon}
            </div>
            <span className={`text-sm font-medium ${activeCategory === cat.id ? 'text-orange-400' : 'text-gray-300'}`}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CuisineScroll;
