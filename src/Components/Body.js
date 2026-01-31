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
    setTimeout(() => {
      setAllRestaurants(restaurants);
      setFiltered(restaurants);
      setIsLoading(false);
    }, 500);
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
      result = result.filter(r => parseInt(r.deliveryTime) <= 25);
    }
    
    if (category !== 'all') {
      const categoryMap = {
        biryani: ['biryani'],
        pizza: ['pizza', 'italian'],
        burger: ['burger', 'american'],
        chinese: ['chinese', 'thai', 'asian'],
        south: ['south indian', 'dosa'],
        desserts: ['dessert', 'bakery', 'sweet'],
        chai: ['chai', 'beverage', 'tea']
      };
      const keywords = categoryMap[category] || [];
      result = result.filter(r => 
        keywords.some(k => r.cuisine.toLowerCase().includes(k) || r.name.toLowerCase().includes(k))
      );
    }
    
    setFiltered(result);
  };

  if (!onlineStatus) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-6xl">📡</div>
        <h1 className="text-2xl font-bold text-white">You're Offline</h1>
        <p className="text-gray-400">Please check your internet connection</p>
      </div>
    );
  }

  if (isLoading) return <Shimmer />;

  return (
    <div className="min-h-screen px-4 sm:px-6 py-6 max-w-7xl mx-auto animate-fade-in">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Offers Section */}
      <OffersSection />

      {/* Cuisine Categories */}
      <CuisineScroll activeCategory={activeCategory} onSelect={handleCategorySelect} />

      {/* Filter Chips */}
      <div className="mb-6">
        <FilterChips activeFilters={activeFilters} onToggle={handleFilterToggle} />
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">
          {filtered.length} restaurants
          {activeCategory !== 'all' && <span className="text-orange-400"> in {activeCategory}</span>}
        </h2>
        {(activeFilters.length > 0 || activeCategory !== 'all') && (
          <button 
            onClick={() => { setActiveFilters([]); setActiveCategory('all'); setFiltered(allRestaurants); }}
            className="text-orange-400 text-sm hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Restaurant Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl text-white mb-2">No restaurants found</h3>
          <p className="text-gray-400">Try different filters or search terms</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((restaurant) => (
            <Link to={`/RestaurantInfo/${restaurant.id}`} key={restaurant.id} className="block">
              <RestaurantCard resdata={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
