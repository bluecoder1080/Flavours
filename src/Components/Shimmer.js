import React from 'react';

const ShimmerCard = () => (
  <div className="glass rounded-xl overflow-hidden animate-pulse">
    <div className="h-48 bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-surface-light)]
                    relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]
                      bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
    <div className="p-4 space-y-3">
      <div className="h-4 bg-[var(--color-surface-light)] rounded w-3/4" />
      <div className="h-3 bg-[var(--color-surface-light)] rounded w-1/2" />
      <div className="flex justify-between">
        <div className="h-3 bg-[var(--color-surface-light)] rounded w-12" />
        <div className="h-3 bg-[var(--color-surface-light)] rounded w-16" />
        <div className="h-3 bg-[var(--color-surface-light)] rounded w-14" />
      </div>
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="min-h-screen px-6 py-8 max-w-7xl mx-auto">
      <div className="mb-8 h-12 bg-[var(--color-surface)] rounded-lg w-1/3 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;