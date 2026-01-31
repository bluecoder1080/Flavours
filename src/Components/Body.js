import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import RestaurantCard from '../RestaurantCard';
import Shimmer from './Shimmer';
import SearchBar from './Body/SearchBar';
import FilterBar from './Body/FilterBar';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { restaurants } from '../data/restaurants';

const Body = () => {
  const [filtered, setFiltered] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setAllRestaurants(restaurants);
      setFiltered(restaurants);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSearch = () => {
    const searched = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(searched);
  };

  const handleFilterTopRated = () => {
    const topRated = allRestaurants.filter(
      (res) => parseFloat(res.avgRating) > 4.2
    );
    setFiltered(topRated);
    setIsFiltered(true);
  };

  const handleClearFilter = () => {
    setFiltered(allRestaurants);
    setIsFiltered(false);
  };

  if (!onlineStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-white">🔌 You're Offline</h1>
      </div>
    );
  }

  if (isLoading) return <Shimmer />;

  return (
    <div className="min-h-screen px-6 py-8 max-w-7xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
          onSearch={handleSearch}
        />
        <FilterBar
          onFilterTopRated={handleFilterTopRated}
          onClearFilter={handleClearFilter}
          isFiltered={isFiltered}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((restaurant) => (
          <Link
            to={`/RestaurantInfo/${restaurant.id}`}
            key={restaurant.id}
            className="block"
          >
            <RestaurantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
