"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useState, useRef } from "react";
import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";

export default function Home() {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const locations = [
    {
      id: 1,
      name: "Chinatown",
      address: "202 N 9th St, Philadelphia, PA 19107",
      hours: "Mon-Thu/Sun: 12PM-10PM · Fri: 12PM-10:30PM · Sat: 12PM-11PM",
      video: "/chinatown.mp4",
      poster: "/chinatown-poster.jpg",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5!2d-75.155!3d39.957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c884f5e0c0e1%3A0xmatcha1!2sMatcha+Panda+Cafe!5e0!3m2!1sen!2sus!4v1",
      directions: "https://www.google.com/maps/dir/?api=1&destination=202+N+9th+St+Philadelphia+PA+19107",
    },
    {
      id: 2,
      name: "Rittenhouse",
      address: "2033 Chestnut St, Philadelphia, PA 19103",
      hours: "Mon-Thu: 11AM-9PM · Fri: 11AM-9:30PM · Sat: 10AM-9PM",
      video: "/rittenhouse.mp4",
      poster: "/rittenhouse-poster.jpg",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.8!2d-75.178!3d39.952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c64d17ca1c5f%3A0xmatcha2!2sMatcha+Panda+Cafe+Rittenhouse!5e0!3m2!1sen!2sus!4v1",
      directions: "https://www.google.com/maps/dir/?api=1&destination=2033+Chestnut+St+Philadelphia+PA+19103",
    },
  ];

  const signatureItems = [
    {
      name: "Strawberry Matcha",
      emoji: "🍓",
      image: "/ig-cream-puffs.jpg",
      description: "Our fan-favorite fruity matcha blend",
    },
    {
      name: "Pistachio Crepe Cake",
      emoji: "🍰",
      image: "/ig-pistachio-crepe.webp",
      description: "25 layers of homemade pistachio cream — one of a kind",
    },
    {
      name: "Ube Cream Puff",
      emoji: "💜",
      image: "/ig-ube-cream-puff.jpg",
      video: "/ig-cream-puff-video.mp4",
      description: "Crispy shell, light & refreshing filling",
    },
  ];

  const testimonials = [
    {
      quote: "One of my go-to places for matcha drinks and desserts. I absolutely LOVE their cream puffs — so light and refreshing with a crispy shell. And they're big too!",
      author: "@jen_pachew",
    },
    {
      quote: "They have some of the best matcha in the city, plus their own ceremonial-grade matcha machine in-house, which rotates the powder throughout the day preserving its quality and color.",
      author: "@feefeeandj",
    },
    {
      quote: "Best afternoon snack…ever 💚💜 One of my many favorite spots in Chinatown!",
      author: "@missflyinghungry",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.img 
            src="/logo.png"
            alt="Matcha Panda Cafe"
            className="relative z-10 w-[60vw] md:w-[40vw] max-w-2xl drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="mt-8"
          >
            <Link 
              href="/menu"
              className="border-2 border-background text-background px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-background hover:text-foreground transition-colors duration-300"
            >
              Order Now
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-background/60" />
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section className="relative w-full py-20 md:py-32 px-4 md:px-8 overflow-hidden flex justify-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/panda-chase.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80 z-0" />

        <div className="relative z-10 max-w-4xl text-center">
          <TextReveal
            as="p"
            className="text-lg md:text-5xl uppercase tracking-wider leading-snug font-medium text-brand-green"
          >
            Matcha Panda specialize in (but are not limited to) Matcha drinks, Mille crepe Cakes, Cream Puffs, Iced drip teas, Bubble tea, Matcha Ice cream and Freshly ground specialty coffees in Philadelphia.
          </TextReveal>
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link 
              href="/menu" 
              className="group inline-flex items-center gap-2 uppercase tracking-widest text-sm font-bold border-b border-foreground pb-1 hover:text-brand-green hover:border-brand-green transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Social Proof — Customer Testimonials */}
      <section className="w-full py-24 px-4 md:px-8 bg-foreground text-background">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-xs uppercase tracking-[0.3em] mb-16 opacity-60">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              >
                <div className="text-brand-green text-4xl mb-4">&ldquo;</div>
                <p className="text-sm md:text-base leading-relaxed opacity-90 flex-grow">
                  {t.quote}
                </p>
                <p className="mt-6 text-xs uppercase tracking-widest text-brand-green font-bold">
                  {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Signature Items — Conversion CTA Grid */}
      <section className="w-full bg-background">
        <motion.div
          className="max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal
            as="h2"
            className="text-center text-3xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground"
          >
            Must-Try Favorites
          </TextReveal>
          <motion.p 
            className="text-center text-sm uppercase tracking-[0.2em] opacity-60 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Recommended by our community
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {item.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-3xl mb-2 block">{item.emoji}</span>
                    <h3 className="text-xl uppercase tracking-wider text-white font-bold mb-1">
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-brand-green text-background px-12 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-foreground transition-colors duration-300"
            >
              View Full Menu & Order
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 5. Restaurants Section */}
      <section id="restaurant" className="w-full bg-background border-t border-brand-green/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {locations.map((loc, idx) => (
            <motion.div 
              key={loc.id}
              className="relative h-[50vh] md:h-[80vh] overflow-hidden group cursor-pointer border-b md:border-b-0 md:border-r border-brand-green/10 last:border-r-0"
              onMouseEnter={() => setHoveredLocation(loc.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
            >
              {/* Background Video */}
              <motion.div 
                className="absolute inset-0 w-full h-full z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: hoveredLocation === loc.id ? 1.05 : 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={loc.poster}
                  // @ts-expect-error webkit vendor attribute for iOS
                  webkit-playsinline="true"
                  className="w-full h-full object-cover"
                >
                  <source src={loc.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/10" />
              </motion.div>

              {/* Content Overlay */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-background">
                <h2 className="text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-center">
                  {loc.name}
                </h2>
                
                <motion.div 
                  className="flex flex-col items-center text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 w-full max-w-sm"
                  initial={{ y: 20 }}
                  animate={{ y: hoveredLocation === loc.id ? 0 : 20 }}
                >
                  <p className="uppercase tracking-widest text-sm mb-1">{loc.address}</p>
                  <p className="uppercase tracking-widest text-xs mb-5 opacity-70">{loc.hours}</p>

                  {/* Embedded Map — hidden on mobile for space */}
                  <div className="hidden md:block w-full aspect-video mb-5 overflow-hidden border border-background/20">
                    <iframe
                      src={loc.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${loc.name} Map`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link 
                      href="/menu" 
                      className="border border-background px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-background hover:text-foreground transition-colors text-center min-h-[44px] flex items-center justify-center"
                    >
                      View Menu
                    </Link>
                    <a 
                      href={loc.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background text-foreground px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-brand-green hover:text-background transition-colors text-center min-h-[44px] flex items-center justify-center"
                    >
                      Get Directions
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Our Craft */}
      <section id="craft" className="w-full py-20 md:py-32 px-4 md:px-8 bg-brand-green text-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
              Our<br />Craft
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
              Every drink and dessert we serve is the result of rigorous refinement. We use premium ceremonial grade matcha imported directly from Japan to craft our lattes and treats, ensuring an authentic and robust flavor profile in every sip.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
              We have our own ceremonial-grade matcha machine in-house, which rotates the matcha powder throughout the day, preserving its quality and color. Each day, we package it up for purchase.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-10">
              Our signature Mille Crepe Cakes are delicately layered by hand each morning. We blend traditional techniques with exceptional quality ingredients to create an experience that is uniquely Matcha Panda.
            </p>
            <Link
              href="/menu"
              className="inline-block border-2 border-background px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-background hover:text-brand-green transition-colors duration-300"
            >
              Explore Our Menu
            </Link>
          </motion.div>
          <motion.div 
            className="relative w-full aspect-square md:aspect-auto md:h-[600px] overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ParallaxImage
              src="/our-craft.jpg"
              alt="Matcha Panda Cafe Desserts"
              className="w-full h-full"
              speed={0.15}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
