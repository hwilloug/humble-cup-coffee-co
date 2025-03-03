"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Divider from "../ui/divider";
import Link from "next/link";
import { Gallery } from "react-grid-gallery";
import { Button } from "../ui/button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageGallery({
  preview = false,
}: {
  preview?: boolean;
}) {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const allImages = [
    {
      src: "/DSC_1140-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1318-2.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1162-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_2243.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_5455-Enhanced-NR-2.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_4442.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_5711-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_8799-2.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_9757-2.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_8045.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_9898.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_4527.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_2957-3-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1350-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1254-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_2979-3-Enhanced-NR.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_1232-Enhanced-NR.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_9736-Enhanced-NR.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_2203.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1155-Enhanced-NR.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_1140-Enhanced-NR 2.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1476.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_4620-2.jpg",
      height: 1200,
      width: 800,
    },
    {
      src: "/DSC_8341.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1330-2.jpg",
      height: 800,
      width: 1200,
    },
    {
      src: "/DSC_1697-Enhanced-NR.jpg",
      height: 1200,
      width: 800,
    },
  ];

  const images = preview ? allImages.slice(0, 9) : allImages;

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
    <section className="w-full bg-primary/10 py-16 mt-16">
      <h2 className="text-3xl sm:text-4xl text-primary font-light tracking-wide mb-4 sm:mb-6 mx-auto text-center">
        Gallery
      </h2>
      <Divider />
      <div className="container w-full mx-auto px-4">
        <Gallery
          images={images}
          enableImageSelection={false}
          onClick={(index) => {
            setOpen(true);
            setCurrentImage(index);
          }}
        />
        <Lightbox
          slides={images}
          open={open}
          index={currentImage}
          close={() => setOpen(false)}
        />
      </div>
      {preview && (
        <Link href="/gallery" className="flex justify-center">
          <Button className="bg-primary text-white px-4 py-2 mt-4 rounded-md">
            View More
          </Button>
        </Link>
      )}
    </section>
  );
}
