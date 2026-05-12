import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store — Merch Coming Soon",
  description:
    "The Matcha Panda Cafe online store is coming soon. Merch, matcha kits, and pantry essentials — follow us on Instagram for launch updates.",
  openGraph: {
    title: "Store | Matcha Panda Cafe",
    description:
      "Merch, matcha kits & pantry essentials — coming soon. Follow @jp_matcha_panda for updates.",
  },
};

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
