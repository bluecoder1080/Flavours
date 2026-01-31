import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useOrders } from '../../context/OrderContext';
import { useNavigate } from 'react-router';

const Profile = () => {
  const { user, logout } = useAuth();
  const { orders } = useOrders();
  const navigate = useNavigate();

  const stats = [
    { label: 'Orders', value: orders.length, icon: '📦' },
    { label: 'Favorites', value: 5, icon: '❤️' },
    { label: 'Addresses', value: 2, icon: '📍' },
  ];

  const menuItems = [
    { icon: '📦', label: 'My Orders', path: '/orders', color: 'orange' },
    { icon: '❤️', label: 'Favorites', path: '/favorites', color: 'red' },
    { icon: '📍', label: 'Saved Addresses', path: '/addresses', color: 'blue' },
    { icon: '💳', label: 'Payment Methods', path: '/payments', color: 'green' },
    { icon: '🎁', label: 'Offers & Coupons', path: '/offers', color: 'purple' },
    { icon: '⚙️', label: 'Settings', path: '/settings', color: 'gray' },
    { icon: '❓', label: 'Help & Support', path: '/help', color: 'cyan' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Profile Header */}
        <div className="glass rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">{user?.name || 'Guest User'}</h1>
              <p className="text-gray-400">{user?.email || 'guest@example.com'}</p>
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
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
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
              className={`w-full flex items-center gap-4 p-4 hover:bg-gray-800/50 transition text-left
                ${i !== menuItems.length - 1 ? 'border-b border-gray-800' : ''}`}
            >
              <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center text-xl`}>
                {item.icon}
              </div>
              <span className="flex-1 text-white font-medium">{item.label}</span>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => { logout(); navigate('/'); }}
          className="w-full mt-6 py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-semibold hover:bg-red-500/20 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
