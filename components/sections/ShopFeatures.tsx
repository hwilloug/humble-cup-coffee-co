'use client';

import { useParallax } from '@/hooks/useParallax';
import { BookOpen, Briefcase, Baby } from 'lucide-react';

export function ShopFeatures() {
  const scrollY = useParallax();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-12 sm:mb-16"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 500) * 0.1)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 400) / 500))
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4 sm:mb-6">Experience Our Space</h2>
            <p className="text-gray-600 max-w-3xl mx-auto px-4">Discover the perfect environment for every moment, whether you're working, relaxing, or spending time with family.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
            {[
              {
                icon: BookOpen,
                title: "Reading Lounge",
                description: "Unwind in our cozy reading area, featuring comfortable seating and a curated collection of books and magazines.",
                image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493"
              },
              {
                icon: Briefcase,
                title: "Workspace",
                description: "A productive environment with high-speed WiFi, power outlets, and comfortable seating for remote work or study sessions.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
              },
              {
                icon: Baby,
                title: "Kids' Corner",
                description: "A safe and fun space for children, equipped with toys, books, and activities to keep little ones entertained.",
                image: "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative group"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 600) * 0.1)}px)`,
                  opacity: Math.min(1, Math.max(0, (scrollY - 500) / 500))
                }}
              >
                <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6 sm:p-8 bg-stone-50">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-light">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}