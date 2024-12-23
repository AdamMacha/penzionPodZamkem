"use client";

import { motion } from "framer-motion";

export function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-10 pointer-events-none" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.749544263014!2d14.556545776908684!3d50.00340017151633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8eb6a7c7be47%3A0x7d76b8c8c3f39c76!2sHlavn%C3%AD%2037%2C%20252%2043%20Pr%C5%AFhonice!5e0!3m2!1scs!2scz!4v1710425163099!5m2!1scs!2scz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-allowed"
        className="grayscale hover:grayscale-0 transition-all duration-300"
      />
    </motion.div>
  );
}