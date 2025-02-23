"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Divider from "../ui/divider";
import Link from "next/link";

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center items-center mt-8">
        {[
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_1140-Enhanced-NR.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_1318-2.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_1162-Enhanced-NR.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_2243.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_5455-Enhanced-NR-2.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_4442.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_5711-Enhanced-NR.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_8799-2.jpg",
          "https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_9757-2.jpg"
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
              className="w-full"
            />
          </div>
        ))}
      </div>
      <Link
        href="/gallery"
        className="bg-primary text-white px-4 py-2 mt-4 rounded-md flex justify-center"
      >
        View More
      </Link>
    </section>
  );
}
