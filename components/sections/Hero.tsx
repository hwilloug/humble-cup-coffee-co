"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section>
      <div className="inset-0 flex flex-col items-center justify-center">
        <img
          src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humblecup_logo_no_bg.png"
          alt="Humble Cup Logo Background"
          className="object-contain w-1/2 mt-4"
        />
      </div>
    </section>
  );
}
