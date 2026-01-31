import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto animate-fade-in">
      <div className="glass rounded-xl p-8">
        <h1 className="text-4xl font-bold text-gradient mb-6">About Flavours</h1>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Welcome to <span className="text-[var(--color-primary)] font-semibold">Flavours</span>,
            your ultimate destination for delicious food delivered right to your doorstep.
          </p>
          <p>
            We partner with the best restaurants in your area to bring you a wide variety of 
            cuisines, from traditional Indian to international favorites.
          </p>
          <p>
            Our mission is to make great food accessible to everyone, with quick delivery
            and exceptional service.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2">100+</h3>
              <p className="text-sm text-gray-400">Restaurants</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2">50K+</h3>
              <p className="text-sm text-gray-400">Happy Customers</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2">30 min</h3>
              <p className="text-sm text-gray-400">Avg Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
