"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Raleway } from "next/font/google";

// ✅ Load Raleway SemiBold 600
const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});

export default function HomeNextPage() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

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
    "Where visionary thinking and technical excellence converge",
    "to architect seamless, enterprise-grade solutions that drive transformation",
    "and empower sustainable growth.",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6 sm:px-10 lg:px-16">
      <div className="w-full max-w-6xl flex flex-col items-start justify-center space-y-12 sm:space-y-16">
        
        {/* Headline with per-letter color change */}
        <h1 className={`${raleway.className} tracking-tight leading-snug text-left`}>
          {headline.map((line, i) => (
            <div
              key={i}
              className="block text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-5xl mt-6"
            >
              {line.split("").map((char, j) => (
                <motion.span
                  key={j}
                  className="inline-block"
                  initial={{ color: "#908E8E" }} // grey default
                  animate={{
                    color: scrollDir === "up" ? "#f2f2f2" : "#908E8E",
                  }}
                  transition={{
                    duration: 0.8,
                    delay: j * 0.05, // stagger per letter
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          ))}
        </h1>

      </div>
    </section>
  );
}
