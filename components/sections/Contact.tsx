'use client';

import { useParallax } from '@/hooks/useParallax';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const scrollY = useParallax();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-16 sm:py-24 bg-background overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          transform: `translateY(${(scrollY - 3000) * 0.1}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-12 sm:mb-16"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 3000) * 0.1)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 2900) / 500))
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We'd love to hear from you. Whether you have a question about our services, need help, or just want to share your coffee experience, we're here to listen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div 
              className="bg-stone-50 p-6 sm:p-8 shadow-sm"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 3000) * 0.15)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 2900) / 500))
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div 
              className="space-y-8"
              style={{
                transform: `translateY(${Math.max(0, (scrollY - 3000) * 0.2)}px)`,
                opacity: Math.min(1, Math.max(0, (scrollY - 2900) / 500))
              }}
            >
              {/* Map */}
              <div className="bg-stone-50 p-6 sm:p-8 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744775!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647951865157!5m2!1sen!2sus"
                  className="w-full h-[300px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="bg-stone-50 p-6 sm:p-8 shadow-sm space-y-6">
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
      </div>
    </section>
  );
}