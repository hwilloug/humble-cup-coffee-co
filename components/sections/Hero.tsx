"use client";

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";

export function Hero() {
  const scrollY = useParallax();

  return (
    <section className="relative">
      <div className="absolute top-0 left-0 w-1/4 lg:w-1/5 lg:left-12">
        <Image
          src="/plant-2.png"
          alt="Humble Cup Logo Background"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
      <div className="absolute top-0 right-4 sm:right-12 w-1/5 lg:w-1/6 lg:right-24">
        <Image
          src="/plant-3.png"
          alt="Humble Cup Logo Background"
          width={200}
          height={200}
          className="w-full"
        />
      </div>
      <div className="inset-0 flex flex-col items-center justify-center bg-[#e0e2e1]">
        <Image
          src="/humble-logo.png"
          alt="Humble Cup Logo Background"
          className="object-contain w-1/2 lg:w-1/3 my-8"
          width={200}
          height={200}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>
      <div>
        <Image
          src="/DSC_3287_2.jpg"
          alt="Image 1"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
}
