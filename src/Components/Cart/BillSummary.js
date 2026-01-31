import React from 'react';

const BillSummary = ({ total, step, address, paymentMethod, isProcessing, onAction, currentUser }) => {
  const deliveryFee = total > 500 ? 0 : 40;
  const taxes = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + taxes;

  const isAddressValid = address.name && address.phone && address.flat && address.area && address.city;

  const buttonConfig = {
    cart: { 
      text: currentUser ? 'Add Delivery Address' : 'Login to Checkout', 
      onClick: () => onAction(currentUser ? 'address' : 'login'), 
      disabled: false 
    },
    address: { text: 'Proceed to Payment', onClick: () => onAction('payment'), disabled: !isAddressValid },
    payment: { text: `Pay ₹${grandTotal}`, onClick: () => onAction('pay'), disabled: !paymentMethod, isGreen: true },
  };

  const config = buttonConfig[step];

  return (
    <div className="p-4 border-t border-gray-800 bg-gray-900/90 backdrop-blur-sm space-y-3">
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Item Total</span><span>₹{total}</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Delivery Fee</span>
          <span className={deliveryFee === 0 ? 'text-green-400' : ''}>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Taxes</span><span>₹{taxes}</span>
        </div>
        <div className="border-t border-gray-700 pt-2 flex justify-between">
          <span className="text-white font-semibold">To Pay</span>
          <span className="text-xl font-bold text-gradient">₹{grandTotal}</span>
        </div>
      </div>
      
      <button 
        onClick={config.onClick}
        disabled={config.disabled || isProcessing}
        className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
          ${config.isGreen ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-green-500/25' : 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/25'}`}
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </>
        ) : config.text}
      </button>
    </div>
  );
};

export default BillSummary;
