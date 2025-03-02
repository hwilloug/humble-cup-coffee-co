"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Divider from "../ui/divider";
import Image from "next/image";
export function Contact() {
  return (
    <section className="py-16 sm:py-24 px-8 sm:px-0 bg-brick w-full">
      <div className="container mx-auto px-4 bg-stone-50 shadow-xl rounded-lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-light text-primary tracking-wide mb-4">
              Get in Touch
            </h2>
            <Divider />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We'd love to hear from you. Whether you have a question about our
              services, need help, or just want to share your coffee experience,
              we're here to listen.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            {/* Map */}
            <div className="border-4 border-primary rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.986518426392!2d-80.9355866!3d35.00704259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856857ed1763b59%3A0x2805c206cbf0cfca!2sHumble%20Cup%20Coffee%20Co.!5e0!3m2!1sen!2sus!4v1739987012065!5m2!1sen!2sus"
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="p-6 sm:p-8 grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-light mb-4 text-center">
                  Contact Information
                </h3>
                <Divider />
                <div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-gray-600">
                        414 Tom Hall St, Fort Mill, SC 29715
                      </span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-gray-600">
                        <a href="tel:7045642933">(704) 564-2933</a>
                      </span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-gray-600">
                        <a href="mailto:nick@humblecupcoffeeco.com">
                          nick@humblecupcoffeeco.com
                        </a>
                      </span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p>Monday - Friday: 6am - 5pm</p>
                        <p>Saturday & Sunday: 7am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-light mb-4 text-center">
                  Follow Us
                </h3>
                <Divider />
                <div className="space-y-4">
                  <a
                    href="https://www.facebook.com/HumbleCupCoffeeCo/"
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <Image
                      src="/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                    <span className="text-gray-600">Instagram</span>
                  </a>
                  <a
                    href="https://www.instagram.com/humblecupcoffeeco/"
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <Image
                      src="/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                    <span className="text-gray-600">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
