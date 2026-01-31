import React, { useState } from 'react';

const LocationSelector = ({ currentLocation, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(currentLocation || 'Select Location');

  const locations = [
    { id: 1, name: 'Home', address: '123 Main Street, Delhi' },
    { id: 2, name: 'Work', address: '456 Office Complex, Gurgaon' },
    { id: 3, name: 'Other', address: 'Add new address' },
  ];

  const handleSelect = (loc) => {
    setLocation(loc.name);
    setIsOpen(false);
    onSelect?.(loc);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-left"
      >
        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
        </div>
        <div>
          <div className="text-sm text-gray-400">Deliver to</div>
          <div className="text-white font-semibold flex items-center gap-1">
            {location}
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 z-50 overflow-hidden">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleSelect(loc)}
                className="w-full p-4 text-left hover:bg-gray-800 transition flex items-start gap-3 border-b border-gray-800 last:border-0"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm">
                  {loc.name === 'Home' ? '🏠' : loc.name === 'Work' ? '💼' : '📍'}
                </div>
                <div>
                  <div className="text-white font-medium">{loc.name}</div>
                  <div className="text-gray-400 text-sm">{loc.address}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LocationSelector;
