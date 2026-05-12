"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const isHomepage = pathname === "/";
  const isTop = scrollDirection === "top" && isHomepage;
  const isHidden = scrollDirection === "down";

  // Wait for preloader to finish before showing header
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("loaded");
    if (hasLoaded) {
      setPreloaderDone(true);
      return;
    }
    const timer = setTimeout(() => setPreloaderDone(true), 3400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-4 md:px-10",
          isTop ? "bg-transparent text-background" : "bg-background text-foreground shadow-sm",
          isHidden || !preloaderDone ? "-translate-y-[120%]" : "translate-y-0"
        )}
      >
        <div className="flex items-center justify-between h-14 md:h-20">

          {/* Left: Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            suppressHydrationWarning
            className="uppercase text-xs tracking-[0.2em] font-medium hover:opacity-70 transition-opacity w-16 md:w-20 min-h-[44px] flex items-center"
          >
            Menu
          </button>

          {/* Left-Center: Nav Links (desktop only) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#restaurant" className="uppercase text-xs tracking-[0.15em] font-medium hover:text-brand-green transition-colors">
              Locations
            </Link>
            <Link href="/#craft" className="uppercase text-xs tracking-[0.15em] font-medium hover:text-brand-green transition-colors">
              Our Craft
            </Link>
          </nav>

          {/* Center: Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <img
              src="/logo.png"
              alt="Matcha Panda Cafe"
              className={clsx(
                "h-10 md:h-14 w-auto object-contain transition-all duration-300",
                isTop ? "brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* Right-Center: Nav Links (desktop only) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/menu" className="uppercase text-xs tracking-[0.15em] font-medium hover:text-brand-green transition-colors">
              Menu
            </Link>
            <Link href="/store" className="uppercase text-xs tracking-[0.15em] font-medium hover:text-brand-green transition-colors">
              Store
            </Link>
          </nav>

          {/* Right: Cart */}
          <div className="flex justify-end w-16 md:w-20">
            <button suppressHydrationWarning className="uppercase text-xs tracking-[0.2em] font-medium hover:opacity-70 transition-opacity min-h-[44px] flex items-center">
              Cart(0)
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
