"use client";

import { MenuPreview } from "@/components/sections/MenuPreview";
import Divider from "@/components/ui/divider";
import Image from "next/image";
import {
  MENU_ITEMS,
  HOUSE_MADE_FLAVORS,
  FLAVORS,
  MILK_OPTIONS,
  FOOD_MENU,
} from "@/lib/consts";

export default function Menu() {
  return (
    <section className="container mx-auto my-8">
      <MenuPreview title="Seasonal Menu" link={false} />

      <div className="p-8 px-4 max-w-2xl sm:max-w-3xl lg:max-w-6xl mx-auto">
        <div className="p-8 rounded-lg shadow-md bg-stone-50">
          <h2 className="text-4xl text-center my-4 text-primary tracking-wide">
            Drink Menu
          </h2>
          <Divider />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {MENU_ITEMS.map((section, idx) => (
              <div
                key={idx}
                className="border-b border-amber-100 pb-12 last:border-b-0"
              >
                <h2 className="text-2xl font-light mb-2 text-center text-amber-900">
                  {section.section}
                </h2>
                <p className="text-center text-sm text-amber-700 mb-8">
                  {section.subtitle}
                </p>

                <div className="grid gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex flex-col sm:flex-row gap-6 sm:items-center justify-between py-3 px-4 rounded-lg hover:bg-amber-50 transition-colors"
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
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-light my-2 text-center text-amber-900">
                House Made Flavors
              </h2>
              <div className="flex flex-wrap gap-2 my-4 justify-center">
                {HOUSE_MADE_FLAVORS.map((flavor, flavorIdx) => (
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
                {FLAVORS.map((flavor, flavorIdx) => (
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
                {MILK_OPTIONS.map((milk, milkIdx) => (
                  <div
                    key={milkIdx}
                    className="bg-blue-200 rounded-lg px-2 py-1"
                  >
                    <h3 className="text-md font-medium">{milk}</h3>
                  </div>
                ))}
              </div>
            </div>
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
      </div>

      <div className="max-w-2xl sm:max-w-3xl lg:max-w-6xl mx-auto">
        <div className="p-8 rounded-lg shadow-md bg-stone-50">
          <h2 className="text-4xl text-center my-4 text-primary tracking-wide">
            Food Menu
          </h2>
          <Divider />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {FOOD_MENU.map((section, idx) => (
              <div
                key={idx}
                className="border-b border-amber-100 pb-12 last:border-b-0"
              >
                <h2 className="text-2xl font-light mb-2 text-center text-amber-900">
                  {section.section}
                </h2>
                <p className="text-center text-sm text-amber-700 mb-8">
                  {section.subtitle}
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
                      <div className="flex justify-end sm:justify-start gap-3">
                        <span className="font-medium">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
