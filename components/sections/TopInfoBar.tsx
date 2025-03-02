"use client";

import { MapPin, Phone, Clock, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function TopInfoBar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemClass = "bg-stone-50 text-primary p-8 hover:bg-stone-200";

  return (
    <div>
      <div className="w-full px-4 py-2 bg-primary text-white">
        <div className="hidden sm:flex justify-between items-center">
          {pathname !== "/" ? (
            <Link href="/">
              <div className="flex items-center justify-center gap-1 sm:gap-4 ml-4">
                <Image
                  src="https://humble-cup-images.s3.us-east-1.amazonaws.com/humble-logo-dark.png"
                  alt="Humble Cup Logo"
                  width={100}
                  height={100}
                />
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
            <Link
              href="/events"
              className={
                pathname === "/events" ? "text-white/50" : "text-white"
              }
            >
              EVENTS
            </Link>
          </div>
        </div>
        {pathname === "/" && (
          <>
            <div className="absolute top-0 left-0 w-1/4 lg:w-1/5 lg:left-12">
              <Image
                src="https://humble-cup-images.s3.us-east-1.amazonaws.com/plant-2.png"
                alt="Humble Cup Logo Background"
                width={200}
                height={200}
                className="w-full"
              />
            </div>
            <div className="absolute top-10 right-4 sm:right-12 w-1/5 lg:w-1/6 lg:right-24">
              <Image
                src="https://humble-cup-images.s3.us-east-1.amazonaws.com/plant-3.png"
                alt="Humble Cup Logo Background"
                width={200}
                height={200}
                className="w-full"
              />
            </div>
          </>
        )}
        <div className="sm:hidden flex justify-center w-full">
          <Menu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isMenuOpen ? "rotate-90" : ""} transition-all duration-300`}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-10 left-0 w-full h-full bg-black/50 z-50">
          <div className="flex flex-col items-stretch text-center h-full">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>HOME</div>
            </Link>
            <Link href="/menu" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>MENU</div>
            </Link>
            <Link href="/our-story" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>OUR STORY</div>
            </Link>
            <Link href="/staff" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>MEET OUR STAFF</div>
            </Link>
            <Link href="/events" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>EVENTS</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
