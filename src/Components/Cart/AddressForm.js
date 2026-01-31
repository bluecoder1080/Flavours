import React, { useState } from 'react';
import { useAddresses, useAuth } from '../../context';

const AddressForm = ({ address, setAddress, onNext }) => {
  const { addresses, saveAddressFromOrder } = useAddresses();
  const { currentUser } = useAuth();
  const [mode, setMode] = useState(addresses.length > 0 ? 'select' : 'new'); // 'select' or 'new'
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (addr) => {
    setSelectedId(addr._id);
    setAddress(addr);
  };

  const handleNewAddressChange = (field) => (e) => {
    setAddress(prev => ({ ...prev, [field]: e.target.value }));
  };

  const inputClass = "w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none text-sm transition-colors";

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Home': return '🏠';
      case 'Work': return '💼';
      default: return '📍';
    }
  };

  return (
    <div className="p-4 space-y-4 animate-fade-in">
      {!currentUser && (
        <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 p-3 rounded-lg text-sm mb-4">
          Sign in to save addresses and checkout faster
        </div>
      )}

      {currentUser && addresses.length > 0 && (
        <div className="flex bg-gray-800/50 p-1 rounded-lg mb-4">
          <button
            onClick={() => setMode('select')}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'select' ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-white'}`}
          >
            Select Saved
          </button>
          <button
            onClick={() => { setMode('new'); setAddress({ name: '', phone: '', flat: '', area: '', landmark: '', city: '' }); setSelectedId(null); }}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${mode === 'new' ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-white'}`}
          >
            <span className="mr-1">+</span> Add New
          </button>
        </div>
      )}

      {mode === 'select' && currentUser ? (
        <div className="space-y-3">
          {addresses.map((addr) => (
            <div 
              key={addr._id}
              onClick={() => handleSelect(addr)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                selectedId === addr._id 
                  ? 'bg-orange-500/10 border-orange-500 ring-1 ring-orange-500' 
                  : 'bg-gray-800/30 border-gray-700 hover:border-gray-500'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{getTypeIcon(addr.type)}</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{addr.type}</h4>
                  <p className="text-gray-300 text-xs mt-0.5">{addr.flat}, {addr.area}</p>
                  <p className="text-gray-400 text-xs">{addr.city}</p>
                </div>
                {selectedId === addr._id && (
                  <div className="ml-auto text-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  </div>
                )}
              </div>
            </div>
          ))}
          <button 
            disabled={!selectedId}
            onClick={onNext}
            className="w-full mt-4 py-3 rounded-xl bg-orange-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
          >
            Deliver Here
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <span className="text-white font-medium">Add Delivery Address</span>
            </div>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Full Name *" value={address.name || ''} onChange={handleNewAddressChange('name')} className={inputClass} />
                <input type="tel" placeholder="Phone *" value={address.phone || ''} onChange={handleNewAddressChange('phone')} className={inputClass} />
              </div>
              <input type="text" placeholder="Flat / House No *" value={address.flat || ''} onChange={handleNewAddressChange('flat')} className={inputClass} />
              <input type="text" placeholder="Area / Locality *" value={address.area || ''} onChange={handleNewAddressChange('area')} className={inputClass} />
              <input type="text" placeholder="Landmark (optional)" value={address.landmark || ''} onChange={handleNewAddressChange('landmark')} className={inputClass} />
              <input type="text" placeholder="City *" value={address.city || ''} onChange={handleNewAddressChange('city')} className={inputClass} />
            </div>
          </div>

          <div className="flex gap-2">
            {['Home', 'Work', 'Other'].map((type) => (
              <button 
                key={type} 
                onClick={() => setAddress(prev => ({ ...prev, type }))}
                className={`flex-1 py-2 px-3 rounded-lg border text-sm transition-all
                  ${address.type === type 
                    ? 'border-orange-500 text-orange-400 bg-orange-500/10' 
                    : 'border-gray-700 text-gray-400 hover:border-orange-500 hover:text-orange-400'}`}
              >
                {type}
              </button>
            ))}
          </div>

          <button 
            disabled={!address.name || !address.phone || !address.flat || !address.area || !address.city}
            onClick={onNext}
            className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
