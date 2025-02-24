"use client";

import { Coffee, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Divider from "../ui/divider";
export function Features() {
  return (
    <section className="mb-8 bg-primary/10">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16">
          {[
            {
              icon: Coffee,
              title: "Premium Beans",
              description: "Sourced from the finest estates worldwide",
            },
            {
              icon: Clock,
              title: "Fresh Daily",
              description: "Roasted in-house every morning",
            },
            {
              icon: MapPin,
              title: "Prime Location",
              description: "In the heart of the city",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-500"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary transition-all duration-200 hover:rotate-6" />
              <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <h2 className="mt-16 text-3xl sm:text-4xl text-primary font-light tracking-wide mb-4 sm:mb-6 mx-auto text-center">
            Hours & Location
          </h2>
          <Divider />
          <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
            414 Tom Hall St, Fort Mill, SC 29715
          </p>
          <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
            Monday - Friday: 6am - 5pm
          </p>
          <p className="text-gray-600 text-sm sm:text-base text-center">
            Saturday - Sunday: 7am - 5pm
          </p>
        </div>
      </div>
      <Image
        src="https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_1318-2.jpg"
        alt="Image 1"
        width={100}
        height={100}
        className="w-full"
      />
    </section>
  );
}
