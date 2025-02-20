import { TopInfoBar } from "@/components/sections/TopInfoBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Contact } from "@/components/sections/Contact";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artisan Coffee Co. | Premium Coffee Experience",
  description:
    "Experience the finest coffee in town at Artisan Coffee Co. Featuring premium beans, fresh daily roasts, and a warm atmosphere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopInfoBar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
