"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StorePage() {
  return (
    <div className="w-full min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-6xl mb-8"
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          🐼
        </motion.div>

        <h1 className="text-4xl md:text-6xl uppercase tracking-tighter text-brand-green mb-4">
          Store
        </h1>

        <div className="w-12 h-[1px] bg-brand-green/40 mx-auto mb-6" />

        <p className="text-lg uppercase tracking-[0.15em] text-foreground/70 mb-2">
          Opening Soon
        </p>
        <p className="text-sm text-foreground/50 leading-relaxed max-w-xs mx-auto">
          Merch, matcha kits, and pantry essentials — coming to you soon. Follow us on Instagram for updates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="https://instagram.com/jp_matcha_panda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-background px-8 py-3 uppercase tracking-[0.15em] text-xs font-bold hover:bg-foreground transition-colors duration-300"
          >
            Follow for Updates
          </Link>
          <Link
            href="/"
            className="uppercase tracking-[0.15em] text-xs font-medium text-foreground/60 hover:text-brand-green transition-colors border-b border-foreground/20 pb-0.5"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
