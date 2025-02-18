'use client';

import { useParallax } from '@/hooks/useParallax';

export function InTheNews() {
  const scrollY = useParallax();

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-12 sm:mb-16"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 2700) * 0.1)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 2600) / 500))
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4 sm:mb-6">In The News</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">Read what the press has to say about our commitment to quality and community.</p>
          </div>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 2700) * 0.1)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 2600) / 500))
            }}
          >
            {[
              {
                source: "Coffee Monthly",
                title: "The Rise of Artisan Coffee Co.",
                quote: "Setting new standards in the coffee industry with their innovative approach to traditional brewing methods.",
                date: "June 2023"
              },
              {
                source: "Urban Lifestyle Magazine",
                title: "Best Coffee Shop Award",
                quote: "A perfect blend of atmosphere, quality, and service makes this our top pick for 2023.",
                date: "August 2023"
              },
              {
                source: "Food & Drink Weekly",
                title: "Sustainability in Coffee",
                quote: "Leading the way in sustainable coffee sourcing and eco-friendly practices.",
                date: "September 2023"
              },
              {
                source: "Local Times",
                title: "Community Impact",
                quote: "More than just a coffee shop - a vital part of our community's daily life.",
                date: "October 2023"
              }
            ].map((news, index) => (
              <div key={index} className="bg-stone-50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-xs sm:text-sm text-primary mb-2">{news.source}</div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 font-light">{news.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base">&ldquo;{news.quote}&rdquo;</p>
                <div className="text-xs sm:text-sm text-gray-500">{news.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}