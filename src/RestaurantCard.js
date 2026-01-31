import React from 'react';
import { useFavorites } from './context/FavoritesContext';

const RestaurantCard = ({ resdata }) => {
  const { name, cuisine, avgRating, deliveryTime, costForTwo, image, id } = resdata; // Ensure 'id' is available
  const { toggleFavorite, isFavorited } = useFavorites();
  
  // Use id or fallback to some unique identifier if id is missing in resdata
  const restaurantId = id || resdata._id; // Adjust based on your data structure
  const isLiked = isFavorited(restaurantId, 'restaurant');

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevent navigation if wrapped in Link
    e.stopPropagation();
    toggleFavorite({
      itemId: restaurantId,
      type: 'restaurant',
      name,
      image,
      cuisine,
      avgRating,
      deliveryTime,
      costForTwo
    });
  };

  return (
    <div className="glass rounded-2xl overflow-hidden transition-all duration-300
                    hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10
                    group relative h-full flex flex-col cursor-pointer">
      
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
        
        {/* Favorite Button */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform active:scale-90 hover:bg-black/60 z-10"
        >
          <span className={`text-xl transition-colors ${isLiked ? 'text-red-500 scale-110' : 'text-white/70'}`}>
            {isLiked ? '❤️' : '🤍'}
          </span>
        </button>

        {/* Overlay Info */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-0.5 truncate leading-tight shadow-sm text-shadow">
            {name}
          </h3>
          <p className="text-sm text-gray-300 truncate opacity-90">{cuisine}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 flex justify-between items-center bg-transparent flex-grow">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-green-900/40 border border-green-700/50">
          <span className="text-green-400 text-xs">⭐</span>
          <span className="font-bold text-white text-sm">{avgRating}</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-400 text-sm">
          <span>🕒</span>
          <span>{deliveryTime} mins</span>
        </div>
        
        <div className="text-sm font-semibold text-gray-300">
          {costForTwo}
        </div>
      </div>

      {/* Promo Tag (Optional - placeholder logic) */}
      {Number(avgRating) >= 4.0 && (
        <div className="absolute top-0 left-0 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-br-lg shadow-lg z-10 uppercase tracking-wide">
          Top Rated
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;