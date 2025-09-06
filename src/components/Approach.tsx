"use client";

import { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

interface Step {
  title: string;
  text: string;
  icon: ReactElement;
}

const steps: Step[] = [
  {
    title: "Discover",
    text: "Collaborate with technology and business leaders to identify needs that align with strategic goals.",
    icon: <SearchIcon fontSize="large" className="text-[#5AD6FF]" />,
  },
  {
    title: "Planning",
    text: "Our team designs a tailored plan that aligns with your objectives and timelines.",
    icon: <EventNoteIcon fontSize="large" className="text-[#5AD6FF]" />,
  },
  {
    title: "Support",
    text: "We ensure seamless operations with comprehensive application management, proactive monitoring, and dedicated support.",
    icon: <SupportAgentIcon fontSize="large" className="text-[#5AD6FF]" />,
  },
  {
    title: "Execution",
    text: "We bring strategies to life with precision and agility. Our team follows industry best practices to deliver secure, scalable, and high-performing solutions.",
    icon: <RocketLaunchIcon fontSize="large" className="text-[#5AD6FF]" />,
  },
];

const Approach: FC = () => {
  return (
    <section
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 sm:py-20 px-4 sm:px-6 ${raleway.className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-[#5AD6FF]">Approach</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto"
          ></motion.div>
        </motion.div>

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
          work closely with our clients to understand their needs and tailor our
          services to meet their specific requirements.
        </motion.p>

        {/* Steps in Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mt-6 w-full">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              {/* Icon with hover animation */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -5, 5, -5, 0], // little bounce rotation
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}
                className="mb-4"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3">
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
