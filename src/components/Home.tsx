"use client";

import { motion } from "framer-motion";
export default function Home() {
  return (
    
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      
      <div className="max-w-4xl text-center space-y-8">
        {/* Logo with fade + scale animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Image
            src="/technodromelogo.png"
            alt="Technodrome Logo"
            width={140}
            height={140}
            className="mx-auto"
            priority
          /> */}
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Innovate. Integrate.{" "}
          <span className="text-[#5AD6FF]">Compute.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
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
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(90,214,255,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#5AD6FF] text-[#0A0A23] px-8 py-4 mt-4 rounded-lg font-semibold shadow-lg hover:bg-white transition-colors"
          >
            Explore Services
          </motion.a>
        </motion.div>
       
      </div>
       
    </section>
    
  );
}
