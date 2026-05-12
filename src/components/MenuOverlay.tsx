"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Restaurants", href: "/#restaurant" },
    { name: "Our Craft", href: "/#craft" },
    { name: "Menu", href: "/menu" },
    { name: "Store", href: "/store" },
    { name: "Contact & Info", href: "/#contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} // smooth sliding easing
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 md:top-8 md:left-8 uppercase tracking-widest text-sm font-medium flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
            Close
          </button>

          {/* Links List */}
          <nav className="flex flex-col items-center space-y-4 md:space-y-6">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center gap-4 text-3xl md:text-5xl uppercase tracking-tight font-medium hover:text-brand-green transition-colors"
                >
                  {link.name}
                  <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
