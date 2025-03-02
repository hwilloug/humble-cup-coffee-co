"use client";

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";

export function Hero() {
  const scrollY = useParallax();

  return (
    <section>
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
          src="/DSC_3287 2.jpg"
          alt="Image 1"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </section>
  );
}
