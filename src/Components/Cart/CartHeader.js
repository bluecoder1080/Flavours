import React from 'react';

const CartHeader = ({ step, onBack, onClose }) => {
  const titles = {
    cart: 'Your Cart',
    address: 'Delivery Address',
    payment: 'Payment',
    success: 'Order Placed!'
  };

  const showBack = step === 'address' || step === 'payment';

  return (
    <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-orange-600/10 to-transparent">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={onBack} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h2 className="text-lg font-bold text-white">{titles[step]}</h2>
      </div>
      <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:rotate-90">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CartHeader;
