import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const AuthButton = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleAuth = () => {
    if (currentUser) {
      logout();
    } else {
      navigate('/signin');
    }
  };

  if (currentUser) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="px-4 py-2 rounded-lg glass flex items-center gap-2
                     transition-all duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] 
                          flex items-center justify-center font-bold text-sm">
            {currentUser.email?.[0].toUpperCase()}
          </div>
          <span className="text-white text-sm">{currentUser.displayName || 'User'}</span>
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 glass rounded-lg p-2 z-50">
            <button
              onClick={logout}
              className="w-full px-4 py-2 text-left text-white hover:bg-white/10 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleAuth}
      className="px-6 py-2.5 rounded-lg font-semibold text-white
                 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                 transition-all duration-300 
                 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/40
                 active:scale-95"
    >
      Sign In
    </button>
  );
};

export default AuthButton;
