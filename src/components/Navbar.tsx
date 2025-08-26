"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait">
      {isAtTop ? (
        <TopNavbar key="top-navbar" />
      ) : (
        <ScrollNavbar key="scroll-navbar" />
      )}
    </AnimatePresence>
  );
}

/** NAV when page is at the very top (permanent) */
function TopNavbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 w-full z-50 bg-slate-950 text-white"
    >
      <NavContent logo="/technodromelogoorg.png" variant="dark" />
    </motion.nav>
  );
}

/** NAV when user has scrolled down */
function ScrollNavbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 w-full z-50 bg-white text-black shadow-md"
    >
      <NavContent logo="/technodromelogo3.png" variant="light" />
    </motion.nav>
  );
}

/** Shared Navbar Layout */
function NavContent({ logo, variant }: { logo: string; variant: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <Image
        src={logo}
        alt="Technodrome Logo"
        width={160}
        height={40}
        priority
        className="transition-all duration-300"
      />

      {/* Desktop Menu */}
      <NavLinks variant={variant} className="hidden md:flex space-x-10" />

      {/* Mobile Hamburger */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-16 left-0 w-full p-6 flex flex-col space-y-6 shadow-lg md:hidden ${
              variant === "light" ? "bg-white text-black" : "bg-slate-950 text-white"
            }`}
          >
            <NavLinks variant={variant} className="flex flex-col space-y-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Links Component (shared for desktop + mobile) */
function NavLinks({ variant, className }: { variant: "light" | "dark"; className?: string }) {
  return (
    <ul className={className}>
      <li>
        <a href="#home" className="hover:font-semibold transition-all">
          Home
        </a>
      </li>
      <li>
        <a href="#services" className="hover:font-semibold transition-all">
          Services
        </a>
      </li>
      <li>
        <a href="#about" className="hover:font-semibold transition-all">
          About
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ${
            variant === "light"
              ? "bg-[#5AD6FF] text-white hover:bg-[#3ABBE3]"
              : "bg-[#5AD6FF] text-white hover:bg-[#3ABBE3]"
          }`}
        >
          Get in touch
        </a>
      </li>
    </ul>
  );
}
