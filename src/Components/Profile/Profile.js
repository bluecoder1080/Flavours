import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useOrders } from '../../context/OrderContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useAddresses } from '../../context/AddressContext';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const { orders } = useOrders();
  const { favorites } = useFavorites();
  const { addresses } = useAddresses();
  const navigate = useNavigate();

  const stats = [
    { label: 'Orders', value: orders.length, icon: '📦' },
    { label: 'Favorites', value: favorites.length, icon: '❤️' },
    { label: 'Addresses', value: addresses.length, icon: '📍' },
  ];

  const menuItems = [
    { icon: '📦', label: 'My Orders', path: '/orders', colorClass: 'bg-orange-500/20 text-orange-400' },
    { icon: '❤️', label: 'Favorites', path: '/favorites', colorClass: 'bg-red-500/20 text-red-400' },
    { icon: '📍', label: 'Saved Addresses', path: '/addresses', colorClass: 'bg-blue-500/20 text-blue-400' },
    { icon: '💳', label: 'Payment Methods', path: '/payments', colorClass: 'bg-green-500/20 text-green-400' },
    { icon: '🎁', label: 'Offers & Coupons', path: '/offers', colorClass: 'bg-purple-500/20 text-purple-400' },
    { icon: '⚙️', label: 'Settings', path: '/settings', colorClass: 'bg-gray-500/20 text-gray-400' },
    { icon: '❓', label: 'Help & Support', path: '/help', colorClass: 'bg-cyan-500/20 text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8 animate-fade-in">
      <div className="max-w-2xl mx-auto px-4">
        {/* Profile Header */}
        <div className="glass rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">{currentUser?.name || 'Guest User'}</h1>
              <p className="text-gray-400">{currentUser?.email || 'guest@example.com'}</p>
              <p className="text-gray-500 text-sm mt-1">📱 +91 98765 43210</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-orange-500 text-orange-400 hover:bg-orange-500/10 transition">
              Edit
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center hover:bg-gray-800/50 transition-colors">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="glass rounded-2xl overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 p-4 hover:bg-gray-800/50 transition text-left group
                ${i !== menuItems.length - 1 ? 'border-b border-gray-800' : ''}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-transform group-hover:scale-110 ${item.colorClass}`}>
                {item.icon}
              </div>
              <span className="flex-1 text-white font-medium group-hover:text-orange-400 transition-colors">{item.label}</span>
              <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => { logout(); navigate('/'); }}
          className="w-full mt-6 py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-semibold hover:bg-red-500/20 transition flex items-center justify-center gap-2"
        >
          <span>🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
