import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Matcha, Crepe Cakes & Cream Puffs",
  description:
    "Browse the full Matcha Panda Cafe menu: ceremonial-grade matcha lattes, Mille Crepe Cakes, fresh-baked cream puffs, iced drip teas, bubble tea, and specialty coffees. Order on DoorDash for pickup or delivery.",
  openGraph: {
    title: "Menu | Matcha Panda Cafe",
    description:
      "Ceremonial-grade matcha lattes, Mille Crepe Cakes, cream puffs & more. Order now on DoorDash.",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
