"use client";

import { Coffee, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Divider from "../ui/divider";
export function Features() {
  return (
    <section className="mb-8 bg-primary/10 lg:pb-16 pt-1">
      <div className="container mx-auto px-4">
        <div className="mb-12 font-bold">
          <h2 className="mt-16 text-3xl sm:text-4xl text-primary font-light tracking-wide mb-4 sm:mb-6 mx-auto text-center">
            Hours & Location
          </h2>
          <Divider />
          <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
            414 Tom Hall St, Fort Mill, SC 29715
          </p>
          <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
            Monday - Friday: 6am - 5pm
          </p>
          <p className="text-gray-600 text-sm sm:text-base text-center">
            Saturday & Sunday: 7am - 5pm
          </p>
        </div>
      </div>
      <Image
        src="/DSC_1318-2.jpg"
        alt="Image 1"
        width={100}
        height={100}
        className="w-full lg:w-3/4 mx-auto"
      />
    </section>
  );
}
