"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface Step {
  step: string;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Understanding",
    text: "We start by listening to our clients and analyzing their unique business needs.",
  },
  {
    step: "02",
    title: "Planning",
    text: "Our team designs a tailored plan that aligns with your objectives and timelines.",
  },
  {
    step: "03",
    title: "Execution",
    text: "We deliver high-quality solutions with a focus on efficiency, security, and innovation.",
  },
];

const Approach: FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
        >
          Our <span className="text-[#5AD6FF]">Approach</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-6 sm:mb-8"
        ></motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-10 sm:mb-12 px-2"
        >
          At{" "}
          <span className="font-semibold text-gray-800">
            Technodrome Solutions Private Limited
          </span>
          , we take a customer-centric approach to providing IT services. We
          work closely with our clients to understand their needs and tailor
          our services to meet their specific requirements.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6 w-full">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5AD6FF] mb-3 sm:mb-4">
                {item.step}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
