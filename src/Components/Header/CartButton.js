import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useCart } from '../../context/CartContext';

const CartButton = () => {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative p-3 rounded-lg glass transition-all duration-300 
                   hover:scale-110 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] 
                           text-white text-xs w-5 h-5 rounded-full flex items-center 
                           justify-center animate-bounce font-bold">
            {itemCount}
          </span>
        )}
      </button>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CartButton;
