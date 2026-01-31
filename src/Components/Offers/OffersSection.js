import React from 'react';

const offers = [
  { id: 1, code: 'WELCOME50', discount: '50% OFF', description: 'Up to ₹100 on first order', color: 'from-orange-600 to-red-600', icon: '🎉' },
  { id: 2, code: 'FLAT100', discount: '₹100 OFF', description: 'On orders above ₹499', color: 'from-violet-600 to-fuchsia-600', icon: '💎' },
  { id: 3, code: 'FREEDEL', discount: 'FREE DELIVERY', description: 'On orders above ₹299', color: 'from-emerald-500 to-teal-600', icon: '🛵' },
  { id: 4, code: 'PAYTM30', discount: '30% Cashback', description: 'Using Paytm Wallet', color: 'from-blue-500 to-cyan-600', icon: '💳' },
];

const OffersSection = () => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    const el = document.getElementById(`offer-${code}`);
    if (el) {
      el.innerText = 'Copied!';
      setTimeout(() => el.innerText = 'Copy', 2000);
    }
  };

  return (
    <div className="mb-10 animate-fade-in">
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Offers For You
        </h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors">←</button>
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors">→</button>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`flex-shrink-0 w-80 p-5 rounded-2xl bg-gradient-to-br ${offer.color} relative overflow-hidden group snap-center cursor-pointer transition-transform hover:scale-[1.02] shadow-lg`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 transition-transform group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl shadow-inner border border-white/10">
                  {offer.icon}
                </div>
                <div className="text-xs font-bold bg-black/20 text-white px-2 py-1 rounded backdrop-blur-sm">
                  LIMITED TIME
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-1 shadow-sm uppercase tracking-tight">
                {offer.discount}
              </h3>
              <p className="text-white/90 text-sm font-medium mb-5">
                {offer.description}
              </p>
              
              <div className="flex items-center justify-between bg-black/20 p-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                <code className="text-white font-mono font-bold px-3 tracking-wider dashed-border">
                  {offer.code}
                </code>
                <button 
                  onClick={() => copyCode(offer.code)}
                  className="px-4 py-1.5 bg-white text-gray-900 rounded-md text-xs font-bold hover:bg-gray-100 active:scale-95 transition-all shadow-sm"
                >
                  <span id={`offer-${offer.code}`}>Copy</span>
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
