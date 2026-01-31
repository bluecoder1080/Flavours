import React from 'react';
import { Link, useNavigate } from 'react-router';
import { useFavorites, useCart, useAuth } from '../../context';

const Favorites = () => {
  const { favorites, loading, removeFavorite } = useFavorites();
  const { addToCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const restaurants = favorites.filter(f => f.type === 'restaurant');
  const dishes = favorites.filter(f => f.type === 'dish');

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-12">
            <div className="text-6xl mb-6">❤️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Sign in to view favorites</h1>
            <p className="text-gray-400 mb-8">Save your favorite restaurants and dishes for quick access</p>
            <button 
              onClick={() => navigate('/signin')}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleRemove = async (itemId, type) => {
    try {
      await removeFavorite(itemId, type);
    } catch (error) {
      console.error('Failed to remove favorite:', error);
    }
  };

  const handleAddToCart = (dish) => {
    addToCart({
      id: dish.itemId,
      name: dish.name,
      price: dish.price,
      image: dish.image,
      isVeg: dish.isVeg
    });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">My Favorites</h1>
            <p className="text-gray-400 text-sm">{favorites.length} saved items</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : favorites.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">💔</div>
            <h2 className="text-xl font-semibold text-white mb-3">No favorites yet</h2>
            <p className="text-gray-400 mb-8">Start adding restaurants and dishes you love!</p>
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Browse Restaurants
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Favorite Restaurants */}
            {restaurants.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-xl">🍽️</span> Restaurants ({restaurants.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {restaurants.map((restaurant) => (
                    <div key={restaurant._id} className="glass rounded-xl overflow-hidden group">
                      <Link to={`/RestaurantInfo/${restaurant.itemId}`}>
                        <div className="relative h-36 overflow-hidden">
                          <img 
                            src={restaurant.image} 
                            alt={restaurant.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-white font-semibold truncate">{restaurant.name}</h3>
                            <p className="text-gray-300 text-sm">{restaurant.cuisine}</p>
                          </div>
                        </div>
                      </Link>
                      <div className="p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-orange-400">⭐ {restaurant.avgRating}</span>
                          <span className="text-gray-400">{restaurant.deliveryTime}</span>
                        </div>
                        <button 
                          onClick={() => handleRemove(restaurant.itemId, 'restaurant')}
                          className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Favorite Dishes */}
            {dishes.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-xl">🍕</span> Dishes ({dishes.length})
                </h2>
                <div className="space-y-3">
                  {dishes.map((dish) => (
                    <div key={dish._id} className="glass rounded-xl p-4 flex items-center gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={dish.image || 'https://via.placeholder.com/80'} 
                          alt={dish.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${dish.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                            <span className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                          </span>
                          <h3 className="text-white font-medium truncate">{dish.name}</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-1">{dish.restaurantName}</p>
                        <p className="text-orange-400 font-semibold">₹{dish.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleAddToCart(dish)}
                          className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
                        >
                          Add
                        </button>
                        <button 
                          onClick={() => handleRemove(dish.itemId, 'dish')}
                          className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
