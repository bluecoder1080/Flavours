import React from 'react';
import Logo from './Header/Logo';
import Navigation from './Header/Navigation';
import CartButton from './Header/CartButton';
import AuthButton from './Header/AuthButton';

const Header = () => {
  return (
    <header className="glass sticky top-0 z-50 animate-fade-in border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="flex items-center gap-6">
            <Navigation />
            <CartButton />
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
