'use client';

import { useParallax } from '@/hooks/useParallax';

export function MenuPreview() {
  const scrollY = useParallax();

  return (
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl sm:text-4xl font-light text-center mb-12 sm:mb-20 tracking-wide"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 2400) * 0.1)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 2300) / 500))
          }}
        >
          Our Signature Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              name: 'Classic Cappuccino',
              price: '$4.50',
              image: 'https://images.unsplash.com/photo-1534778101976-62847782c213',
            },
            {
              name: 'Iced Caramel Latte',
              price: '$5.00',
              image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
            },
            {
              name: 'Mocha Supreme',
              price: '$5.50',
              image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d',
            },
          ].map((drink, index) => (
            <div 
              key={index} 
              className="group bg-stone-50 overflow-hidden transform transition-all duration-500 hover:shadow-xl"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 2400 - index * 100) * 0.1)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 2300 - index * 100) / 500))
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-light mb-2 tracking-wide">{drink.name}</h3>
                <p className="text-base sm:text-lg text-primary">{drink.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}