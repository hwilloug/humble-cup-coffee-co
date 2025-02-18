'use client';

import { useParallax } from '@/hooks/useParallax';

export function Hero() {
  const scrollY = useParallax();

  return (
    <section className="relative h-[80vh] sm:h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humblecup_Coffee.svg"
          alt="Elegant coffee shop interior"
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-black/20" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div
          className="text-center text-white p-4 sm:p-8 max-w-3xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mb-4 sm:mb-6 tracking-wide">
            Humble Cup Coffee Co.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light tracking-wider">
            Crafting Perfect Moments, One Cup at a Time
          </p>
          <button className="bg-white/90 text-gray-900 px-6 sm:px-8 py-3 rounded-none text-base sm:text-lg hover:bg-white transition-colors duration-300">
            Explore Our Menu
          </button>
        </div>
      </div>
    </section>
  );
}
