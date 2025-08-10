// src/components/Footer.tsx
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Technodrome Solutions</h1>
          <h2 className="text-lg font-semibold text-[#5AD6FF] mb-4">
            Innovate. Integrate. Compute.
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-md mb-6">
            We provide technical IT services for cloud-based integrations and
            computing. Let us help your business innovate and scale efficiently.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
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

        {/* MIDDLE DIVIDER */}
        <div className="hidden md:block w-px bg-gray-700"></div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-[#5AD6FF] mb-4">
            Contact Details
          </h3>

          <div className="space-y-6">
            <div>
              <p className="font-bold">Corporate Office:</p>
              <p className="text-gray-300">
                C112, 1st Floor, Eastern Business District, LBS Marg, Ganesh
                Nagar, Bhandup West, Mumbai, Maharashtra 400078
              </p>
            </div>

            <div>
              <p className="font-bold">Registered Office:</p>
              <p className="text-gray-300">
                3D, 1401, Dreams, LBS Marg, Bhandup West, Mumbai, Maharashtra
                400078, India
              </p>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#5AD6FF]" />
              <p>+91 9895527234</p>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#5AD6FF]" />
              <p>info@technodromesolutions.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Technodromesolutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
