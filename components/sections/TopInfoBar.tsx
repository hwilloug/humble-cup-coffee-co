'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export function TopInfoBar() {
  const pathname = usePathname();

  return (
    <div className="mb-4">
      <div className="w-full px-4 py-2 bg-primary text-white">
          <div className="flex items-center justify-end gap-4 sm:gap-8">
            <Link href="/our-story">Our Story</Link>
            <Link href="/menu">Menu</Link>
          </div>
        </div>
        <div className="absolute top-0 left-4 flex items-center justify-center">
          <Image src="https://humble-cup-images.s3.us-east-1.amazonaws.com/pothos_hanging.png" alt="Humble Cup Logo Background" width={200} height={200} />
        </div>
    </div>
  );
}