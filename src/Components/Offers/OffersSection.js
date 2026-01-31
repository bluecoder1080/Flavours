import React from 'react';

const offers = [
  { id: 1, code: 'WELCOME50', discount: '50% OFF', description: 'Up to ₹100 on first order', color: 'from-orange-500 to-red-500' },
  { id: 2, code: 'FLAT100', discount: '₹100 OFF', description: 'On orders above ₹499', color: 'from-purple-500 to-pink-500' },
  { id: 3, code: 'FREEDEL', discount: 'FREE DELIVERY', description: 'On orders above ₹299', color: 'from-green-500 to-teal-500' },
];

const OffersSection = () => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Code ${code} copied!`);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <span>🎁</span> Offers For You
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`flex-shrink-0 w-72 p-5 rounded-xl bg-gradient-to-r ${offer.color} relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="text-2xl font-bold text-white mb-1">{offer.discount}</div>
              <p className="text-white/80 text-sm mb-3">{offer.description}</p>
              <div className="flex items-center gap-2">
                <code className="px-3 py-1 bg-white/20 rounded text-white text-sm font-mono">{offer.code}</code>
                <button onClick={() => copyCode(offer.code)} className="px-3 py-1 bg-white text-gray-900 rounded text-sm font-medium hover:bg-gray-100 transition">
                  Copy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
