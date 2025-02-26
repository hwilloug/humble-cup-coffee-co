import Image from "next/image";
import Divider from "../ui/divider";

export function Pastries() {
  return (
    <section className="bg-primary/10">
      <div className="container mx-auto px-4 my-16 p-12 max-w-4xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-primary font-light tracking-wide mb-4 sm:mb-6 mx-auto text-center">
            Our Pastries
          </h2>
          <Divider />
          <div className="flex gap-4 justify-center mt-12">
            <Image
              src="https://humble-cup-images.s3.us-east-1.amazonaws.com/DSC_4446.jpg"
              alt="Pastry"
              width={600}
              height={600}
              className="w-full rounded-lg max-w-2xl"
            />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-light tracking-wide mb-4 sm:mb-6 mx-auto text-center leading-loose">
            Indulge in our freshly baked pastries, made from scratch daily in
            our kitchen. From buttery croissants to delectable muffins and
            artisanal breads, each bite is crafted with the same dedication to
            quality as our coffee. Perfect companions for your morning brew or
            afternoon treat.
          </h3>
        </div>
      </div>
    </section>
  );
}
