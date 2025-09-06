"use client";

import { motion } from "framer-motion";

const industries = [
  "Banking & Financial Services",
  "Professional Services",
  "Healthcare",
  "Insurance",
  "Manufacturing",
  "Retail & Consumer Packaged Goods",
  "Shipping & Logistics",
  "Travel & Leisure",
  "Utilities & Energy",
];

export default function IndustriesWeServe() {
  return (
    <section className="min-h-screen bg-white px-6 sm:px-10 lg:px-16 py-16 flex flex-col items-center">
      {/* Heading */}
 <motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center"
>
  Industries <span className="text-[#5AD6FF]">We Serve</span>
</motion.h2>

{/* Divider */}
<div className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto w-[120px]"></div>

      

      {/* Wrapper with top dashed line */}
      <div className="relative w-full max-w-7xl">
        {/* Top dashed line */}
        <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-gray-300"></div>

        {/* Grid with vertical dashed lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative pt-8">
          {industries.slice(0, 5).map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center flex flex-col justify-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
            </motion.div>
          ))}

          {/* Vertical dashed connectors */}
          <div className="absolute top-0 left-1/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
          <div className="absolute top-0 left-2/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
          <div className="absolute top-0 left-3/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
          <div className="absolute top-0 left-4/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
        </div>
      </div>

      {/* Second row (next 5 industries) */}
      <div className="mt-16 w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {industries.slice(5).map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center flex flex-col justify-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
