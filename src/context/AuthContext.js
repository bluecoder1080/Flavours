import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  // Base URL for API
  const API_URL = 'http://localhost:5002/api/auth';

  useEffect(() => {
    const loadUser = async () => {
      const storedToken = localStorage.getItem('authToken');
      
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/me`, {
          headers: {
            'Authorization': `Bearer ${storedToken}`
          }
        });

        const data = await response.json();

        if (data.success) {
          setCurrentUser(data.user);
          setToken(storedToken);
        } else {
          localStorage.removeItem('authToken');
          setToken(null);
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Failed to load user', error);
        localStorage.removeItem('authToken');
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signup = async (email, password, displayName) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, displayName })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to sign up');
    }

    localStorage.setItem('authToken', data.token);
    setToken(data.token);
    setCurrentUser(data.user);
    return data;
  };

  const signin = async (email, password) => {
    const response = await fetch(`${API_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to sign in');
    }

    localStorage.setItem('authToken', data.token);
    setToken(data.token);
    setCurrentUser(data.user);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      user: currentUser, // Alias for compatibility
      token,
      signup,
      signin,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
