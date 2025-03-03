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
import { Pastries } from "@/components/sections/Pastries";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Divider />
      <MenuPreview />
      <Divider />
      <Coffee />
      <Divider />
      <Pastries />
      <Divider />
      <ShopFeatures />
      <Divider />
      <OurStory />
      <OurBrand />
      <Divider />
      <HowWeStarted />
      <Divider />
      <Testimonials />
      <Divider />
      <ImageGallery preview />
    </main>
  );
}

const Divider = () => {
  return (
    <Image
      src="/coffee-bean-divider-v3.png"
      alt="Coffee Bean Divider"
      width={200}
      height={200}
      className="mx-auto"
    />
  );
};
