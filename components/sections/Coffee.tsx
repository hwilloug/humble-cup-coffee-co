import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import Divider from "../ui/divider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Coffee() {
  const scrollY = useParallax();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const imgSize = 150;

  const imgStyle =
    "hover:scale-110 transition-all duration-300 hover:rotate-1 w-full hover:cursor-pointer";

  const coffeeBags = [
    {
      src: "https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_1.png",
      alt: "Compassion Blend",
      blend: ["Columbia"],
      notes: ["Balanced", "Citrus", "Vanilla"],
      roast: "Medium",
    },
    {
      src: "https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_2.png",
      alt: "Acceptance Blend",
      blend: ["Guatemala", "Kenya"],
      notes: ["Bright & Crisp", "Plum", "Vanilla"],
      roast: "Light",
    },
    {
      src: "https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_3.png",
      alt: "Gratitude Blend",
      blend: ["Sumatra", "Brazil"],
      notes: ["Brown Sugar", "Warming Spices", "Soft & Sweet"],
      roast: "Medium-Dark",
    },
    {
      src: "https://humble-cup-images.s3.us-east-1.amazonaws.com/coffee_bag_4.png",
      alt: "Desire Blend",
      blend: ["French Roast"],
      notes: ["Smokey Sweet", "Chocolate", "Full-bodied"],
      roast: "Dark",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-4 my-16 max-w-4xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-primary tracking-wide mb-4 sm:mb-6 mx-auto text-center">
            Our Coffee
          </h2>
          <Divider />
          <div className="flex gap-4 mt-12 bg-secondary p-4 rounded-lg">
            {coffeeBags.map((bag, index) => (
              <Image
                key={bag.alt}
                src={bag.src}
                alt={bag.alt}
                width={imgSize}
                height={imgSize}
                className={imgStyle}
                onClick={() => setOpenIndex(index)}
              />
            ))}
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
      <Dialog open={openIndex !== null} onOpenChange={() => setOpenIndex(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              {openIndex !== null ? coffeeBags[openIndex].alt : ""}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <h3 className="text-lg text-primary font-bold underline">
                  Blend
                </h3>
                <div className="flex gap-2 justify-center">
                  {openIndex !== null &&
                    coffeeBags[openIndex].blend.map((blend) => <p>{blend}</p>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg text-primary font-bold underline">
                  Notes
                </h3>
                <div className="flex gap-2 justify-center">
                  {openIndex !== null &&
                    coffeeBags[openIndex].notes.map((note) => <p>{note}</p>)}
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg text-primary font-bold underline">
                Roast
              </h3>
              <p>{openIndex !== null && coffeeBags[openIndex].roast}</p>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
