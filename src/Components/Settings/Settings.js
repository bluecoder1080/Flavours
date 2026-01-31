import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context';
import API_URL from '../../config';

const Settings = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false
  });
  const [darkMode, setDarkMode] = useState(true);
  const [editModal, setEditModal] = useState(null); // 'name' or 'phone'
  const [editValue, setEditValue] = useState('');

  // Extract name from email if displayName is not set
  const getUserName = () => {
    if (currentUser?.displayName) return currentUser.displayName;
    if (currentUser?.name) return currentUser.name;
    if (currentUser?.email) {
      const emailName = currentUser.email.split('@')[0];
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }
    return 'Not set';
  };

  const displayName = getUserName();

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-12">
            <div className="text-6xl mb-6">⚙️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Sign in to access settings</h1>
            <p className="text-gray-400 mb-8">Manage your account preferences</p>
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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openEditModal = (field, currentValue) => {
    setEditModal(field);
    setEditValue(currentValue || '');
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const updateData = editModal === 'Name' 
        ? { displayName: editValue } 
        : { phone: editValue };

      const response = await fetch(`${API_URL}/auth/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();

      if (data.success) {
        // Reload the page to refresh user data
        window.location.reload();
      } else {
        alert('Failed to update: ' + data.error);
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update. Please try again.');
    }
    setEditModal(null);
    setEditValue('');
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Edit Modal */}
        {editModal && (
          <>
            <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setEditModal(null)} />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Edit {editModal}</h3>
                <input
                  type={editModal === 'phone' ? 'tel' : 'text'}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  placeholder={`Enter your ${editModal}`}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none mb-4"
                />
                <div className="flex gap-3">
                  <button 
                    onClick={() => setEditModal(null)}
                    className="flex-1 py-3 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSaveEdit}
                    className="flex-1 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>

        <div className="space-y-4">
          {/* Account Section */}
          <div className="glass rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">👤</span> Account
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <p className="text-white font-medium">Name</p>
                  <p className="text-gray-400 text-sm">{displayName}</p>
                </div>
                <button 
                  onClick={() => openEditModal('Name', displayName !== 'Not set' ? displayName : '')}
                  className="text-orange-400 text-sm hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">{currentUser?.email}</p>
                </div>
                <span className="text-green-400 text-sm">Verified</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400 text-sm">{currentUser?.phone || 'Not set'}</p>
                </div>
                <button 
                  onClick={() => openEditModal('Phone', currentUser?.phone || '')}
                  className="text-orange-400 text-sm hover:underline"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="glass rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🔔</span> Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <p className="text-white font-medium">Order Updates</p>
                  <p className="text-gray-400 text-sm">Get notified about your order status</p>
                </div>
                <button 
                  onClick={() => setNotifications({...notifications, orderUpdates: !notifications.orderUpdates})}
                  className={`w-12 h-6 rounded-full transition-colors relative ${notifications.orderUpdates ? 'bg-orange-500' : 'bg-gray-700'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications.orderUpdates ? 'right-1' : 'left-1'}`}></span>
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-800">
                <div>
                  <p className="text-white font-medium">Promotions</p>
                  <p className="text-gray-400 text-sm">Receive offers and discounts</p>
                </div>
                <button 
                  onClick={() => setNotifications({...notifications, promotions: !notifications.promotions})}
                  className={`w-12 h-6 rounded-full transition-colors relative ${notifications.promotions ? 'bg-orange-500' : 'bg-gray-700'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications.promotions ? 'right-1' : 'left-1'}`}></span>
                </button>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-white font-medium">Newsletter</p>
                  <p className="text-gray-400 text-sm">Weekly food recommendations</p>
                </div>
                <button 
                  onClick={() => setNotifications({...notifications, newsletter: !notifications.newsletter})}
                  className={`w-12 h-6 rounded-full transition-colors relative ${notifications.newsletter ? 'bg-orange-500' : 'bg-gray-700'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications.newsletter ? 'right-1' : 'left-1'}`}></span>
                </button>
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="glass rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🎨</span> Appearance
            </h2>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-white font-medium">Dark Mode</p>
                <p className="text-gray-400 text-sm">Use dark theme</p>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-orange-500' : 'bg-gray-700'}`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${darkMode ? 'right-1' : 'left-1'}`}></span>
              </button>
            </div>
          </div>

          {/* Security Section */}
          <div className="glass rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🔒</span> Security
            </h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <span className="text-white">Change Password</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <span className="text-white">Two-Factor Authentication</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="glass rounded-xl p-5 border border-red-500/30">
            <h2 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span> Danger Zone
            </h2>
            <div className="space-y-3">
              <button 
                onClick={handleLogout}
                className="w-full py-3 rounded-lg bg-red-500/10 text-red-400 font-medium hover:bg-red-500/20 transition-colors"
              >
                Logout
              </button>
              <button className="w-full py-3 rounded-lg border border-red-500/50 text-red-400 font-medium hover:bg-red-500/10 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
