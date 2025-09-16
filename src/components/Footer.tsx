"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Raleway, Roboto } from "next/font/google";

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
    <footer
      className={`bg-slate-950 text-white py-12 px-6 ${raleway.className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:items-start">
        {/* LEFT SECTION */}
        <div className="flex flex-row items-start justify-start gap-6">
          {/* Logo */}
          <img
            src="/technodromeTlogo.png"
            alt="Technodrome Solutions Logo"
            className="w-16 h-16 object-contain"
          />

          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              Technodrome Solutions
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-[#5AD6FF] mb-4">
              Innovate. Integrate. Compute.
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6 text-base sm:text-lg">
              We provide technical IT services for cloud-based integrations and
              computing. Let us help your business innovate and scale
              efficiently.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-[#5AD6FF] transition"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#5AD6FF] transition"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#5AD6FF] transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE DIVIDER */}
        <div className="hidden md:block w-px bg-gray-700"></div>

        {/* RIGHT SECTION */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-[#5AD6FF] mb-4">
            Contact Details
          </h3>

          <div className="space-y-6 text-base sm:text-lg">
            <div>
              <p className="font-bold">Corporate Office:</p>
              <p className="text-gray-300">
                C<span className={roboto.className}>112</span>, 1st Floor,
                Eastern Business District, LBS Marg, Ganesh Nagar, Bhandup West,
                Mumbai, Maharashtra{" "}
                <span className={roboto.className}>400078</span>
              </p>
            </div>

            <div>
              <p className="font-bold">Registered Office:</p>
              <p className="text-gray-300">
                <span className={roboto.className}>3D, 1401</span>, Dreams, LBS
                Marg, Bhandup West, Mumbai, Maharashtra{" "}
                <span className={roboto.className}>400078</span>, India
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2">
              <FaPhoneAlt className="text-[#5AD6FF]" />
              <p className={roboto.className}>+91 9895527234</p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope className="text-[#5AD6FF]" />
              <p>info@technodromesolutions.com</p>
            </div>
          </div>

          {/* Map Toggle */}
          <div className="mt-8">
            <button
              onClick={() => setShowMap(!showMap)}
              className="text-lg font-semibold text-[#5AD6FF] mb-3 flex items-center gap-2 hover:underline"
            >
              <FaMapMarkerAlt /> {showMap ? "Hide Map" : "Locate Us"}
            </button>

            {showMap && (
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9234643015027!2d72.93054841539264!3d19.1520733550581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8731c8a3f23%3A0x123456789abcdef!2sEastern%20Business%20District%2C%20Bhandup%20West!5e0!3m2!1sen!2sin!4v1695555555555!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © <span className={roboto.className}>{new Date().getFullYear()}</span>{" "}
        Technodromesolutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
