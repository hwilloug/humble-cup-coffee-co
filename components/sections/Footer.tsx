import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-6 sm:p-8">
      <div className="container mx-auto px-4">
        {/* Brand Section */}
        <div className="flex flex-row justify-center items-center mb-8 gap-2">
          <Image
            src="/humble-logo-dark.png"
            alt="Humble Cup Coffee Co."
            width={100}
            height={100}
          />
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-light tracking-wide">
              Humble Cup Coffee Co.
            </h2>
            <p className="mt-2 text-gray-300">
              Crafting moments of joy, one cup at a time
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:text-gray-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="/our-story" className="hover:text-gray-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/staff" className="hover:text-gray-300">
                  Meet our Staff
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-gray-300">
                  Events
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-gray-300">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>414 Tom Hall St</li>
              <li>Fort Mill, SC 29715</li>
              <li>
                Tel: <a href="tel:(704) 564-2933">(704) 564-2933</a>
              </li>
              <li>
                <a href="mailto:nick@humblecupcoffeeco.com">
                  nick@humblecupcoffeeco.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2">
                <li>Mon - Fri: 6am - 5pm</li>
                <li>Sat - Sun: 7am - 5pm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/HumbleCupCoffeeCo/" className="hover:text-gray-300">
                  <Image
                    src="/facebook-white.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://www.instagram.com/humblecupcoffeeco/" className="hover:text-gray-300">
                  <Image
                    src="/instagram-white.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Humble Cup Coffee Co. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
