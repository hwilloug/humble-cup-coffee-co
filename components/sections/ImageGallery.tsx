'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ImageGallery() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = imageRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setVisibleImages((prev) => {
              const newState = [...prev];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="my-12">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto justify-center items-center">
        {
          [
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
            "https://humble-cup-images.s3.us-east-1.amazonaws.com/bookshelves.png",
          ].map((image, index) => (
            <div
              key={index}
              className="transition-opacity duration-1000"
              style={{ opacity: visibleImages[index] ? 1 : 0 }}
            >
              <Image 
                ref={(el) => imageRefs.current[index] = el as HTMLDivElement}
                src={image} 
                alt="Humble Cup Logo Background" 
                width={200} 
                height={200} 
              />
            </div>
          ))
        }
      </div>
    </section>
  );
}