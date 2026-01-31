import React, { useRef } from 'react';

const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'biryani', name: 'Biryani', icon: '🥘' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burger', icon: '🍔' },
  { id: 'chinese', name: 'Chinese', icon: '🍜' },
  { id: 'south', name: 'South Indian', icon: '🥥' },
  { id: 'north', name: 'North Indian', icon: '🍛' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'chai', name: 'Chai', icon: '☕' },
  { id: 'healthy', name: 'Healthy', icon: '🥗' },
];

const CuisineScroll = ({ activeCategory, onSelect }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      if (direction === 'left') {
        current.scrollLeft -= 200;
      } else {
        current.scrollLeft += 200;
      }
    }
  };

  return (
    <div className="mb-10 animate-fade-in delay-100">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          What's on your mind?
        </h2>
        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-2">
           <button 
             onClick={() => scroll('left')}
             className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
           >
             ←
           </button>
           <button 
             onClick={() => scroll('right')}
             className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
           >
             →
           </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x scroll-smooth"
      >
        {categories.map((cat, index) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex flex-col items-center gap-3 flex-shrink-0 min-w-[7rem] bg-transparent border-0 group snap-start`}
          >
            <div className={`
              w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-lg transition-all duration-300 relative overflow-hidden group-hover:scale-105
              ${activeCategory === cat.id 
                ? 'bg-gradient-to-br from-orange-500 to-red-600 ring-2 ring-offset-2 ring-offset-[#0e1117] ring-orange-500' 
                : 'bg-[#1e232b] hover:bg-[#252b36] group-hover:shadow-orange-500/20'}
            `}>
               <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">{cat.icon}</span>
               {activeCategory === cat.id && (
                 <div className="absolute inset-0 bg-white/10" />
               )}
            </div>
            
            <span className={`text-base font-medium transition-colors ${
              activeCategory === cat.id 
                ? 'text-orange-500' 
                : 'text-gray-400 group-hover:text-white'
            }`}>
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CuisineScroll;
