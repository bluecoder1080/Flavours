import React from 'react';

const FilterBar = ({ onFilterTopRated, onClearFilter, isFiltered }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onFilterTopRated}
        className={`
          px-6 py-2.5 rounded-lg font-semibold transition-all duration-300
          ${isFiltered 
            ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white scale-105' 
            : 'glass text-white hover:scale-105'}
          hover:shadow-lg hover:shadow-[var(--color-primary)]/20
        `}
      >
        ⭐ Top Rated
      </button>
      
      {isFiltered && (
        <button
          onClick={onClearFilter}
          className="px-6 py-2.5 rounded-lg font-semibold glass text-white
                     transition-all duration-300 hover:scale-105
                     hover:shadow-lg hover:shadow-red-500/20"
        >
          Clear Filter
        </button>
      )}
    </div>
  );
};

export default FilterBar;
