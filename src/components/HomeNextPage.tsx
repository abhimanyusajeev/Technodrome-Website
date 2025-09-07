"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Raleway } from "next/font/google";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useInView } from "framer-motion";

// ✅ Load Raleway SemiBold 600
const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});

export default function HomeNextPage() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  // ✅ Track hero visibility
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.4 });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY) {
        setScrollDir("down");
      } else if (scrollY < lastScrollY) {
        setScrollDir("up");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const headline = [
    "Empowering enterprises with future-ready innovation",
    "seamless integration, and intelligent computing solutions—delivering reliable technology",
    "expertise that drives business performance and creates measurable impact for end-users.",
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-[#f8f8f8] px-6 sm:px-10 lg:px-16" // ✅ offwhite background
    >
      <div className="w-full max-w-6xl flex flex-col items-start justify-center space-y-12 sm:space-y-16">
        {/* Headline with per-letter color change */}
<h1
  className={`${raleway.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-6 flex flex-col leading-snug`}
>
  {headline.map((line, i) => (
    <div key={i} className="flex flex-wrap">
      {line.split(" ").map((word, wIndex) => (
        <span key={wIndex} className="mr-3">
          {word.split("").map((char, cIndex) => (
            <motion.span
              key={cIndex}
              className="inline-block"
              initial={{ color: "#908E8E" }}
              animate={{
                color: scrollDir === "up" ? "#0f172a" : "#908E8E",
              }}
              transition={{
                duration: 0.8,
                delay: (wIndex * 6 + cIndex) * 0.05,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  ))}
</h1>





        {/* Fixed Animated Icon (only visible in hero) */}
        <motion.a
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
        </motion.a>
      </div>
    </section>
  );
}
