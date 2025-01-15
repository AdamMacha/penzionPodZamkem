"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "penzion2.jpg",
  "penzion3.jpg",
  "penzion4.jpg",
  "penzion5.jpg",
  "penzion6.jpg",
  "penzion7.jpg",
  "penzion8.jpg",
  "penzion9.jpg",
  "penzion10.jpg",
  "penzion11.jpg",
  "penzion12.jpg",
  "penzion13.jpg",
  "penzion14.jpg",
  "penzion15.jpg",
  "penzion16.jpg",
  "penzion17.jpg",
  "penzion18.jpg",
  "penzion19.jpg",
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Galerie
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              layout="fill"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}