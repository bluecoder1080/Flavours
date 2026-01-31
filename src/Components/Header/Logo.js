import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../../assets/Logo.jpeg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="cursor-pointer transition-all duration-300 hover:scale-105 flex items-center gap-3"
      onClick={() => navigate('/')}
    >
      <img
        src={logo}
        alt="Flavours Logo"
        className="w-12 h-12 object-cover rounded-lg shadow-lg"
      />
      <span className="text-xl font-bold text-gradient hidden sm:block">Flavours</span>
    </div>
  );
};

export default Logo;
