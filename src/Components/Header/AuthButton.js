import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const AuthButton = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  if (currentUser) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl glass transition-all hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center font-bold text-sm text-white">
            {currentUser.name?.[0]?.toUpperCase() || currentUser.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <span className="text-white text-sm hidden sm:block">{currentUser.name || 'User'}</span>
          <svg className={`w-4 h-4 text-gray-400 transition-transform ${showMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showMenu && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
            <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 z-50 overflow-hidden">
              {/* User Info */}
              <div className="p-4 border-b border-gray-800">
                <p className="text-white font-medium">{currentUser.name || 'User'}</p>
                <p className="text-gray-500 text-sm">{currentUser.email}</p>
              </div>
              
              {/* Menu Items */}
              <div className="py-2">
                <button onClick={() => { navigate('/profile'); setShowMenu(false); }} className="w-full px-4 py-2.5 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                  <span>👤</span> My Profile
                </button>
                <button onClick={() => { navigate('/orders'); setShowMenu(false); }} className="w-full px-4 py-2.5 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                  <span>📦</span> My Orders
                </button>
                <button onClick={() => { navigate('/favorites'); setShowMenu(false); }} className="w-full px-4 py-2.5 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                  <span>❤️</span> Favorites
                </button>
                <button onClick={() => { navigate('/offers'); setShowMenu(false); }} className="w-full px-4 py-2.5 text-left text-gray-300 hover:bg-gray-800 flex items-center gap-3">
                  <span>🎁</span> Offers
                </button>
              </div>
              
              {/* Logout */}
              <div className="border-t border-gray-800 p-2">
                <button onClick={() => { logout(); setShowMenu(false); navigate('/'); }} className="w-full px-4 py-2.5 text-left text-red-400 hover:bg-red-500/10 rounded-lg flex items-center gap-3">
                  <span>🚪</span> Logout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => navigate('/signin')}
      className="px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
    >
      Sign In
    </button>
  );
};

export default AuthButton;
