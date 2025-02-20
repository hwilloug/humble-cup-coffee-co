"use client";

import { Coffee, Clock, MapPin } from "lucide-react";

export function Features() {
  return (
    <section className="py-4 my-8 bg-primary/10">
      <div className="container mx-auto px-4 my-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16">
          {[
            {
              icon: Coffee,
              title: "Premium Beans",
              description: "Sourced from the finest estates worldwide",
            },
            {
              icon: Clock,
              title: "Fresh Daily",
              description: "Roasted in-house every morning",
            },
            {
              icon: MapPin,
              title: "Prime Location",
              description: "In the heart of the city",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-500"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary transition-all duration-200 hover:rotate-6" />
              <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
