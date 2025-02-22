"use client";

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";

export function Hero() {
  const scrollY = useParallax();

  return (
    <section>
      <div className="inset-0 flex flex-col items-center justify-center bg-[#e0e2e1]">
        <Image
          src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humble-logo.png"
          alt="Humble Cup Logo Background"
          className="object-contain w-1/2 my-8"
          width={200}
          height={200}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
      </div>
    </section>
  );
}
