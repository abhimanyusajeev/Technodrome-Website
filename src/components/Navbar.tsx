"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // Change navbar style when scrolled
      setIsScrolled(currentScrollY > 10);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-slate-950 text-white"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <motion.div
            key={scrollDirection}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={
                scrollDirection === "up"
                  ? "/technodromelogo.png"
                  : "/technodromelogo3.png"
              }
              alt="Technodrome Logo"
              height={40}
              width={160}
              priority
              className="transition-all duration-300"
            />
          </motion.div>

          {/* Navbar Links */}
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex space-x-10"
          >
            <li>
              <a href="#home" className="hover:font-semibold transition-all">
                Home
              </a>
            </li>
            {/* <li>
              <a href="#who" className="hover:font-semibold transition-all">
                Who
              </a>
            </li> */}
            <li>
              <a href="#services" className="hover:font-semibold transition-all">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="hover:font-semibold transition-all">
                Portfolio
              </a>
            </li> */}
            <li>
              <a href="#about" className="hover:font-semibold transition-all">
                About
              </a>
            </li>
          <li>
  <a
    href="#contact"
    className="bg-[#5AD6FF] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#3ABBE3] hover:shadow-lg transition-all duration-300"
  >
    Get in touch
  </a>
</li>

          </motion.ul>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
