"use client";

import { motion } from "framer-motion";
import { PriceCard } from "@/components/ui/price-card";
import { ContactSection } from "@/components/ui/contact-section";
import { ImageSection } from "@/components/ui/image-section";

const prices = [
  { title: "Jednolůžkový pokoj", price: 1000 },
  { title: "Dvoulůžkový pokoj", price: 1300 },
  { title: "Třílůžkový pokoj", price: 1600 },
  { title: "Čtyřlůžkový pokoj", price: 2000 },
  { title: "Pětilůžkový pokoj", price: 2400 },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Ceník
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 mb-12"
      >
        Nabízíme komfortní ubytování za příznivé ceny
      </motion.p>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {prices.map((price, index) => (
          <PriceCard
            key={price.title}
            title={price.title}
            price={price.price}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-600 italic"
      >
        *Ceny jsou uvedeny VČETNĚ 12% SAZBY DPH
      </motion.p>

      <ImageSection />

      <ContactSection />

      
    </div>
  );
}