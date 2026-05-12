"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("loaded");

    if (hasLoaded) {
      setShowPreloader(false);
      return;
    }

    sessionStorage.setItem("loaded", "true");
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!showPreloader) {
      document.body.style.overflow = "";
    }
  }, [showPreloader]);

  if (!showPreloader) return null;

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-brand-green"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo fade-in and scale */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src="/logo.png"
              alt="Matcha Panda Cafe"
              className="w-32 md:w-44 brightness-0 invert drop-shadow-lg"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Subtle loading bar */}
            <div className="w-24 h-[2px] bg-background/20 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-background/80 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.6, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              className="text-background/60 text-xs uppercase tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Philadelphia
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
