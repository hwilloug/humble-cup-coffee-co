'use client';

import { useParallax } from '@/hooks/useParallax';
import { Coffee, Clock, MapPin } from 'lucide-react';

export function Features() {
  const scrollY = useParallax();

  return (
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          transform: `translateY(${(scrollY - 1800) * 0.2}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e"
          alt="Coffee beans background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16">
          {[
            {
              icon: Coffee,
              title: "Premium Beans",
              description: "Sourced from the finest estates worldwide"
            },
            {
              icon: Clock,
              title: "Fresh Daily",
              description: "Roasted in-house every morning"
            },
            {
              icon: MapPin,
              title: "Prime Location",
              description: "In the heart of the city"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center transform transition-all duration-500"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 1800) * 0.1)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 1700) / 500))
              }}
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
              <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}