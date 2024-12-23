"use client";

import { motion } from "framer-motion";
import { Map } from "@/components/ui/map";
import { ContactInfo } from "@/components/ui/contact-info";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Kontaktujte nás
        </motion.h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}