import Image from "next/image";

import Divider from "../ui/divider";
export default function Coffee() {
  return (
    <section className="bg-primary/10 py-1 my-16">
      <div className="container mx-auto px-4 my-16 max-w-4xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-primary tracking-wide mb-4 sm:mb-6 mx-auto text-center">
            Our Coffee
          </h2>
          <Divider />
          <Image
            src="/coffee-beans.png"
            alt="coffee beans"
            width={500}
            height={500}
            className="w-full"
          />
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
    </section>
  );
}
