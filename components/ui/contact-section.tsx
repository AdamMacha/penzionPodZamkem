import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gray-50 rounded-lg p-8 mt-12"
    >
      <h2 className="text-2xl font-bold text-center mb-8">Rezervujte si pobyt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <Mail className="w-6 h-6 text-primary" />
          <div>
            <p className="font-medium">E-mail</p>
            <a href="mailto:janovskyroman@seznam.cz" className="text-primary hover:underline">
              janovskyroman@seznam.cz
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-6 h-6 text-primary" />
          <div>
            <p className="font-medium">Telefon</p>
            <a href="tel:608850040" className="text-primary hover:underline">
              608 850 040
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}