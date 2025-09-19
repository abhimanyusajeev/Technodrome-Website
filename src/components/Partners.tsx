"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

// ✅ Load Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const partners = [
  { name: "Federal Bank", logo: "/federal.png" },
  { name: "South Indian Bank", logo: "/southindian.png" },
  { name: "ESAFF Bank", logo: "/esaf.png" },
  // Add more logos here
];

export default function Partners() {
  return (
    <section
      id="partners"
      className={`py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 ${raleway.className}`}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Our Trusted{" "}
          <span className="text-[#5AD6FF]">Clients & Partners</span>
        </h2>

        {/* Divider with animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#5AD6FF] mx-auto rounded-full mb-6"
        ></motion.div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by leading banks and financial institutions who rely on us
          for innovation, reliability, and technology excellence.
        </p>
      </motion.div>

      {/* Partner Logos */}
      <motion.div
        className="flex justify-center items-center gap-10 flex-wrap max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        viewport={{ once: true }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className="flex items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 w-[160px] h-[110px] transition"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.08, rotate: 1 }}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={130}
              height={70}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
