"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl text-center space-y-6 sm:space-y-8">
        {/* Heading */}
     <motion.h1
  className="text-4xl sm:text-5xl md:text-7xl font-raleway font-black leading-tight px-2"
  style={{ fontWeight: 900 }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
>
  Innovate. Integrate.{" "}
  <span className="text-[#5AD6FF]">Compute.</span>
</motion.h1>


        {/* Description */}
  


        {/* Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        >
          <motion.a
            href="#services"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(90,214,255,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#5AD6FF] text-[#0A0A23] px-6 sm:px-8 py-3 sm:py-4 mt-4 rounded-lg font-semibold shadow-lg hover:bg-white transition-colors text-sm sm:text-base md:text-lg"
          >
            Explore Services
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
}
