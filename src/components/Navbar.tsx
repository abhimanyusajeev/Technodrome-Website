"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Raleway } from "next/font/google";

// ✅ Load Raleway
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY) {
        setShowNavbar(true); // scrolling up → show
      } else {
        setShowNavbar(false); // scrolling down → hide
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
          className={`fixed top-5 w-full z-50 ${raleway.className}`}
        >
          <NavContent
            logo="/technodrometxtlogo.png"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

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
    <div className="max-w-6xl w-full md:w-fit mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between bg-white px-6 py-2 rounded-full shadow-md 
                max-w-[90%] mx-auto md:max-w-none">



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
        <NavLinks className="hidden md:flex items-center space-x-8 text-black text-[15px]" />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto focus:outline-none text-black"
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
  className="absolute top-20 left-0 right-0 mx-auto w-[90%] p-6 
             flex flex-col items-center space-y-6 
             shadow-lg md:hidden bg-white text-black z-40 rounded-b-2xl"
>
  <NavLinks className="flex flex-col items-center space-y-6 text-center w-full" />
</motion.div>



        )}
      </AnimatePresence>
    </div>
  );
}

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={`${className} font-raleway font-medium`}>
            <li className="ml-6"> {/* Space from logo */}
        <a href="#who" className="hover:font-semibold transition-all">
       
        </a>
      </li>
      <li className="ml-6"> {/* Space from logo */}
        <a href="#who" className="hover:font-semibold transition-all">
          Who We Are
        </a>
      </li>
      <li>
        <a href="#services" className="hover:font-semibold transition-all">
          What We Do
        </a>
      </li>
      <li>
        <a href="#technologystack" className="hover:font-semibold transition-all">
          Tech Stack
        </a>
      </li>
      <li>
        <a href="#journey" className="hover:font-semibold transition-all">
          Our Journey
        </a>
      </li>
        <li className="ml-6"> {/* Space from "Our Journey" */}
        <a
          href="#contact"
          className=""
        >        
        </a>
      </li>
      <li className="ml-6"> {/* Space from "Our Journey" */}
        <a
          href="#contact"
          className="px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-raleway font-semibold flex items-center justify-center gap-2 bg-neutral-800 text-white hover:bg-neutral-900"
        >
          <span>↗</span> Get in touch
        </a>
      </li>
    </ul>
  );
}

