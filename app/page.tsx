'use client';

import { TopInfoBar } from '@/components/sections/TopInfoBar';
import { Hero } from '@/components/sections/Hero';
import { ShopFeatures } from '@/components/sections/ShopFeatures';
import { OurStory } from '@/components/sections/OurStory';
import { OurBrand } from '@/components/sections/OurBrand';
import { HowWeStarted } from '@/components/sections/HowWeStarted';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { MenuPreview } from '@/components/sections/MenuPreview';
import { InTheNews } from '@/components/sections/InTheNews';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopInfoBar />
      <Hero />
      <ShopFeatures />
      <OurStory />
      <OurBrand />
      <HowWeStarted />
      <Features />
      <Testimonials />
      <MenuPreview />
      <InTheNews />
      <Contact />
    </main>
  );
}