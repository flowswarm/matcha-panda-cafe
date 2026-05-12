"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface MenuItem {
  code?: string;
  name: string;
  price: string;
  description: string;
  image?: string;
}

interface MenuCategory {
  category: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "Fresh Baked Cream Puffs",
    emoji: "🧁",
    items: [
      {
        code: "P1",
        name: "Purple Yam \"Ube\" Puff",
        price: "$5.90",
        description: "Large size, filled with vibrant ube cream",
        image: "/menu/Purple-Yam-Ube-Puff5.90.jpg",
      },
      {
        code: "P3",
        name: "Matcha Puff",
        price: "$5.90",
        description: "Matcha-infused cream puff, option for large size",
        image: "/menu/Matcha-Puff5.90.jpg",
      },
      {
        code: "P5",
        name: "Daily Special Cream Puff",
        price: "$5.90",
        description: "Large fresh-baked cream puff, today's special selection",
        image: "/menu/Daily-Special-Cream-Puff5.90.jpg",
      },
    ],
  },
  {
    category: "Mille Crepe Cakes Series",
    emoji: "🍰",
    items: [
      {
        code: "C7",
        name: "Pistachio Crepe (ピスタチオ)",
        price: "$13.60",
        description: "Made with real pistachio! No syrup or artificial color",
        image: "/menu/Pistachio-Crepe--------13.60.jpg",
      },
      {
        code: "C1",
        name: "Ultra Green Matcha",
        price: "$13.60",
        description: "Signature matcha crepe made with ceremonial Uji matcha",
        image: "/menu/Ultra-Green-Matcha13.60.jpg",
      },
      {
        code: "C5",
        name: "Supreme Dark Chocolate",
        price: "$13.60",
        description: "Made with Belgian dark chocolate only!",
        image: "/menu/Supreme-Dark-Chocolate13.60.jpg",
      },
    ],
  },
  {
    category: "Premium Matcha Series",
    emoji: "🍵",
    items: [
      {
        code: "M7",
        name: "Matcha Boba Crème Brûlée",
        price: "$8.10",
        description: "Available 12:40 PM everyday — boba lover must-try",
        image: "/menu/Matcha-Boba-Cr-me-Br-l-e8.10.jpg",
      },
      {
        code: "M5",
        name: "Mango with Coconut Matcha",
        price: "$8.10",
        description: "Our best seller — tropical coconut meets matcha",
        image: "/menu/Mango-with-Coconut-Matcha8.10.jpg",
      },
      {
        code: "M1",
        name: "Matcha Espresso Fusion",
        price: "$8.10",
        description: "Made with home-made coconut milk. For caffeine lovers only",
        image: "/menu/Matcha-Espresso-Fusion8.10.jpg",
      },
    ],
  },
  {
    category: "Iced Drip Tea & Matcha Cloud",
    emoji: "🫧",
    items: [
      {
        code: "E1",
        name: "Lava Roasted Oolong",
        price: "$7.50",
        description: "Iced drip tea with matcha cloud. Sugar free — stevia only",
        image: "/menu/Lava-Roasted-Oolong7.50.jpg",
      },
      {
        code: "G1",
        name: "Lychee Rose Oolong (100% Fruit)",
        price: "$8.20",
        description: "Real lychee and rose petals — no artificial flavoring",
        image: "/menu/Lychee-Rose-Oolong--100--Fruit-8.20.jpg",
      },
    ],
  },
  {
    category: "Ultra Green Matcha Series",
    emoji: "🍃",
    items: [
      {
        name: "Matcha Bomb Latte",
        price: "$7.50",
        description: "Signature air-shipped matcha from Uji, Japan — taste the difference",
        image: "/menu/Matcha-Bomb-Latte7.50.jpg",
      },
      {
        name: "Banana Milk Matcha Latte",
        price: "$7.92",
        description: "Made from signature Korean banana milk (contains dairy)",
        image: "/menu/Banana-Milk-Matcha-Latte7.92.jpg",
      },
      {
        name: "Iced Drip Jasmine with Matcha Latte",
        price: "$7.86",
        description: "Super refreshing — strong jasmine tea aftertaste",
        image: "/menu/Iced-Drip-Jasmine-with-Matcha-Latte--Cold-7.86.jpg",
      },
      {
        name: "Coconut Milk Matcha Latte",
        price: "$7.74",
        description: "Home-made coconut milk with strong coconut flavor (has dairy)",
      },
    ],
  },
  {
    category: "Freshly Ground Coffee & Others",
    emoji: "☕",
    items: [
      {
        code: "K1",
        name: "Signature Dirty Latte",
        price: "$7.50",
        description: "Double espresso with home-made coconut milk — A++",
      },
      {
        code: "K3",
        name: "Osmanthus Latte",
        price: "$7.80",
        description: "Osmanthus herbs topped with double shots of espresso — must try for coffee lovers",
      },
      {
        code: "K7",
        name: "Pistachio Latte (No Caffeine)",
        price: "$7.74",
        description: "Made with real pistachio! No syrup or artificial flavor",
      },
      {
        code: "F3",
        name: "Avocado Matcha Smoothie",
        price: "$8.82",
        description: "Probably the healthiest drink on the menu — matcha & avocado fans, don't miss this!",
        image: "/menu/Avocado-Matcha-Smoothie8.82.jpg",
      },
      {
        code: "F7",
        name: "Matcha Cloud Americano",
        price: "$7.86",
        description: "Matcha cloud americano with a choice of oat or organic milk",
        image: "/menu/Matcha-Cloud-Americano7.86.jpg",
      },
    ],
  },
];

