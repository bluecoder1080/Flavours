import React from 'react';

const AddressForm = ({ address, setAddress }) => {
  const handleChange = (field) => (e) => {
    setAddress(prev => ({ ...prev, [field]: e.target.value }));
  };

  const inputClass = "w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2.5 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none text-sm";

  return (
    <div className="p-4 space-y-4">
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
            <input type="text" placeholder="Full Name *" value={address.name} onChange={handleChange('name')} className={inputClass} />
            <input type="tel" placeholder="Phone *" value={address.phone} onChange={handleChange('phone')} className={inputClass} />
          </div>
          <input type="text" placeholder="Flat / House No *" value={address.flat} onChange={handleChange('flat')} className={inputClass} />
          <input type="text" placeholder="Area / Locality *" value={address.area} onChange={handleChange('area')} className={inputClass} />
          <input type="text" placeholder="Landmark (optional)" value={address.landmark} onChange={handleChange('landmark')} className={inputClass} />
          <input type="text" placeholder="City *" value={address.city} onChange={handleChange('city')} className={inputClass} />
        </div>
      </div>

      <div className="flex gap-2">
        {['Home', 'Work', 'Other'].map((type) => (
          <button key={type} className="flex-1 py-2 px-3 rounded-lg border border-gray-700 text-gray-400 text-sm hover:border-orange-500 hover:text-orange-400 transition-all">
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AddressForm;
