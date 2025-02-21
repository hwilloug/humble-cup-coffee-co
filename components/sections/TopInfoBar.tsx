"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function TopInfoBar() {
  const pathname = usePathname();

  return (
    <div className="mb-4">
      <div className="w-full px-4 py-2 bg-primary text-white flex justify-between items-center">
        {pathname !== "/" ? (
          <Link href="/">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <Image
                src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humblecup_logo.png"
                alt="Humble Cup Logo Background"
                width={75}
                height={75}
              />
              <h1 className="text-3xl">Humble Cup Coffee</h1>
            </div>
          </Link>
        ) : (
          <div />
        )}
        <div className="flex items-center justify-end gap-4 sm:gap-8 font-atkinson">
          <Link
            href="/menu"
            className={pathname === "/menu" ? "text-white/50" : "text-white"}
          >
            MENU
          </Link>
          <Link
            href="/our-story"
            className={
              pathname === "/our-story" ? "text-white/50" : "text-white"
            }
          >
            OUR STORY
          </Link>
          <Link
            href="/staff"
            className={pathname === "/staff" ? "text-white/50" : "text-white"}
          >
            MEET OUR STAFF
          </Link>
        </div>
      </div>
      {pathname === "/" && (
        <div className="absolute top-0 left-4 flex items-center justify-center">
          <Image
            src="https://humble-cup-images.s3.us-east-1.amazonaws.com/pothos_hanging.png"
            alt="Humble Cup Logo Background"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
}
