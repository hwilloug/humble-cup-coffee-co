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
        <DialogContent className="bg-background border border-primary/20 shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-primary">
              {openIndex !== null ? coffeeBags[openIndex].alt : ""}
            </DialogTitle>
            <Divider />
          </DialogHeader>
          <DialogDescription className="text-foreground/80 space-y-4">
            <div className="grid grid-cols-2 items-center gap-1">
              {openIndex !== null && (
                <Image
                  src={coffeeBags[openIndex].src}
                  alt={coffeeBags[openIndex].alt}
                  width={imgSize}
                  height={imgSize}
                  className="w-full"
                />
              )}
              <div className="space-y-4">
                <div className="p-3 bg-primary/30 rounded-md ">
                  <h3 className="text-lg text-primary font-bold mb-2">Blend</h3>
                  <div className="flex flex-col gap-1 justify-center">
                    {openIndex !== null &&
                      coffeeBags[openIndex].blend.map((blend, i) => (
                        <p key={i}>{blend}</p>
                      ))}
                  </div>
                </div>
                <div className="p-3 bg-primary/30 rounded-md">
                  <h3 className="text-lg text-primary font-bold mb-2">Notes</h3>
                  <div className="flex flex-col gap-1 justify-center">
                    {openIndex !== null &&
                      coffeeBags[openIndex].notes.map((note, i) => (
                        <p key={i}>{note}</p>
                      ))}
                  </div>
                </div>
                <div className="p-3 bg-primary/30 rounded-md">
                  <h3 className="text-lg text-primary font-bold mb-2">Roast</h3>
                  <p>{openIndex !== null && coffeeBags[openIndex].roast}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p>$16.99</p>
            </div>
            <div className="p-3 mt-6 flex justify-center">
              <Button className="px-6" onClick={() => setOpenIndex(null)}>
                Close
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
