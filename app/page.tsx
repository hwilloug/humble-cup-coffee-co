"use client";

import { TopInfoBar } from "@/components/sections/TopInfoBar";
import { Hero } from "@/components/sections/Hero";
import { ShopFeatures } from "@/components/sections/ShopFeatures";
import { OurStory } from "@/components/sections/OurStory";
import { OurBrand } from "@/components/sections/OurBrand";
import { HowWeStarted } from "@/components/sections/HowWeStarted";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { InTheNews } from "@/components/sections/InTheNews";
import Coffee from "@/components/sections/Coffee";
import Image from "next/image";
import ImageGallery from "@/components/sections/ImageGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Divider />
      <Coffee />
      <Divider />
      <ShopFeatures />
      <Divider />
      <MenuPreview />
      <Divider />
      <OurStory />
      <OurBrand />
      <Divider />
      <HowWeStarted />
      <Divider />
      <Testimonials />
      <Divider />
      <InTheNews />
      <Divider />
      <ImageGallery />
    </main>
  );
}

const Divider = () => {
  return (
    <Image
      src="https://humble-cup-images.s3.us-east-1.amazonaws.com/green_text_divider.png"
      alt="Shop Features"
      width={200}
      height={200}
      className="mx-auto"
    />
  );
};