const categories = menuData.map((c) => c.category);

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredMenu =
    activeCategory === "all"
      ? menuData
      : menuData.filter((c) => c.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-background pt-28 pb-32">
      {/* Header */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-5xl md:text-7xl uppercase tracking-tighter text-brand-green leading-none">
              Menu
            </h1>
            <p className="text-sm uppercase tracking-[0.15em] opacity-60 mt-2">
              Ceremonial grade matcha · Fresh daily · Philadelphia
            </p>
          </div>
          <Link
            href="https://www.doordash.com/store/matcha-panda-cafe-philadelphia-24713608/19902192/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-background px-8 py-3 uppercase tracking-[0.15em] text-xs font-bold hover:bg-foreground transition-colors duration-300"
          >
            <span>Order on DoorDash</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex gap-2 mb-12 border-b border-foreground/10 pb-4 overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 whitespace-nowrap min-h-[44px] ${
              activeCategory === "all"
                ? "bg-brand-green text-background"
                : "bg-foreground/5 text-foreground hover:bg-foreground/10"
            }`}
          >
            All Items
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 whitespace-nowrap min-h-[44px] ${
                activeCategory === cat
                  ? "bg-brand-green text-background"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Menu Sections */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto space-y-20">
        <AnimatePresence mode="wait">
          {filteredMenu.map((section, sectionIdx) => (
            <motion.section
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{section.emoji}</span>
                <h2 className="text-2xl md:text-3xl uppercase tracking-wider text-foreground">
                  {section.category}
                </h2>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    className="group flex flex-col bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors duration-300 overflow-hidden"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: sectionIdx * 0.1 + itemIdx * 0.05,
                    }}
                  >
                    {/* Image */}
                    {item.image ? (
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1">
                          <span className="text-sm font-bold text-brand-green">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] bg-brand-green/10 flex items-center justify-center">
                        <span className="text-5xl opacity-30">{section.emoji}</span>
                        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1">
                          <span className="text-sm font-bold text-brand-green">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Details */}
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base uppercase tracking-wider font-medium group-hover:text-brand-green transition-colors leading-tight">
                          {item.code && (
                            <span className="text-brand-green/60 text-xs mr-1.5">
                              {item.code}
                            </span>
                          )}
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs leading-relaxed opacity-60 flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-12 border-t border-foreground/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-lg uppercase tracking-wider text-foreground mb-1">
              Ready to order?
            </p>
            <p className="text-sm opacity-60">
              Available for pickup & delivery via DoorDash
            </p>
          </div>
          <Link
            href="https://www.doordash.com/store/matcha-panda-cafe-philadelphia-24713608/19902192/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-background px-10 py-4 uppercase tracking-[0.15em] text-sm font-bold hover:bg-foreground transition-colors duration-300"
          >
            <span>Order Now on DoorDash</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
