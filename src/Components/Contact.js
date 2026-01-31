import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-12 max-w-2xl mx-auto animate-fade-in">
      <div className="glass rounded-xl p-8">
        <h1 className="text-4xl font-bold text-gradient mb-8">Contact Us</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg glass text-white
                         focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              placeholder="How can we help?"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-white
                       bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]
                       hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
