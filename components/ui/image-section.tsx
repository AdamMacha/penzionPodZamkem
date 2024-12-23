import { motion } from "framer-motion";
import Image from "next/image";

export function ImageSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[4/3] overflow-hidden rounded-lg"
      >
        <Image
          src="penzion1.jpg"
          alt="Pokoj v penzionu"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          height={800}
          width={1067}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-[4/3] overflow-hidden rounded-lg"
      >
        <Image
          src="penzion9.jpg"
          alt="Koupelna v penzionu"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          height={800}
          width={1067}
        />
      </motion.div>
    </div>
  );
}