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
      <Navbar />

<section
  ref={heroRef}
  className={`relative min-h-screen flex flex-col items-center justify-center bg-live-blur text-white px-4 sm:px-6 lg:px-8 ${raleway.className}`}
>
  <div className="relative z-10 w-full max-w-5xl text-center space-y-6 sm:space-y-10 pt-28">
    {/* Heading */}
    <motion.h1
      className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight px-2"
      style={{ fontWeight: 900 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
    >
      Innovate. Integrate.{" "}
      <span className="text-[#5AD6FF]">Compute.</span>
    </motion.h1>
  </div>
</section>

    </>
  );
}
