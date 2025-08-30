"use client";

import { motion } from "framer-motion";
import { Lightbulb, Microscope, Clock, Target, Send } from "lucide-react";

const journey = [
  {
    year: "2023",
    phase: "Starting Phase",
    icon: Lightbulb,
    color: "from-green-400 to-green-600",
    points: [
      "Formation of Technodrome Solutions Pvt. Ltd.",
      "Setting up internal systems & processes.",
      "Launch of IDCS-MFA Reset, Insurance Portal, Asset Tracking.",
    ],
  },
  {
    year: "2024",
    phase: "Growth Phase",
    icon: Microscope,
    color: "from-cyan-400 to-cyan-600",
    points: [
      "Launched Collection Hub (Phase-1).",
      "Introduced Global Remit platform.",
      "Strengthened BFSI sector client base.",
    ],
  },
  {
    year: "2025",
    phase: "Expansion Phase",
    icon: Clock,
    color: "from-blue-400 to-blue-600",
    points: [
      "Rolled out Collection Hub (Phase-2).",
      "Delivered enterprise banking projects.",
      "Enhanced scalability & performance.",
    ],
  },
  {
    year: "2026",
    phase: "Future Phase",
    icon: Target,
    color: "from-purple-400 to-purple-600",
    points: [
      "Launched AI-driven projects.",
      "Targeting ISO 27001 certification.",
      "Expanding to global markets.",
    ],
  },
];

export default function CompanyJourney() {
  return (
    <section className="relative min-h-[60vh] bg-white py-16 px-4 sm:px-8 lg:px-20 overflow-x-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 mb-16 text-center"
      >
        Company <span className="text-cyan-600">Journey</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        {/* Row of icons with connectors */}
        <div className="relative flex items-center justify-between">
          {journey.map((milestone, i) => {
            const Icon = milestone.icon;
            return (
              <div key={i} className="relative flex-1 flex items-center justify-center">
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${milestone.color} text-white shadow-lg z-10`}
                >
                  <Icon size={24} />
                </div>

                {/* Connector line */}
                {i < journey.length - 1 && (
                  <div className="absolute top-1/2 left-full w-full h-[2px] bg-gray-300 -translate-y-1/2"></div>
                )}
              </div>
            );
          })}

          {/* Telegram Icon at End */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-lg z-10">
              <Send size={24} />
            </div>
          </div>
        </div>

        {/* Row of cards aligned below icons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {journey.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                {milestone.year} – {milestone.phase}
              </h3>
              <ul className="text-gray-700 text-xs sm:text-sm space-y-1 list-disc list-inside">
                {milestone.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
