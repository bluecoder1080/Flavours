import React from 'react';
import { useRouteError, useNavigate } from 'react-router';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass rounded-xl p-12 text-center max-w-lg animate-slide-up">
        <h1 className="text-8xl font-bold text-[var(--color-primary)] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          {error?.statusText || error?.message || "The page you're looking for doesn't exist."}
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-lg font-bold text-white
                     bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                     hover:scale-105 transition-transform"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;