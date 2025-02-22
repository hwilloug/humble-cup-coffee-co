import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import Divider from "../ui/divider";

export default function Coffee() {
  const scrollY = useParallax();

  const imgSize = 150;

  const imgStyle =
    "hover:scale-110 transition-all duration-300 hover:rotate-1 w-full";

  return (
    <section>
      <div className="container mx-auto px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-primary tracking-wide mb-4 sm:mb-6 mx-auto text-center">
            Our Coffee
          </h2>
          <Divider />
          <div className="flex gap-4 justify-between mt-12 bg-secondary p-4 rounded-lg">
            <Image
              src="https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_1.png"
              alt="Coffee"
              width={imgSize}
              height={imgSize}
              className={imgStyle}
            />
            <Image
              src="https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_2.png"
              alt="Coffee"
              width={imgSize}
              height={imgSize}
              className={imgStyle}
            />
            <Image
              src="https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_3.png"
              alt="Coffee"
              width={imgSize}
              height={imgSize}
              className={imgStyle}
            />
            <Image
              src="https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_4.png"
              alt="Coffee"
              width={imgSize}
              height={imgSize}
              className={imgStyle}
            />
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl tracking-wide mb-4 sm:mb-6 mx-auto text-center leading-loose">
            Crafted with Passion, Roasted with Precision. Our master roasters
            carefully select and blend premium beans from sustainable farms
            worldwide, bringing you a perfect cup every time. Experience the
            artistry in every sip.
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4 my-16">
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
              height={imgSize}
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
