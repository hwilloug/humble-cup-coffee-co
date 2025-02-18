'use client';

import { useParallax } from '@/hooks/useParallax';

export function OurStory() {
  const scrollY = useParallax();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div 
              className="relative"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 900) * 0.1)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 800) / 500))
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Coffee artisan at work"
                className="w-full h-[400px] sm:h-[600px] object-cover"
              />
            </div>
            <div 
              className="space-y-4 sm:space-y-6"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 900) * 0.15)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 800) / 500))
              }}
            >
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Founded in 2015, Artisan Coffee Co. began with a simple yet profound mission: to elevate the coffee experience through meticulous attention to detail and unwavering dedication to quality.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our journey started in a small garage with a single roaster and an endless passion for the perfect cup. Today, we've grown into a beloved destination for coffee enthusiasts, but our core values remain unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}