import React from 'react';

const Groceries = () => {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto animate-fade-in">
      <div className="glass rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gradient mb-6">
          Groceries Coming Soon!
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We're working hard to bring grocery delivery to your doorstep.
        </p>
        <div className="text-6xl mb-6 animate-bounce">🛒</div>
        <p className="text-gray-400">
          Stay tuned for fresh produce, pantry staples, and daily essentials.
        </p>
      </div>
    </div>
  );
};

export default Groceries;