"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

  // ✅ Track scroll progress
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Hero background movement
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "100% 100%"]
  );

  // Headline zoom effect
  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

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
      className="
        relative
        h-screen
        px-16 sm:px-6 md:px-10 lg:px-16 xl:px-24
        flex flex-col 
        justify-between
        overflow-hidden
      "
    >
      {/* ✅ Scroll-responsive gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #f8f8f8, #e6f7ff, #fff7e6)",
          backgroundSize: "200% 200%",
          backgroundPosition,
        }}
      />

      <div className="w-full max-w-6xl flex flex-col justify-center h-full mx-auto">
        {/* Headline with scroll-based zoom */}
        <motion.h1
          style={{ scale: headlineScale }}
          className={`${raleway.className} 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            flex flex-col leading-snug 
            text-center lg:text-left
            px-2 sm:px-0
          `}
        >
          {headline.map((line, i) => (
            <div
              key={i}
              className="flex flex-wrap justify-center lg:justify-start"
            >
              {line.split(" ").map((word, wIndex) => (
                <span key={wIndex} className="mr-2 sm:mr-3">
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
        </motion.h1>
      </div>

      {/* Fixed Scroll-down Icon (fade only) */}
      <motion.a
        href="#who"
        className="mb-10 self-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <ExpandCircleDownIcon
          style={{ fontSize: "3.5rem", color: "#5AD6FF" }}
        />
      </motion.a>
    </section>
  );
}
