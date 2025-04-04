import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import MouseMoveEffect from "@/components/sub/mouse-move-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bazaar Digital",
  description: "Bazaar Digital is a leading digital marketing agency specializing in website development and social media marketing services.",
  keywords: [
    'Bazaar Digital',
    'Software Solutions',
    'Bihar software house',
    'Bihar website developer',
    'Bihar web developer',
    'Bihar Digital Marketing',
    'Bihar SEO',
    'Bihar Social Media Marketing',
    'Bihar Digital Marketing Agency',
    'Bihar Social Media Marketing Agency',
    'Bihar Search Engine Optimization',
  ],
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <MouseMoveEffect />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
