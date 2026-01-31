import React from 'react';

const CartItems = ({ items, updateQuantity, removeFromCart }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="w-20 h-20 rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <p className="text-gray-400 font-medium">Your cart is empty</p>
        <p className="text-gray-600 text-sm mt-1">Add some delicious items!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/50 hover:border-orange-500/30 transition-all">
          <div className="flex gap-3">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center">
              <span className="text-2xl">🍔</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-medium text-white text-sm">{item.name}</h4>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center bg-gray-900 rounded-lg">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-l-lg bg-gray-800 hover:bg-orange-500 text-white">−</button>
                  <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-r-lg bg-gray-800 hover:bg-orange-500 text-white">+</button>
                </div>
                <span className="text-orange-400 font-bold text-sm">₹{item.price * item.quantity}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
