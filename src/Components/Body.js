import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import RestaurantCard from '../RestaurantCard';
import Shimmer from './Shimmer';
import SearchBar from './Search/SearchBar';
import FilterChips from './Filters/FilterChips';
import OffersSection from './Offers/OffersSection';
import CuisineScroll from './Categories/CuisineScroll';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { restaurants } from '../data/restaurants';

const Body = () => {
  const [filtered, setFiltered] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // Simulate API call delay for effect
    setTimeout(() => {
      setAllRestaurants(restaurants);
      setFiltered(restaurants);
      setIsLoading(false);
    }, 800);
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFiltered(allRestaurants);
      return;
    }
    const searched = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(query.toLowerCase()) ||
      res.cuisine.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(searched);
  };

  const handleFilterToggle = (filterId) => {
    let newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(f => f !== filterId)
      : [...activeFilters, filterId];
    
    setActiveFilters(newFilters);
    applyFilters(newFilters, activeCategory);
  };

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    applyFilters(activeFilters, catId);
  };

  const applyFilters = (filters, category) => {
    let result = [...allRestaurants];
    
    if (filters.includes('veg')) {
      result = result.filter(r => r.cuisine.toLowerCase().includes('veg') || r.name.toLowerCase().includes('veg'));
    }
    if (filters.includes('rating4')) {
      result = result.filter(r => parseFloat(r.avgRating) >= 4.0);
    }
    if (filters.includes('fast')) {
      result = result.filter(r => (parseInt(r.deliveryTime) || 100) <= 30);
    }
    
    if (category !== 'all') {
      const categoryMap = {
        biryani: ['biryani', 'mughlai'],
        pizza: ['pizza', 'italian'],
        burger: ['burger', 'american'],
        chinese: ['chinese', 'thai', 'asian'],
        south: ['south indian', 'dosa'],
        north: ['north indian', 'punjabi'],
        desserts: ['dessert', 'bakery', 'sweet', 'ice cream'],
        chai: ['chai', 'beverage', 'tea'],
        healthy: ['salad', 'healthy']
      };
      
      const keywords = categoryMap[category] || [category];
      result = result.filter(r => 
        keywords.some(k => r.cuisine.toLowerCase().includes(k) || r.name.toLowerCase().includes(k))
      );
    }
    
    setFiltered(result);
  };

  if (onlineStatus === false) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 animate-fade-in">
        <div className="text-8xl animate-bounce">📡</div>
        <h1 className="text-3xl font-bold text-white">You're Offline</h1>
        <p className="text-gray-400 text-lg">Please check your internet connection</p>
        <button onClick={() => window.location.reload()} className="btn-primary">
          Retry
        </button>
      </div>
    );
  }

  if (isLoading) return <Shimmer />;

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-[1400px] mx-auto animate-fade-in pb-20">
      
      {/* Search & Hero Section */}
      <div className="mb-8 max-w-2xl mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Offers Section */}
      <OffersSection />

      {/* Cuisine Categories */}
      <CuisineScroll activeCategory={activeCategory} onSelect={handleCategorySelect} />

      {/* Filters & Results Layout */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-start sticky top-20 z-20 bg-gradient-to-b from-[var(--color-bg)] to-transparent pb-4 pt-2 -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex-1 w-full flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-orange-500">
                {filtered.length}
              </span> 
              Restaurants near you
            </h2>
            
            {(activeFilters.length > 0 || activeCategory !== 'all') && (
              <button 
                onClick={() => { setActiveFilters([]); setActiveCategory('all'); setFiltered(allRestaurants); }}
                className="text-orange-500 text-sm font-medium hover:underline flex items-center gap-1"
              >
                <span>✕</span> Clear filters
              </button>
            )}
        </div>
      </div>
      
      <div className="mb-8">
        <FilterChips activeFilters={activeFilters} onToggle={handleFilterToggle} />
      </div>

      {/* Restaurant Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-gray-900/30 rounded-3xl border border-gray-800 border-dashed">
          <div className="text-7xl mb-6 opacity-80">🍽️</div>
          <h3 className="text-2xl text-white font-bold mb-3">No restaurants found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            We couldn't find any restaurants matching your current filters. Try changing your search or category.
          </p>
          <button 
            onClick={() => { setActiveFilters([]); setActiveCategory('all'); setFiltered(allRestaurants); }}
            className="mt-6 btn-outline"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filtered.map((restaurant) => (
            <Link 
              to={`/RestaurantInfo/${restaurant.id}`} 
              key={restaurant.id} 
              className="block h-full"
            >
              <RestaurantCard resdata={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
