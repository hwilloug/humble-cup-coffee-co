'use client';

import { useParallax } from '@/hooks/useParallax';

export function Hero() {
  const scrollY = useParallax();

  return (
    <section className="relative h-[40vh] mt-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humblecup_Coffee.svg"
            alt="Humble Cup Logo Background"
            className="object-contain w-1/3"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humblecup_Text.svg"
            alt="Humble Cup Logo Text"
            className="object-contain w-1/2"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          />
        </div>
    </section>
  );
}
