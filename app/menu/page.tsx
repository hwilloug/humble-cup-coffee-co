"use client";

import { MenuPreview } from "@/components/sections/MenuPreview";
import Image from "next/image";

export default function Menu() {
  const menuItems: {
    section: string;
    items: {
      name: string;
      smOz?: number;
      smPrice?: number;
      lgOz?: number;
      lgPrice?: number;
      smIcedPrice?: number;
      smIcedOz?: number;
      lgIcedPrice?: number;
      lgIcedOz?: number;
      description?: string;
    }[];
  }[] = [
    {
      section: "Coffee & Espresso",
      items: [
        {
          name: "Coffee",
          smOz: 12,
          smPrice: 3,
          lgOz: 16,
          lgPrice: 3.5,
          description: "Choose from our daily selection of drip coffee",
        },
        {
          name: "French Press",
          smOz: 12,
          smPrice: 4.5,
          description: "Choose from our full selection of coffee beans",
        },
        {
          name: "Espresso",
          smOz: 4,
          smPrice: 3,
        },
        {
          name: "Americano",
          smOz: 12,
          smPrice: 3,
          lgOz: 16,
          lgPrice: 4,
          smIcedOz: 16,
          smIcedPrice: 3.5,
          lgIcedOz: 24,
          lgIcedPrice: 4.5,
          description: "Espresso and hot water",
        },
        {
          name: "Cortado",
          smOz: 4,
          smPrice: 4,
          description: "Equal parts espresso and steamed milk",
        },
        {
          name: "Cappuccino",
          smOz: 12,
          smPrice: 4.5,
          description: "Espresso and steamed milk with a layer of foam",
        },
        {
          name: "Latte",
          smOz: 12,
          smPrice: 5,
          lgOz: 16,
          lgPrice: 5.5,
          smIcedPrice: 5,
          smIcedOz: 16,
          lgIcedPrice: 6,
          lgIcedOz: 24,
          description: "Espresso and steamed milk",
        },
        {
          name: "Cold Brew",
          smIcedOz: 16,
          smIcedPrice: 4.5,
          lgIcedOz: 24,
          lgIcedPrice: 6,
        },
        {
          name: "Affagato",
          smPrice: 6,
          smOz: 2,
          description: "Espresso over gelato",
        },
      ],
    },
  ];

  const houseMadeFlavors = ["Brown Sugar Rosemary", "Vanilla Sage"];

  const flavors = [
    "Vanilla",
    "Caramel",
    "Hazelnut",
    "Lavendar",
    "Sugar Free Vanilla",
    "Local Honey",
    "Dark Mocha",
    "White Mocha",
  ];

  const milkOptions = ["Whole", "1%", "Almond", "Oat"];

  return (
    <section>
      <div className="container mx-auto">
      <MenuPreview link={false} />

        <div className="relative p-8 px-4 max-w-xl md:max-w-2xl mx-auto">
          <Image
            src="https://humble-cup-images.s3.us-east-1.amazonaws.com/scalloped-edge-blue.png"
            width={500}
            height={500}
            className="w-full"
            alt="scalloped edge"
          />
          <div className="relative p-8 rounded-lg shadow-md bg-stone-50">
            <h1 className="text-4xl font-light text-center my-4">Everyday Menu</h1>
            <div className="w-20 h-1 bg-amber-800 mx-auto mb-12 rounded-full"></div>

            <div className="space-y-16">
              {menuItems.map((section, idx) => (
                <div key={idx} className="relative">
                  <div className="border-b border-amber-100 pb-12 last:border-b-0">
                    <h2 className="text-2xl font-light mb-2 text-center text-amber-900">
                      {section.section}
                    </h2>
                    <p className="text-center text-sm text-amber-700 mb-8">
                      All coffee drinks made with locally roasted beans
                    </p>

                    <div className="grid gap-6">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-amber-900">
                              {item.name}
                            </h3>
                            {item.description && (
                              <p className="text-sm text-amber-700">
                                {item.description}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-6 text-sm items-center">
                            {/* Hot drinks */}
                            {(item.smOz || item.lgOz) && (
                              <div className="space-y-1.5">
                                <div className="text-xs uppercase tracking-wide text-amber-600 mb-1.5 text-center">
                                  Hot
                                </div>
                                {item.smOz && (
                                  <div className="flex justify-end sm:justify-start gap-3">
                                    <span className="text-amber-700">
                                      {item.smOz} oz
                                    </span>
                                    <span className="font-medium">
                                      ${item.smPrice?.toFixed(2)}
                                    </span>
                                  </div>
                                )}
                                {item.lgOz && (
                                  <div className="flex justify-end sm:justify-start gap-3">
                                    <span className="text-amber-700">
                                      {item.lgOz} oz
                                    </span>
                                    <span className="font-medium">
                                      ${item.lgPrice?.toFixed(2)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Iced drinks */}
                            {(item.smIcedOz || item.lgIcedOz) && (
                              <div className="space-y-1.5 border-l border-amber-200 pl-6">
                                <div className="text-xs uppercase tracking-wide text-amber-600 mb-1.5 text-center">
                                  Iced
                                </div>
                                {item.smIcedOz && (
                                  <div className="flex justify-end sm:justify-start gap-3">
                                    <span className="text-amber-700">
                                      {item.smIcedOz} oz
                                    </span>
                                    <span className="font-medium">
                                      ${item.smIcedPrice?.toFixed(2)}
                                    </span>
                                  </div>
                                )}
                                {item.lgIcedOz && (
                                  <div className="flex justify-end sm:justify-start gap-3">
                                    <span className="text-amber-700">
                                      {item.lgIcedOz} oz
                                    </span>
                                    <span className="font-medium">
                                      ${item.lgIcedPrice?.toFixed(2)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      <div>
                        <h2 className="text-2xl font-light my-2 text-center text-amber-900">
                          House Made Flavors
                        </h2>
                        <div className="flex flex-wrap gap-2 my-4 justify-center">
                          {houseMadeFlavors.map((flavor, flavorIdx) => (
                            <div
                              key={flavorIdx}
                              className="bg-amber-700 text-white rounded-lg px-2 py-1"
                            >
                              <h3 className="text-md font-medium">{flavor}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-light my-2 text-center text-amber-900">
                          Flavors
                        </h2>
                        <div className="flex flex-wrap gap-2 my-4 justify-center">
                          {flavors.map((flavor, flavorIdx) => (
                            <div
                              key={flavorIdx}
                              className="bg-amber-600 text-white rounded-lg px-2 py-1"
                            >
                              <h3 className="text-md font-medium">{flavor}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-light my-2 text-center text-amber-900">
                          Milk Options
                        </h2>
                        <div className="flex flex-wrap gap-2 my-4 justify-center">
                          {milkOptions.map((milk, milkIdx) => (
                            <div key={milkIdx} className="bg-blue-200 rounded-lg px-2 py-1">
                              <h3 className="text-md font-medium">{milk}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-amber-100 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-amber-700"
                >
                  <path d="M12 3.75a6.715 6.715 0 00-3.722 1.118.75.75 0 11-.828-1.25 8.25 8.25 0 0113.927 6 8.25 8.25 0 01-13.927 6 .75.75 0 11.828-1.25A6.715 6.715 0 0012 15.75c3.722 0 6.75-3.028 6.75-6.75S15.722 3.75 12 3.75z" />
                </svg>
              </div>
              <div className="aspect-square bg-amber-100 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-amber-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="aspect-square bg-amber-100 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-amber-700"
                >
                  <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15.45l2.223-.67c.5-.15.836-.608.815-1.122l-.353-9.667c-.019-.509-.403-.918-.909-.993a8.25 8.25 0 00-13.701 12.602z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Image
            src="https://humble-cup-images.s3.us-east-1.amazonaws.com/scalloped-edge-blue.png"
            alt="Pothos Hanging"
            width={500}
            height={500}
            className="rotate-180 w-full"
          />
        </div>
      </div>
    </section>
  );
}
