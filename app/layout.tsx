import { TopInfoBar } from "@/components/sections/TopInfoBar";
import "./globals.css";
import type { Metadata } from "next";
import { Klee_One, Lexend_Exa, Roboto } from "next/font/google";
import { Contact } from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const inter = Roboto({ subsets: ["latin"], weight: "300" });
const headerFont = Lexend_Exa({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-atkinson",
});
const titleFont = Klee_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Humble Cup Coffee Co.",
  description: "Humble Cup Coffee Co.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${headerFont.variable} ${titleFont.variable} min-h-screen overflow-x-hidden`}
      >
        <TopInfoBar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
