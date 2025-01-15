"use client";

import { motion } from "framer-motion";
import { MapPin, Wifi, Coffee, Car, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image

            src="penzion1.jpg"
            alt="Penzion Pod Zámkem"
            className="object-cover w-full h-full object-bottom"
            fill={true}
            objectFit="fill"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            Penzion Pod Zámkem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-3xl"
          >
            Vítáme Vás v Penzionu Pod Zámkem v Průhonicích
          </motion.p>
          <motion.div 
            className="absolute bottom-10 flex flex-col items-center"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8" />
            <span className="mt-2">Potáhněte dolů</span>
          </motion.div>
        </div>
      </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">O nás</h2>
            <p className="text-lg leading-relaxed mb-6">
              Pobyt v našem penzionu využijí Ti, kteří si chtějí užít klidnou dovolenou v bezprostřední blízkosti známého průhonického parku, který je na seznamu UNESCA nebo chtějí navštívit AQUAPALACE ČESTLICE, patřící mezi největší aquaparky v Evropě. Nachází se cca 1 km od penzionu.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Poloha penzionu je vhodná pro hosty, kteří chtějí poznat krásy hlavního města, nebo strávit v Praze několik pracovních dnů. Penzion se nachází na okraji Prahy a v centru města jste do pár minut.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <Car className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Parkování zdarma</h3>
              <p>Parkování přímo u penzionu zdarma pro ubytované hosty</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <Wifi className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Wifi</h3>
              <p>Bezplatné wifi připojení v celém penzionu</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg"
            >
              <Coffee className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kávovar</h3>
              <p>Pro naše hosty je k dispozici kávovar</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kontakt</h2>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">Adresa</h3>
                <p className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  Hlavní 37, Průhonice
                </p>
                <p className="mb-4">tel.: 608 850 040</p>
                <p>e-mail: janovskyroman@seznam.cz</p>
              </div>
              <div className="flex-1">
                <Link 
                  href="/cenik"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-transform hover:scale-105"
                >
                  Rezervovat pobyt
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}