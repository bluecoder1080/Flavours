import React from 'react';

const OrderSuccess = ({ onClose }) => {
  const orderId = `FLV${Math.random().toString().slice(2, 8)}`;

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 animate-bounce">
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h3>
      <p className="text-gray-400 mb-6">Your delicious food is being prepared</p>
      
      <div className="bg-gray-800/50 rounded-xl p-4 w-full mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Order ID</span>
          <span className="text-white font-medium">#{orderId}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Estimated Delivery</span>
          <span className="text-orange-400 font-medium">30-40 mins</span>
        </div>
      </div>

      <button
        onClick={onClose}
        className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all"
      >
        Continue Ordering
      </button>
    </div>
  );
};

export default OrderSuccess;
