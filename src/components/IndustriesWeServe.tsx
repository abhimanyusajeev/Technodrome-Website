"use client";

import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import {
  FaUniversity,
  FaBriefcase,
  FaHospital,
  FaShieldAlt,
  FaShoppingCart,
  FaShip,
  FaPlane,
  FaBolt,
} from "react-icons/fa";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const industries = [
  { name: "Banking & Financial Services", icon: <FaUniversity size={32} className="text-[#5AD6FF]" /> },
  { name: "Professional Services", icon: <FaBriefcase size={32} className="text-[#5AD6FF]" /> },
  { name: "Healthcare", icon: <FaHospital size={32} className="text-[#5AD6FF]" /> },
  { name: "Insurance", icon: <FaShieldAlt size={32} className="text-[#5AD6FF]" /> },
  { name: "Retail & Consumer Packaged Goods", icon: <FaShoppingCart size={32} className="text-[#5AD6FF]" /> },
  { name: "Shipping & Logistics", icon: <FaShip size={32} className="text-[#5AD6FF]" /> },
  { name: "Travel & Leisure", icon: <FaPlane size={32} className="text-[#5AD6FF]" /> },
  { name: "Utilities & Energy", icon: <FaBolt size={32} className="text-[#5AD6FF]" /> },
];

export default function IndustriesWeServe() {
  return (
    <section
      className={`bg-white px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center ${raleway.className}`}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
          Industries <span className="text-[#5AD6FF]">we serve</span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-2 sm:mb-1 mx-auto md:mx-0"
        ></motion.div>
      </motion.div>

      {/* ✅ Gradient Wrapper for both rows */}
      <div className="bg-gradient-to-br from-white via-slate-100 to-slate-80 rounded-3xl p-8 mt-8 w-full max-w-7xl">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {industries.slice(0, 4).map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-transparent p-6 text-center flex flex-col items-center justify-center"
            >
              <div className="mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 relative">
          {industries.slice(4).map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-transparent p-6 text-center flex flex-col items-center justify-center"
            >
              <div className="mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
