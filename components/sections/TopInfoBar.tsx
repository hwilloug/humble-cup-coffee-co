"use client";

import { MapPin, Phone, Clock, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function TopInfoBar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemClass = "bg-stone-50 text-primary px-8 py-4 hover:bg-stone-200";

  return (
    <div>
      <div className="w-full px-4 py-2 bg-primary text-white">
        <div className="hidden sm:flex justify-between items-center">
          {pathname !== "/" ? (
            <Link href="/">
              <div className="flex items-center justify-center gap-1 sm:gap-4 mx-4">
                <Image
                  src="/humble-logo-dark.png"
                  alt="Humble Cup Logo"
                  width={100}
                  height={100}
                />
              </div>
            </Link>
          ) : (
            <div />
          )}
          <div className="flex items-center justify-end text-center gap-4 sm:gap-6 md:gap-8 font-atkinson text-sm md:text-md">
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
              href="/wholesale"
              className={
                pathname === "/wholesale" ? "text-white/50" : "text-white"
              }
            >
              WHOLESALE
            </Link>
            <Link
              href="/events"
              className={
                pathname === "/events" ? "text-white/50" : "text-white"
              }
            >
              EVENTS & BOOKING
            </Link>
          </div>
        </div>
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
              <div className={menuItemClass}>Home</div>
            </Link>
            <Link href="/menu" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>Menu</div>
            </Link>
            <Link href="/our-story" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>Our Story</div>
            </Link>
            <Link href="/staff" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>Meet Our Staff</div>
            </Link>
            <Link href="/wholesale" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>Wholesale</div>
            </Link>
            <Link href="/events" onClick={() => setIsMenuOpen(false)}>
              <div className={menuItemClass}>Events & Booking</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
