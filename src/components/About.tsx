"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";

// ✅ Import Google Font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function About() {
  return (
    <section
      className={`bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 ${raleway.className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }} // ✅ animate directly
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto md:mx-0"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-[#5AD6FF]">Us</span>
          </h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }} // ✅ keep whileInView just for underline
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-6 sm:mb-8"
          ></motion.div>

          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 sm:mb-6">
            Technodrome Solutions Pvt. Ltd. is a cutting-edge, new age
            technology solutions company that specialises in delivering robust
            and scalable solutions to meet the evolving needs of businesses.
          </p>

          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 sm:mb-6">
            Our team has over 20 years of experience in banking, insurance,
            logistics and health with a strong focus on Banking and Finance
            Technology.
          </p>

          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            We have expertise in Oracle APEX, Oracle Cloud Infrastructure (OCI), IaaS, PaaS, SaaS, Microservices, Kubernetes, ESB, Amazon AWS, Event Streaming, Databases, DevOps, Observability and Analytics, as well as Payments and Collections, Global Remittance, UPI Integration, and Loan Management Systems (LMS). We empower organizations to thrive in today’s digital landscape.
          </p>
        </motion.div>

        {/* RIGHT - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }} // ✅ animate directly
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
  
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden"
          >
            <Image
              src="/aboutus.png"
              alt="Team of Technodrome Solutions working on digital innovation"
              width={500}
              height={500}
              priority // ✅ ensures loads immediately
              className="object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
