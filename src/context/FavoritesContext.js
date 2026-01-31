import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};

const API_URL = 'http://localhost:5002/api';

export const FavoritesProvider = ({ children }) => {
  const { token, currentUser } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch favorites when user logs in
  useEffect(() => {
    if (token && currentUser) {
      fetchFavorites();
    } else {
      setFavorites([]);
    }
  }, [token, currentUser]);

  const fetchFavorites = async () => {
    if (!token) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/favorites`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFavorites(data.favorites || []);
      }
    } catch (error) {
      console.error('Failed to fetch favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (item) => {
    if (!token) {
      throw new Error('Please sign in to add favorites');
    }

    try {
      const response = await fetch(`${API_URL}/favorites/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(item)
      });

      const data = await response.json();

      if (data.success) {
        setFavorites(prev => [...prev, data.favorite]);
        return data.favorite;
      }
      throw new Error(data.error);
    } catch (error) {
      console.error('Failed to add favorite:', error);
      throw error;
    }
  };

  const removeFavorite = async (itemId, type) => {
    if (!token) {
      throw new Error('Please sign in to remove favorites');
    }

    try {
      const response = await fetch(`${API_URL}/favorites/remove/${itemId}?type=${type}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setFavorites(prev => prev.filter(f => !(f.itemId === itemId && f.type === type)));
      }
    } catch (error) {
      console.error('Failed to remove favorite:', error);
      throw error;
    }
  };

  const toggleFavorite = async (item) => {
    if (!token) {
      throw new Error('Please sign in to manage favorites');
    }

    try {
      const response = await fetch(`${API_URL}/favorites/toggle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(item)
      });

      const data = await response.json();

      if (data.success) {
        if (data.isFavorited) {
          setFavorites(prev => [...prev, data.favorite]);
        } else {
          setFavorites(prev => prev.filter(f => !(f.itemId === item.itemId && f.type === item.type)));
        }
        return data.isFavorited;
      }
      throw new Error(data.error);
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
      throw error;
    }
  };

  const isFavorited = (itemId, type) => {
    return favorites.some(f => f.itemId === itemId && f.type === type);
  };

  const getFavoritesByType = (type) => {
    return favorites.filter(f => f.type === type);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      loading,
      addFavorite,
      removeFavorite,
      toggleFavorite,
      isFavorited,
      getFavoritesByType,
      fetchFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};
