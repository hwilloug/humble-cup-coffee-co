"use client";

import { useParallax } from "@/hooks/useParallax";
import Divider from "../ui/divider";

export function HowWeStarted() {
  const scrollY = useParallax();

  return (
    <section className="my-8 py-8 sm:py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-primary font-light tracking-wide mb-4 sm:mb-6">
              How We Started
            </h2>
            <Divider />
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Our journey from a small garage to a beloved coffee destination
              has been fueled by passion, perseverance, and the support of our
              amazing community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                year: "2015",
                title: "The Beginning",
                description: "Started in a garage with one roaster and a dream",
              },
              {
                year: "2018",
                title: "First Location",
                description: "Opened our flagship store in downtown",
              },
              {
                year: "2023",
                title: "Growing Community",
                description:
                  "Expanded to multiple locations while maintaining our artisanal quality",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-stone-50"
                style={{
                  transform: `translateY(${(scrollY - 6000) * (0.05 * (index - 1))}px)`,
                }}
              >
                <div className="text-2xl sm:text-3xl font-light text-primary mb-3 sm:mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
