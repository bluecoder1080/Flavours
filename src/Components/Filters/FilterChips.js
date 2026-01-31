import React from 'react';

const FilterChips = ({ filters, activeFilters, onToggle }) => {
  const defaultFilters = [
    { id: 'veg', label: '🥬 Pure Veg', color: 'green' },
    { id: 'rating4', label: '⭐ Rating 4.0+', color: 'yellow' },
    { id: 'fast', label: '⚡ Fast Delivery', color: 'blue' },
    { id: 'offers', label: '🎁 Offers', color: 'purple' },
    { id: 'new', label: '✨ New', color: 'orange' },
  ];

  const filterList = filters || defaultFilters;

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {filterList.map((filter) => {
        const isActive = activeFilters?.includes(filter.id);
        return (
          <button
            key={filter.id}
            onClick={() => onToggle(filter.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all
              ${isActive 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25' 
                : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600'}`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
