import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Home, Image, Landmark, Receipt, Phone, Building } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Penzion Pod Zámkem Průhonice',
  description: 'Ubytování v malebných Průhonicích kousek od Prahy. Nabízíme ubytování v klidném prostředí s výhledem na zámek a zámecký park.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="font-sans antialiased">
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center text-2xl font-bold text-primary">
                <Building className="w-8 h-8 text-blue-500 mr-2" />
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
                <button className="text-gray-700 hover:text-primary focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                <p>Hlavní 37</p>
                <p>Průhonice</p>
                <p>tel.: 608 850 040</p>
                <p>e-mail: janovskyroman@seznam.cz</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigace</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-primary flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      <span>Domů</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/galerie" className="hover:text-primary flex items-center gap-2">
                      <Image className="w-4 h-4" />
                      <span>Galerie</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/zajimavosti" className="hover:text-primary flex items-center gap-2">
                      <Landmark className="w-4 h-4" />
                      <span>Zajímavosti</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cenik" className="hover:text-primary flex items-center gap-2">
                      <Receipt className="w-4 h-4" />
                      <span>Ceník</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="hover:text-primary flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>Kontakt</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Služby</h3>
                <ul className="space-y-2">
                  <li>Wifi zdarma</li>
                  <li>Parkování zdarma</li>
                  <li>Kávovar</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} Penzion Pod Zámkem. Všechna práva vyhrazena.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}