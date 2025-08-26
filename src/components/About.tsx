"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-[#5AD6FF]">Us</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-6 sm:mb-8"
          ></motion.div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Technodrome Solutions Pvt. Ltd. is a cutting-edge, new age
            technology solutions company that specialises in delivering robust
            and scalable solutions to meet the evolving needs of businesses.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Our team has over 20 years of experience in banking, insurance,
            logistics and health with a strong focus on Banking and Finance
            Technology.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We have expertise in Oracle APEX, Oracle Cloud Infrastructure (OCI),
            IaaS, PaaS, SaaS, Microservices, Kubernetes, ESB, Amazon AWS, Event
            streaming, Databases, DevOps, observability and analytics. We
            empower organizations to thrive in today's digital landscape.
          </p>
        </motion.div>

        {/* RIGHT - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <Image
              src="/aboutus.png"
              alt="About Technodrome Solutions"
              width={500}
              height={500}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
