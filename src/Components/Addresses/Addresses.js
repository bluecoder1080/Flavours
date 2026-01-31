import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAddresses } from '../../context';
import { useAuth } from '../../context';

const Addresses = () => {
  const { addresses, loading, addAddress, updateAddress, deleteAddress, setAsDefault } = useAddresses();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '', phone: '', flat: '', area: '', landmark: '', city: '', type: 'Home'
  });

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="glass rounded-2xl p-12">
            <div className="text-6xl mb-6">📍</div>
            <h1 className="text-2xl font-bold text-white mb-4">Sign in to manage addresses</h1>
            <p className="text-gray-400 mb-8">Save your delivery addresses for faster checkout</p>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateAddress(editingId, formData);
      } else {
        await addAddress(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Failed to save address:', error);
    }
  };

  const handleEdit = (address) => {
    setFormData({
      name: address.name,
      phone: address.phone,
      flat: address.flat,
      area: address.area,
      landmark: address.landmark || '',
      city: address.city,
      type: address.type
    });
    setEditingId(address._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      try {
        await deleteAddress(id);
      } catch (error) {
        console.error('Failed to delete address:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', flat: '', area: '', landmark: '', city: '', type: 'Home' });
    setEditingId(null);
    setShowForm(false);
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Home': return '🏠';
      case 'Work': return '💼';
      default: return '📍';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Saved Addresses</h1>
              <p className="text-gray-400 text-sm">{addresses.length} addresses</p>
            </div>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="px-4 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New
          </button>
        </div>

        {/* Address Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Address' : 'Add New Address'}</h2>
                <button onClick={resetForm} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone *" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Flat / House No *" 
                  value={formData.flat} 
                  onChange={(e) => setFormData({...formData, flat: e.target.value})}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Area / Locality *" 
                  value={formData.area} 
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Landmark (optional)" 
                  value={formData.landmark} 
                  onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                />
                <input 
                  type="text" 
                  placeholder="City *" 
                  value={formData.city} 
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                  required
                />
                
                <div className="flex gap-2">
                  {['Home', 'Work', 'Other'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({...formData, type})}
                      className={`flex-1 py-2 px-3 rounded-lg border text-sm transition-all ${
                        formData.type === type 
                          ? 'border-orange-500 bg-orange-500/20 text-orange-400' 
                          : 'border-gray-700 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {getTypeIcon(type)} {type}
                    </button>
                  ))}
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                >
                  {editingId ? 'Update Address' : 'Save Address'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Address List */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : addresses.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">🏠</div>
            <h2 className="text-xl font-semibold text-white mb-3">No saved addresses</h2>
            <p className="text-gray-400 mb-8">Add your first delivery address</p>
            <button 
              onClick={() => setShowForm(true)}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Add Address
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address._id} className="glass rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {getTypeIcon(address.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold">{address.type}</h3>
                      {address.isDefault && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">Default</span>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-1">{address.name} • {address.phone}</p>
                    <p className="text-gray-400 text-sm">
                      {address.flat}, {address.area}
                      {address.landmark && `, ${address.landmark}`}
                      , {address.city}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => handleEdit(address)}
                      className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 text-sm hover:bg-gray-800 transition-colors"
                    >
                      Edit
                    </button>
                    {!address.isDefault && (
                      <button 
                        onClick={() => setAsDefault(address._id)}
                        className="px-3 py-1.5 rounded-lg border border-orange-500/50 text-orange-400 text-sm hover:bg-orange-500/10 transition-colors"
                      >
                        Set Default
                      </button>
                    )}
                    <button 
                      onClick={() => handleDelete(address._id)}
                      className="px-3 py-1.5 rounded-lg border border-red-500/50 text-red-400 text-sm hover:bg-red-500/10 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Addresses;
