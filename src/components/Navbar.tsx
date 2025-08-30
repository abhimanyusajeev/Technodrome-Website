"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY) {
        // scrolling UP → show navbar
        setShowNavbar(true);
      } else {
        // scrolling DOWN → hide navbar
        setShowNavbar(false);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence initial={false} mode="wait">
      {showNavbar && (
        <motion.nav
          key="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-5 w-full z-50 bg-slate-950 shadow-md"
        >
          <NavContent
            logo="/technodromelogo3.png"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

/** Shared Navbar Layout */
function NavContent({
  logo,
  isOpen,
  setIsOpen,
}: {
  logo: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="w-full flex items-center justify-between px-6 py-2 bg-white rounded-full shadow-md">
        {/* Logo */}
        <Image
          src={logo}
          alt="Technodrome Logo"
          width={140}
          height={40}
          priority
          className="transition-all duration-300"
        />

        {/* Desktop Menu */}
        <NavLinks className="hidden md:flex items-center space-x-10 text-black" />

        
     {/* Mobile Hamburger */}
<button
  className="md:hidden focus:outline-none text-black" // <-- changed to black so it's visible on white bg
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>
      </div>

{/* Mobile Drawer */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-20 left-0 w-full p-6 flex flex-col space-y-6 shadow-lg md:hidden bg-slate-950 text-white z-40"
    >
      <NavLinks className="flex flex-col space-y-6" />
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

/** Links Component */
function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={`${className} font-raleway text-base md:text-md`}>
      <li>
        <a href="#who" className="hover:font-semibold transition-all">
          Who We Are
        </a>
      </li>
      <li>
        <a href="#services" className="hover:font-semibold transition-all">
          What We Do
        </a>
      </li>
      {/* <li>
        <a href="#future" className="hover:font-semibold transition-all">
          Future of Retail
        </a>
      </li> */}
      {/* <li>
        <a href="#news" className="hover:font-semibold transition-all">
          News
        </a>
      </li> */}
      <li>
        <a
          href="#contact"
          className="px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-raleway font-medium flex items-center gap-2 bg-neutral-800 text-white hover:bg-neutral-900"
        >
          <span>↗</span> Get in touch
        </a>
      </li>
    </ul>
  );
}
