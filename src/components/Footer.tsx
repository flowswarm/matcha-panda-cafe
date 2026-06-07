"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

interface AccordionItem {
  question: string;
  answer: string;
}

const faqs: AccordionItem[] = [
  {
    question: "Do you offer dairy-free milk options?",
    answer: "Yes, we offer a variety of alternative milks including oat and almond milk for all our matcha lattes and specialty coffees."
  },
  {
    question: "Are your crepe cakes made in-house?",
    answer: "Absolutely! We layer our signature Mille Crepe Cakes fresh daily to ensure the perfect texture and flavor."
  },
  {
    question: "Can I order a custom cake for an event?",
    answer: "Yes, we do take special orders for whole crepe cakes. Please reach out to us in advance to place an order."
  },
  {
    question: "Is there seating available?",
    answer: "Both our Chinatown and Rittenhouse locations offer comfortable seating for you to enjoy your drinks and desserts."
  }
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <footer className="w-full bg-brand-green text-background z-0 flex flex-col justify-between pt-20 pb-8 px-4 md:px-8 min-h-fit relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/panda-chase-footer.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-brand-green/80 z-0" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 flex-grow">
        
        {/* Left Column: FAQ */}
        <div className="max-w-xl">
          <h2 className="text-3xl uppercase tracking-wider mb-8">FAQ</h2>
          <div className="border-t border-background/20">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-background/20">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    suppressHydrationWarning
                    className="w-full flex justify-between items-center py-4 text-left uppercase tracking-wider text-sm hover:opacity-70 transition-opacity"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl leading-none">{isOpen ? "-" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-sm leading-relaxed pb-4 opacity-80"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Address & Newsletter */}
        <div className="flex flex-col md:items-end md:text-right">
          <div className="mb-12">
            <h3 className="text-xl uppercase tracking-wider mb-4">Chinatown</h3>
            <p className="text-sm opacity-80 uppercase leading-relaxed">
              202 N 9th St<br />
              Philadelphia, PA 19107<br />
              Mon-Thu/Sun: 12PM-10PM<br />
              Fri: 12PM-10:30PM | Sat: 12PM-11PM
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl uppercase tracking-wider mb-4">Rittenhouse</h3>
            <p className="text-sm opacity-80 uppercase leading-relaxed">
              2033 Chestnut St<br />
              Philadelphia, PA 19103<br />
              Mon-Thu: 11AM-9PM<br />
              Fri: 11AM-9:30PM | Sat: 10AM-9PM
            </p>
          </div>

          <div className="w-full max-w-sm">
            <h3 className="text-sm uppercase tracking-wider mb-4 text-left md:text-right">Join our newsletter</h3>
            <form className="flex border-b border-background/40 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                suppressHydrationWarning
                className="bg-transparent outline-none flex-grow placeholder:text-background/50 uppercase text-sm"
              />
              <button type="submit" suppressHydrationWarning className="uppercase text-sm tracking-wider font-bold hover:opacity-70 transition-opacity ml-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mt-16 pt-8 border-t border-background/20 text-xs uppercase tracking-widest gap-4">
        <div>&copy; {new Date().getFullYear()} Matcha Panda Cafe</div>
        <div className="flex space-x-6">
          <Link href="https://instagram.com/jp_matcha_panda" className="hover:opacity-70 transition-opacity">Instagram</Link>
          <Link href="mailto:info@matchapanda.com" className="hover:opacity-70 transition-opacity">Contact</Link>
          <Link href="/terms" className="hover:opacity-70 transition-opacity">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
