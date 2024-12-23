"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Home, Image, Landmark, Receipt, Phone, Building } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center text-2xl font-bold text-primary">
            <Building className="w-8 h-8 text-amber-800 mr-2" />
            Penzion Pod Zámkem
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Home className="w-5 h-5" />
              <span>Domů</span>
            </Link>
            <Link href="/galerie" className="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Image className="w-5 h-5" />
              <span>Galerie</span>
            </Link>
            <Link href="/zajimavosti" className="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Landmark className="w-5 h-5" />
              <span>Zajímavosti</span>
            </Link>
            <Link href="/cenik" className="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Receipt className="w-5 h-5" />
              <span>Ceník</span>
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Phone className="w-5 h-5" />
              <span>Kontakt</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 text-lg">
            <Link href="/" className="block text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Home className="w-5 h-5" />
              <span>Domů</span>
            </Link>
            <Link href="/galerie" className="block text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Image className="w-5 h-5" />
              <span>Galerie</span>
            </Link>
            <Link href="/zajimavosti" className="block text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Landmark className="w-5 h-5" />
              <span>Zajímavosti</span>
            </Link>
            <Link href="/cenik" className="block text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Receipt className="w-5 h-5" />
              <span>Ceník</span>
            </Link>
            <Link href="/kontakt" className="block text-gray-700 hover:text-primary flex items-center gap-2 transition-colors duration-300">
              <Phone className="w-5 h-5" />
              <span>Kontakt</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;