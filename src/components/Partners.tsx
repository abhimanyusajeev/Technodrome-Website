"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Federal Bank", logo: "/federal.png" },
  { name: "South Indian Bank", logo: "/southindian.png" },
  { name: "ESAFF Bank", logo: "/esaf.png" },
  // Add more logos here
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Our <span className="text-[#5AD6FF]">Partners</span>
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-[#5AD6FF] mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-4">
          Trusted by leading banks and financial institutions
        </p>
      </motion.div>

      {/* Partner Logos */}
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className="flex items-center justify-center bg-white rounded-xl shadow-md p-4 w-[150px] h-[100px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
