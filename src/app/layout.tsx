import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matchapandacafe.com"),
  title: {
    default: "Matcha Panda Cafe — Premium Matcha & Crepe Cakes in Philadelphia",
    template: "%s | Matcha Panda Cafe",
  },
  description:
    "Philadelphia's home for ceremonial-grade Uji matcha lattes, handmade Mille Crepe Cakes, fresh-baked cream puffs, iced drip teas, bubble tea, and specialty coffees. Chinatown & Rittenhouse locations.",
  keywords: [
    "matcha latte Philadelphia",
    "mille crepe cake Philly",
    "cream puffs Philadelphia",
    "matcha panda cafe",
    "bubble tea Chinatown Philadelphia",
    "best matcha Philadelphia",
    "Japanese desserts Philly",
    "iced drip tea",
    "matcha ice cream",
    "specialty coffee Philadelphia",
  ],
  authors: [{ name: "Matcha Panda Cafe" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Matcha Panda Cafe",
    title: "Matcha Panda Cafe — Premium Matcha & Crepe Cakes in Philadelphia",
    description:
      "Ceremonial-grade Uji matcha, handmade Mille Crepe Cakes, fresh-baked cream puffs & more. Two locations in Chinatown & Rittenhouse.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Matcha Panda Cafe Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matcha Panda Cafe — Premium Matcha & Crepe Cakes in Philadelphia",
    description:
      "Ceremonial-grade Uji matcha, handmade Mille Crepe Cakes, fresh-baked cream puffs & more.",
    images: ["/logo.png"],
  },
};

import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <Preloader />
          <Header />
          
          {/* Main Content with higher z-index to sit above the sticky footer */}
          <main className="relative z-10 bg-background flex-grow w-full">
            {children}
          </main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
