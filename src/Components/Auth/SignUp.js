import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../../context';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    setLoading(true);

    try {
      await signup(email, password, displayName);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 animate-fade-in">
      <div className="glass rounded-2xl p-8 w-full max-w-md animate-slide-up">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-2">Join Flavours</h1>
          <p className="text-gray-400">Create your account to get started</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
                         transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
                         transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
                         transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
                         transition-all duration-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-bold text-white
                       bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                       hover:scale-105 transition-transform disabled:opacity-50
                       disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <Link to="/signin" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
