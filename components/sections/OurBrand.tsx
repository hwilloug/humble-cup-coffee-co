"use client";

import { useParallax } from "@/hooks/useParallax";
import Divider from "../ui/divider";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
export function OurBrand() {
  const scrollY = useParallax();

  const isMobile = useMediaQuery(780);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div
              className="space-y-4 sm:space-y-6 order-2 md:order-1"
              style={{
                transform: isMobile
                  ? "none"
                  : `translateY(${Math.max(0, (scrollY - 7500) * 0.1)}px)`,
              }}
            >
              <h2 className="text-3xl sm:text-4xl text-primary font-light tracking-wide text-center">
                Our Brand
              </h2>
              <Divider />
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                The Artisan Coffee Co. brand represents more than just premium
                coffee—it embodies our commitment to craftsmanship,
                sustainability, and community. Every aspect of our identity is
                carefully crafted to reflect these values.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                From our ethically sourced beans to our handcrafted beverages,
                every detail matters. Our brand is built on the foundation of
                creating memorable experiences and fostering genuine
                connections.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <Image
                src="/DSC_7516-Enhanced-NR.jpg"
                alt="Coffee beans and brand elements"
                width={200}
                height={200}
                className="w-full h-[800px] sm:h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
