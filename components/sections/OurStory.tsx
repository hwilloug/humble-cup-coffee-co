"use client";

import { useParallax } from "@/hooks/useParallax";
import Link from "next/link";
import { Button } from "../ui/button";
import Divider from "../ui/divider";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function OurStory() {
  const scrollY = useParallax();
  const isMobile = useMediaQuery(780);

  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div
              style={{
                transform: isMobile
                  ? "none"
                  : `translateY(${Math.max(0, (scrollY - 5000) * 0.1)}px)`,
              }}
            >
              <img
                src="https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_1173-Enhanced-NR.jpg"
                alt="Coffee artisan at work"
                className="w-full h-[800px] sm:h-[600px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl text-primary font-light tracking-wide text-center">
                Our Story
              </h2>
              <Divider />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Founded in 2015, Artisan Coffee Co. began with a simple yet
                profound mission: to elevate the coffee experience through
                meticulous attention to detail and unwavering dedication to
                quality.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our journey started in a small garage with a single roaster and
                an endless passion for the perfect cup. Today, we've grown into
                a beloved destination for coffee enthusiasts, but our core
                values remain unchanged.
              </p>
              <div className="mt-4">
                <Link href="/our-story" className="text-primary">
                  <Button>Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
