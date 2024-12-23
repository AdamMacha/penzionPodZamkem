"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Attractions() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Zajímavosti v obci
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <Image
            src="park.jpg"
            alt="Průhonický park"
            className="w-full h-64 object-cover"
            width={800}
            height={533}
          />
          <div className="p-8">
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span>5 minut chůze od penzionu</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Průhonický park</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Průhonický park, zapsaný na seznamu památek UNESCO, je jedním z nejvýznamnějších přírodně krajinářských parků v Evropě. Park byl založen v roce 1885 hrabětem Arnoštem Emanuelem Silva-Tarouca.
              </p>
              <p className="mb-4">
                Co můžete v parku objevit:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Rozloha 250 hektarů parkové plochy</li>
                <li>Více než 1600 druhů rostlin</li>
                <li>Unikátní sbírku rododendronů a azalek</li>
                <li>Romantické údolí Botiče s jezírky a vodopády</li>
                <li>Historický zámek ze 13. století</li>
                <li>Alpinum s horskými rostlinami</li>
              </ul>
              <p className="mb-4">
                Park je krásný v každém ročním období, ale nejvíce vyniká na jaře, kdy kvetou rododendrony a azalky, a na podzim, kdy se stromy zbarví do pestrobarevných odstínů.
              </p>
              <p className="mb-4">
                Více informací naleznete na: <a href="https://www.pruhonickypark.cz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.pruhonickypark.cz</a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <Image
            src="cestlice.jpg"
            alt="Aquapark Čestlice"
            className="w-full h-64 object-cover"
            width={800}
            height={533}
          />
          <div className="p-8">
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span>2 km od penzionu</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">Aquapark Čestlice</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Ubytování u nás mohou také využít návštěvníci Aquaparku Čestlice, který se nachází necelé 2km (pouhé 3 minuty jízdy autem) od našeho penzionu. Aquapark Čestlice nabízí úžasný vodní svět, sauny a moderní fitness.
              </p>
              <p className="mb-4">
                Čeká zde na Vás:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>6 tobogánů (nejdelší z nich měří 140 metrů)</li>
                <li>3 skluzavky</li>
                <li>Spacebowl</li>
                <li>Potápěčský tubus o hloubce 8 metrů</li>
                <li>Bazén s umělým mořským vlnobitím</li>
                <li>Vířivky a masážní lavice</li>
              </ul>
              <p className="mb-4">
                Palác pokladů s oblíbenou dominantou vraku pirátské lodi Vás nadchne svou pohádkově rodinnou atmosférou. Vaše děti jistě využijí řadu brouzdališť, skluzavek a dalších atrakcí.
              </p>
              <p className="mb-4">
                Více informací naleznete na: <a href="http://www.aquapalace.cz" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aquapalace.cz</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}