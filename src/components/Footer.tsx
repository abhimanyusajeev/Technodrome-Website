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
  const [copied, setCopied] = useState(false);

  const handleMapToggle = async () => {
    setShowMap(!showMap);

    // ✅ Copy link when map is opened
    if (!showMap) {
      const mapLink = "https://maps.app.goo.gl/qLxeHwoSqvaT4GyR8";
      try {
        await navigator.clipboard.writeText(mapLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Failed to copy map link:", err);
      }
    }
  };

  return (
    <footer className={`bg-white py-12 px-6 ${raleway.className}`}>
      <div className="max-w-7xl mx-auto bg-slate-950 rounded-3xl shadow-lg p-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:items-start">
          {/* LEFT SECTION */}
          <div className="flex flex-col items-start justify-start mr-6 relative">
            {/* Main Logo */}
            <img
              src="/Logo/whiteTlogobgchange.png"
              alt="Logo"
              className="w-50 h-30 object-contain mx-auto"
            />

            {/* Technodrome Logo */}
            <img
              src="/technodromelogo.png"
              alt="Technodrome Logo"
              className="w-60 h-14 object-contain mx-auto"
            />

            {/* Social Icons */}
            <div className="flex justify-start space-x-4 mt-8 text-white/70 mx-auto">
<a
  href="https://x.com/Technodrome2706?t=Ic7yBJx4oq-Q6ZCvfxTxuQ&s=09"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#5AD6FF] transition"
>
  <FaXTwitter size={20} />
</a>

              <a
                href="https://www.instagram.com/technodrome_solutions_pvt_ltd?igsh=MWM3ZHRzYXg0bzVmMw=="
                  target="_blank"
  rel="noopener noreferrer"
                className="hover:text-[#5AD6FF] transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/technodrome-solutions-private-limited/"
                  target="_blank"
  rel="noopener noreferrer"
                className="hover:text-[#5AD6FF] transition"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Map Icon */}
              <button
                onClick={handleMapToggle}
                className="hover:text-[#5AD6FF] transition flex items-center"
              >
                <FaMapMarkerAlt size={20} />
              </button>
            </div>

            {/* ✅ Copy Message */}
            {copied && (
              <div className="absolute top-full mt-3 left-0 bg-black/80 text-white text-sm px-3 py-1 rounded-lg shadow-lg z-50 animate-fade-in">
                📍 Location link copied to clipboard!
              </div>
            )}

            {/* Map Display */}
            {showMap && (
              <div className="mt-4 rounded-xl overflow-hidden shadow-lg border border-white/30 w-full">
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
                <p className="font-roboto-numbers text-sm">
                  C112, 1st Floor, Eastern Business District, LBS Marg, Bhandup
                  West, Mumbai, Maharashtra 400078
                </p>
              </div>

              <div>
                <p className="font-bold text-white">Registered Office:</p>
                <p className="font-roboto-numbers text-sm">
                  3D, 1401, Dreams, LBS Marg, Bhandup West, Mumbai, Maharashtra
                  400078, India
                </p>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-2">
                <FaPhoneAlt className="text-[#5AD6FF] text-sm" />
                <a href="tel:+919895527234" className="font-roboto-numbers text-sm text-white-600 hover:underline">
  +91 9895527234
</a>
              </div>

<div className="flex justify-center md:justify-start items-center gap-2 text-sm mb-3.5">
  <FaEnvelope className="text-[#5AD6FF] text-sm" />
  <a
    href="mailto:info@technodromesolutions.com"
    className="text-sm text-white-600 hover:underline"
  >
    info@technodromesolutions.com
  </a>
</div>

            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/40 pt-6 text-center text-white/60 text-sm font-roboto-numbers">
          © {new Date().getFullYear()} Technodromesolutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
