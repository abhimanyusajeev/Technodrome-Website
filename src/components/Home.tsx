"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl text-center space-y-6 sm:space-y-8">
        {/* Logo with fade + scale animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Image
            src="/technodromelogo.png"
            alt="Technodrome Logo"
            width={120}
            height={120}
            className="mx-auto w-24 sm:w-32 md:w-36 lg:w-40 h-auto"
            priority
          /> */}
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Innovate. Integrate.{" "}
          <span className="text-[#5AD6FF]">Compute.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          We provide technical IT services for cloud-based integrations and
          computing. Let us help your business innovate and scale efficiently.
        </motion.p>

        {/* Button with hover animation */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}
