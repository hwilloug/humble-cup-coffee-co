'use client';

import { useParallax } from '@/hooks/useParallax';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const scrollY = useParallax();
  return (
    <section className="relative py-16 sm:py-24 pt-96 bg-brick">
      <div className="container mx-auto px-4 bg-stone-50 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center p-6 sm:p-8"
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We'd love to hear from you. Whether you have a question about our services, need help, or just want to share your coffee experience, we're here to listen.
            </p>
          </div>

            {/* Contact Information */}
            <div className="space-y-8">
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
              <div className="p-6 sm:p-8 space-y-6">
                <h3 className="text-xl sm:text-2xl font-light mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">123 Coffee Street, Downtown</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">hello@artisancoffee.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-gray-600">Mon-Sun: 7am - 8pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}