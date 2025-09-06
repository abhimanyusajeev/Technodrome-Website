"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

type Service = {
  boldTitle: string;
  italicTitle: string;
  description: string;
  image: string;
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services: Service[] = [
    { boldTitle: "Infrastructure", italicTitle: "as a Service (IaaS)", description: "Our team has immense experience in setting up and maintenance of Cloud Infrastructure for Banks and Financial Institutions...", image: "/iaas2.png" },
    { boldTitle: "Lightweight", italicTitle: "Business Application", description: "At Technodrome Solutions Pvt. Ltd., with our Oracle certified team, we can harness the power of Oracle APEX...", image: "/bussiness.png" },
    { boldTitle: "PaaS", italicTitle: "and SaaS Integration", description: "Our comprehensive experience in setting up and maintenance of Cloud Infrastructure...", image: "/saas2.png" },
    { boldTitle: "Event", italicTitle: "Streaming", description: "We specialize in event streaming technologies like Apache Kafka, Oracle Streaming...", image: "/stream1.png" },
    { boldTitle: "Cache", italicTitle: "Databases", description: "We implement cache databases like Redis to enhance application performance...", image: "/database.png" },
    { boldTitle: "Observability", italicTitle: "and Analytics", description: "Our observability and analytics solutions, based on the Oracle analytics...", image: "/observability.png" },
  ];

  const next = () => setActiveIndex((p) => (p + 1) % services.length);
  const prev = () => setActiveIndex((p) => (p === 0 ? services.length - 1 : p - 1));

  return (
    <section className={`${raleway.className} relative min-h-screen flex flex-col justify-center bg-white`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* ✅ Fixed heading — isolated and sticky to avoid any movement */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur py-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center md:text-left">
            Our <span className="text-[#5AD6FF]">Services</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: title + description + arrows */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Fixed-height text stage to prevent layout jump */}
            <div className="relative w-full min-h-[180px] sm:min-h-[200px]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`text-${activeIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.45 }}
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                    {services[activeIndex].boldTitle}{" "}
                    <span className="italic text-[#5AD6FF]">
                      {services[activeIndex].italicTitle}
                    </span>
                  </h3>
                  <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {services[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows under left content */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <button
                onClick={prev}
                aria-label="Previous service"
                className="p-3 rounded-full bg-gray-900/80 hover:bg-gray-900 text-white shadow-lg transition"
              >
                <ArrowLeft size={22} />
              </button>
              <button
                onClick={next}
                aria-label="Next service"
                className="p-3 rounded-full bg-gray-900/80 hover:bg-gray-900 text-white shadow-lg transition"
              >
                <ArrowRight size={22} />
              </button>
            </div>
          </div>

          {/* Right: image (fuller, responsive). Stage with fixed aspect to avoid reflow */}
          <div className="relative w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-[1/1] lg:aspect-[16/12]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`img-${activeIndex}`}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                >
                  <Image
                    src={services[activeIndex].image}
                    alt={services[activeIndex].boldTitle}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
