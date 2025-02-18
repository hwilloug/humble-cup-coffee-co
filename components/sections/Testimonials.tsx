'use client';

import { useParallax } from '@/hooks/useParallax';

export function Testimonials() {
  const scrollY = useParallax();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-12 sm:mb-16"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 2100) * 0.1)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 2000) / 500))
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4 sm:mb-6">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">The experiences of our valued customers reflect our commitment to excellence.</p>
          </div>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 2100) * 0.1)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 2000) / 500))
            }}
          >
            {[
              {
                quote: "The perfect blend of ambiance and exceptional coffee. My daily morning ritual starts here.",
                author: "Sarah Mitchell",
                role: "Local Artist",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              },
              {
                quote: "As a digital nomad, I've worked from coffee shops worldwide. This is by far the most welcoming space.",
                author: "David Chen",
                role: "Software Developer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              },
              {
                quote: "Their commitment to quality and sustainability shows in every cup. A true gem in our community.",
                author: "Emma Thompson",
                role: "Environmental Consultant",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-stone-50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-light text-base sm:text-lg">{testimonial.author}</h3>
                    <p className="text-xs sm:text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm sm:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}