import { motion } from "framer-motion";
import { BedDouble } from "lucide-react";

interface PriceCardProps {
  title: string;
  price: number;
  delay?: number;
}

export function PriceCard({ title, price, delay = 0 }: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-center mb-4">
        <BedDouble className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-3xl font-bold text-center text-primary">
        {price.toLocaleString()} Kč
        <span className="text-sm font-normal text-gray-600 block">za noc</span>
      </p>
    </motion.div>
  );
}