"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Card {
  title: string;
  desc: string;
}

const cards: Card[] = [
  { title: "VCNs", desc: "Virtual Cloud Networks for secure connectivity." },
  { title: "Load Balancers", desc: "Distribute workloads efficiently." },
  { title: "API Gateways", desc: "Secure and manage API requests." },
  { title: "Object Storage Buckets", desc: "Store and manage unstructured data." },
  { title: "Autonomous Databases", desc: "Self-driving, self-securing databases." },
  { title: "Kubernetes Clusters", desc: "Deploy and manage containerized apps." },
];

export default function SliderSection() {
  const [index, setIndex] = useState(0);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setIndex((prev) => (prev < cards.length - 2 ? prev + 1 : 0));
  const prev = () => setIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 2));

  useEffect(() => {
    autoSlideRef.current = setInterval(next, 3000);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, []);

  const handleManualControl = (direction: "next" | "prev") => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    direction === "next" ? next() : prev();
    autoSlideRef.current = setInterval(next, 3000);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 mb-4"
        >
          Who We <span className="text-[#5AD6FF]">Are.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-12"
        ></motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Technodrome Solutions Private Limited is a leading IT technical service provider
              that helps businesses leverage cutting-edge technologies to improve their
              operations. Our team of experts has years of experience in cloud-based integrations
              and computing, and we are passionate about helping businesses innovate.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleManualControl("prev")}
                className="p-3 rounded-full bg-slate-950 shadow hover:scale-105 transition"
              >
                <ArrowLeft size={20} color="white" />
              </button>
              <button
                onClick={() => handleManualControl("next")}
                className="p-3 rounded-full bg-slate-950 shadow hover:scale-105 transition"
              >
                <ArrowRight size={20} color="white" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT SLIDER */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 overflow-hidden relative"
          >
            <div
              className="bg-no-repeat bg-center p-8 rounded-2xl"
              style={{
                backgroundImage: "url('/lines.png')",
                backgroundSize: "cover",
              }}
            >
              <motion.div
                className="flex gap-6"
                animate={{ x: -index * 320 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="min-w-[300px] bg-white shadow-lg rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#5AD6FF] text-white flex items-center justify-center mb-4 text-lg font-bold">
                      ✦
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
