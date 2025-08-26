import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    boldTitle: "Infrastructure",
    italicTitle: "as a Service (IaaS)",
    description:
      "Our team has immense experience in setting up and maintenance of Cloud Infrastructure for Banks and Financial Institutions...",
    image: "/iaas2.png",
  },
  {
    boldTitle: "Lightweight",
    italicTitle: "Business Application",
    description:
      "At Technodrome Solutions Pvt. Ltd., with our Oracle certified team, we can harness the power of Oracle APEX...",
    image: "/bussiness.png",
  },
  {
    boldTitle: "PaaS",
    italicTitle: "and SaaS Integration",
    description:
      "Our comprehensive experience in setting up and maintenance of Cloud Infrastructure...",
    image: "/saas2.png",
  },
  {
    boldTitle: "Event",
    italicTitle: "Streaming",
    description:
      "We specialize in event streaming technologies like Apache Kafka, Oracle Streaming...",
    image: "/stream1.png",
  },
  {
    boldTitle: "Cache",
    italicTitle: "Databases",
    description:
      "We implement cache databases like Redis to enhance application performance...",
    image: "/database.png",
  },
  {
    boldTitle: "Observability",
    italicTitle: "and Analytics",
    description:
      "Our observability and analytics solutions, based on the Oracle analytics...",
    image: "/observability.png",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "up" | "down") => {
    if (direction === "up") {
      setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left"
        >
          Our <span className="text-[#5AD6FF]">Services</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0"
        ></motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Card */}
          <motion.div
            key={activeIndex + "-left"}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center leading-snug">
              {services[activeIndex].boldTitle}{" "}
              <span className="text-[#5AD6FF] italic">
                {services[activeIndex].italicTitle}
              </span>
            </h1>
            <div className="flex gap-3 sm:gap-4 mt-4">
              <button
                onClick={() => scroll("up")}
                className="p-2 sm:p-3 rounded-full bg-slate-900 shadow hover:scale-105 transition"
              >
                <ChevronUp color="white" size={20} />
              </button>
              <button
                onClick={() => scroll("down")}
                className="p-2 sm:p-3 rounded-full bg-slate-900 shadow hover:scale-105 transition"
              >
                <ChevronDown color="white" size={20} />
              </button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            key={activeIndex + "-right"}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 bg-white"
          >
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].boldTitle}
              width={200}
              height={200}
              className="object-contain mb-4 sm:mb-6"
            />
            <p className="text-sm sm:text-base text-gray-500 max-w-md">
              {services[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
