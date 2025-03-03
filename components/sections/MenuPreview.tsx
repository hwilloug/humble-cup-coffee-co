"use client";

import { useParallax } from "@/hooks/useParallax";
import Link from "next/link";
import { Button } from "../ui/button";
import Divider from "../ui/divider";
import { SEASONAL_MENU } from "@/lib/consts";

export function MenuPreview({ link = true }: { link?: boolean }) {
  return (
    <section className={`my-8 py-8`}>
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl text-primary font-light text-center mb-4 tracking-wide">
          Seasonal Menu
        </h2>
        <Divider />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          {SEASONAL_MENU.map((drink, index) => (
            <div
              key={index}
              className="group bg-stone-50 transform transition-all duration-500 shadow-lg rounded-lg hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-light mb-2 tracking-wide">
                  {drink.name}
                </h3>
                <p className="text-base sm:text-lg text-primary">
                  {drink.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {link && (
          <div className="mt-12 flex justify-center">
            <Link href="/menu">
              <Button>View Full Menu</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
