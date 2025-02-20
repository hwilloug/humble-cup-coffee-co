"use client";

import { useParallax } from "@/hooks/useParallax";
import Link from "next/link";
import { Button } from "../ui/button";

export function MenuPreview({ link = true }: { link?: boolean }) {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-4 tracking-wide">
          Seasonal Menu
        </h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto mb-12 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              name: "Classic Cappuccino",
              price: "$4.50",
              image:
                "https://images.unsplash.com/photo-1534778101976-62847782c213",
            },
            {
              name: "Iced Caramel Latte",
              price: "$5.00",
              image:
                "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
            },
            {
              name: "Mocha Supreme",
              price: "$5.50",
              image:
                "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d",
            },
          ].map((drink, index) => (
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
        {link && <div className="mt-12 flex justify-center">
          <Link href="/menu">
            <Button>View Full Menu</Button>
          </Link>
        </div>}
      </div>
    </section>
  );
}
