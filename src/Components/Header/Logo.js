import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../../../assets/Logo.jpeg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={() => navigate('/')}
    >
      <img
        src={logo}
        alt="Flavours Logo"
        className="w-32 h-auto animate-glow rounded-lg"
      />
    </div>
  );
};

export default Logo;
