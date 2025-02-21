"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Divider from "../ui/divider";

export default function ImageGallery() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            setVisibleImages((prev) => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="my-12 mx-4">
      <h2 className="text-3xl sm:text-4xl text-primary font-light tracking-wide mb-4 sm:mb-6 mx-auto text-center">
        Gallery
      </h2>
      <Divider />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto justify-center items-center mt-8">
        {[
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_1.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_2.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_3.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_4.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_5.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_6.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_7.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_8.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_9.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_10.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_11.png",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/humble_12.png",
        ].map((image, index) => (
          <div
            key={index}
            className="transition-opacity duration-1000"
            style={{ opacity: visibleImages[index] ? 1 : 0 }}
          >
            <Image
              ref={(el) => (imageRefs.current[index] = el as HTMLDivElement)}
              src={image}
              alt="Humble Cup Pic"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
