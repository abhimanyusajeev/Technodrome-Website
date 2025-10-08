"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Raleway, Roboto } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Footer: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
<footer className={`bg-white py-12 px-6 ${raleway.className}`}>
  <div className="max-w-7xl mx-auto bg-slate-950 rounded-3xl shadow-lg p-10">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:items-start">
      
      {/* LEFT SECTION */}
      <div className="flex flex-row items-start justify-start gap-3">
        <img src="/Logo/BlueTlogo.png" alt="Logo" className="w-16 h-16 mb-72 object-contain" />

        <div className="text-left py-5.5">
          <img src="/technodromelogo.png" alt="Technodrome Logo" className="w-60 h-14 object-contain mb-7" />
          <h2 className="text-lg sm:text-xl font-semibold text-[#5AD6FF]">
            Innovate. Integrate. Compute.
          </h2>
          <p className="text-white/80 leading-relaxed max-w-md mb-6 text-base sm:text-lg">
            We provide technical IT services for cloud-based integrations
            and computing. Let us help your business innovate and scale efficiently.
          </p>

          <div className="flex justify-start space-x-4 mt-4 text-white/70">
            <a href="https://x.com/Technodrome2706?t=Ic7yBJx4oq-Q6ZCvfxTxuQ&s=09" className="hover:text-[#5AD6FF] transition"><FaXTwitter size={20} /></a>
            <a href="https://www.instagram.com/technodrome_solutions_pvt_ltd?igsh=MWM3ZHRzYXg0bzVmMw==" className="hover:text-[#5AD6FF] transition"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/technodrome-solutions-private-limited/" className="hover:text-[#5AD6FF] transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-white/40"></div>

      {/* RIGHT SECTION */}
      <div className="text-center md:text-left text-white/80">
        <h3 className="text-lg sm:text-xl font-semibold text-[#5AD6FF] mb-4">
          Contact Details
        </h3>

        <div className="space-y-6 text-base sm:text-lg">
          <div>
            <p className="font-bold text-white">Corporate Office:</p>
            <p>C112, 1st Floor, Eastern Business District, LBS Marg, Bhandup West, Mumbai, Maharashtra 400078</p>
          </div>

          <div>
            <p className="font-bold text-white">Registered Office:</p>
            <p>3D, 1401, Dreams, LBS Marg, Bhandup West, Mumbai, Maharashtra 400078, India</p>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaPhoneAlt className="text-[#5AD6FF]" />
            <p>+91 9895527234</p>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaEnvelope className="text-[#5AD6FF]" />
            <p>info@technodromesolutions.com</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-white/40 pt-6 text-center text-white/60 text-sm">
      © {new Date().getFullYear()} Technodromesolutions. All rights reserved.
    </div>
  </div>
</footer>

  );
};

export default Footer;
