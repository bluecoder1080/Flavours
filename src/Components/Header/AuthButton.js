import React, { useState } from 'react';

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <button
      onClick={handleAuth}
      className="px-6 py-2.5 rounded-lg font-semibold text-white
                 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                 transition-all duration-300 
                 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/40
                 active:scale-95 animate-pulse"
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthButton;
