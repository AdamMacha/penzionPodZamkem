"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    content: (
      <>
        <p className="font-medium">Hlavní 37</p>
        <p>252 43 Průhonice</p>
      </>
    ),
  },
  {
    icon: Phone,
    content: (
      <a href="tel:+420608028801" className="hover:text-primary transition-colors">
        +420 608 028 801
      </a>
    ),
  },
  {
    icon: Mail,
    content: (
      <a href="mailto:JANOVSKYROMAN@SEZNAM.CZ" className="hover:text-primary transition-colors">
        janovskyroman@seznam.cz
      </a>
    ),
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/90"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
      >
        PENZION POD ZÁMKEM
      </motion.h2>
      
      <div className="space-y-10">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-start gap-4 group"
          >
            <div className="p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="pt-2">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}