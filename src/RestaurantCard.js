import React from 'react';

const RestaurantCard = ({ resdata }) => {
  const { name, cuisine, avgRating, deliveryTime, costForTwo, image } = resdata;

  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300
                    hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/20
                    animate-slide-up cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300
                     hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-300">{cuisine}</p>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-[var(--color-primary)]">⭐</span>
          <span className="font-semibold text-white">{avgRating}</span>
        </div>
        <span className="text-sm text-gray-400">{deliveryTime}</span>
        <span className="text-sm font-semibold text-[var(--color-accent)]">
          {costForTwo}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;