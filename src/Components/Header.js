import React from 'react';
import Logo from './Header/Logo';
import Navigation from './Header/Navigation';
import CartButton from './Header/CartButton';
import AuthButton from './Header/AuthButton';

const Header = () => {
  return (
    <header className="glass sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
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
