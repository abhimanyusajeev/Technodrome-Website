"use client";

import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useRef } from "react";
import { useInView } from "framer-motion";

// ✅ Import Navbar
import Navbar from "./Navbar";

// Import Raleway with desired weights
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function Home() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.4 }); // detect when 40% is visible

  return (
    <>
      {/* 🔥 Navbar always on top */}
     

<section
  ref={heroRef}
  className={`relative min-h-screen flex flex-col items-center justify-center 
  bg-gradient-to-br from-slate-950 via-[#0B1A2A] to-[#021018] 
  text-white px-4 sm:px-6 lg:px-8 overflow-hidden ${raleway.className}`}
>
  <div className="relative z-10 w-full max-w-5xl text-center space-y-8 sm:space-y-12 pt-28">
    <motion.h1
      className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight px-2
      bg-clip-text text-transparent bg-gradient-to-r from-white via-[#5AD6FF] to-white"
      style={{ fontWeight: 900 }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    >
      Innovate. Integrate.{" "} Compute.
      {/* <motion.span
        className="text-[#5AD6FF] drop-shadow-lg"
        animate={{ 
          // textShadow: [
          //   "0px 0px 6px #5AD6FF",
          //   "0px 0px 12px #5AD6FF",
          //   "0px 0px 6px #5AD6FF"
          // ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Compute.
      </motion.span> */}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 px-2"
    >
      At{" "}
      <span className="font-semibold text-white">
        Technodrome Solutions Private Limited
      </span>
      , we take a customer-centric approach to providing IT services. We
      work closely with our clients to understand their needs and tailor
      our services to meet their specific requirements.
    </motion.p>
  </div>
</section>

{/* Floating glowing scroll icon */}
<motion.a
  href="#who"
  className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
  initial={{ opacity: 0 }}
  animate={{ opacity: isInView ? 1 : 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
>
  <motion.div
    animate={{
      opacity: [1, 0.6, 1],
      y: [0, -10, 0],
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 10px rgba(90,214,255,0.4)",
        "0px 0px 20px rgba(90,214,255,0.8)",
        "0px 0px 10px rgba(90,214,255,0.4)"
      ]
    }}
    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    className="rounded-full p-2"
  >
    <ExpandCircleDownIcon style={{ fontSize: "3.1rem", color: "#5AD6FF" }} />
  </motion.div>
</motion.a>

        {/* Fixed Animated Icon (only visible in hero) */}
        {/* <motion.a
          href="#who"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            animate={{
              opacity: [1, 0.4, 1], // blinking
              y: [0, -8, 0], // bounce
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ExpandCircleDownIcon
              style={{ fontSize: "3.5rem", color: "#5AD6FF" }}
            />
          </motion.div>
        </motion.a> */}

    </>
  );
}
