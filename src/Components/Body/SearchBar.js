import React from 'react';

const SearchBar = ({ searchText, onSearchChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search restaurants..."
        className="w-64 px-4 py-2.5 pl-10 rounded-lg glass text-white
                   placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-[var(--color-primary)]
                   transition-all duration-300"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <button
        onClick={onSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1
                   bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                   rounded-md text-sm font-semibold transition-all duration-300
                   hover:scale-105"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
