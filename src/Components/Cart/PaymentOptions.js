import React from 'react';

const paymentMethods = [
  { id: 'upi', icon: '📱', title: 'UPI', subtitle: 'Pay using any UPI app', color: 'purple' },
  { id: 'card', icon: '💳', title: 'Credit / Debit Card', subtitle: 'Visa, Mastercard, RuPay', color: 'blue' },
  { id: 'wallet', icon: '👛', title: 'Wallets', subtitle: 'Paytm, PhonePe, Amazon Pay', color: 'green' },
  { id: 'cod', icon: '💵', title: 'Cash on Delivery', subtitle: 'Pay when you receive', color: 'yellow' },
];

const PaymentOptions = ({ address, selectedMethod, onSelect }) => {
  return (
    <div className="p-4 space-y-4">
      {/* Address Summary */}
      <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-white font-medium text-sm">Delivering to</p>
            <p className="text-gray-400 text-xs mt-1">{address.flat}, {address.area}, {address.city}</p>
            <p className="text-gray-500 text-xs">{address.phone}</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-2">
        <p className="text-white font-medium text-sm mb-3">Select Payment Method</p>
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`w-full p-4 rounded-xl border transition-all flex items-center gap-4
              ${selectedMethod === method.id ? 'border-orange-500 bg-orange-500/10' : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'}`}
          >
            <div className={`w-10 h-10 rounded-lg bg-${method.color}-500/20 flex items-center justify-center`}>
              <span className="text-lg">{method.icon}</span>
            </div>
            <div className="text-left flex-1">
              <p className="text-white font-medium text-sm">{method.title}</p>
              <p className="text-gray-500 text-xs">{method.subtitle}</p>
            </div>
            {selectedMethod === method.id && (
              <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
