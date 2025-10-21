"use client";

import { motion } from "framer-motion";
import { Raleway, Merriweather } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

const ralewayItalic = Raleway({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function WhoWeAreSection() {
  return (
    <section className={`bg-white py-12 sm:py-16  ${raleway.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Animated Heading (same style as “Our Approach”) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 text-center md:text-left ">
            Who We <span className="text-[#5AD6FF]">Are</span>
          </h2>

          {/* Underline animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-8 sm:mb-10 mx-auto md:mx-0"
          />
        </motion.div>

        {/* Two-column container */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-stretch">
          {/* LEFT CONTENT */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center md:min-h-[300px] lg:min-h-[400px] text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col justify-center h-full md:pl-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-snug text-slate-950 font-bold">
                <span
                  className={`${ralewayItalic.className} italic text-[#5AD6FF] font-normal block mb-1`}
                >
                  Accelerating
                </span>
                <span className="block">
                  Enterprise Transformation <br />
                  with Expertise & Insight
                </span>
              </h2>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Mission and Vision */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-950 mb-2 border-l-4 border-[#5AD6FF] pl-2">
                  Mission
                </h3>
                <p className="text-sm sm:text-base md:text-base leading-relaxed text-slate-700 font-light">
                  To partner with forward-thinking organizations, applying
                  cutting-edge digital and cloud technologies to transform their
                  processes, enhance productivity, and secure their digital
                  future.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-950 mb-2 border-l-4 border-[#9fd8f2] pl-2">
                  Vision
                </h3>
                <p className="text-sm sm:text-base md:text-base leading-relaxed text-slate-700 font-light">
                  To be the global catalyst for digital transformation, shaping
                  the next generation of business by delivering world-changing,
                  intelligent technology experiences.
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="mt-4 sm:mt-6">
              <p className="text-sm sm:text-base md:text-base leading-relaxed text-slate-950 mb-3">
                <strong className="font-extrabold">Technodrome Solutions</strong>{" "}
                is Your Digital Transformation Partner with 20+ Years of Trust:
              </p>

              <ul className="space-y-2 text-slate-700 text-sm sm:text-base md:text-base leading-relaxed list-none">
                {[
                  {
                    title: "Deep domain expertise",
                    desc: "delivering proven solutions across Banking & Finance, Insurance, Healthcare, and Logistics.",
                  },
                  {
                    title: "Digital transformation accelerator",
                    desc: "driving innovation, precision, and agility for enterprises.",
                  },
                  {
                    title: "Global presence with local insight",
                    desc: "addressing unique business challenges while adhering to international standards.",
                  },
                  {
                    title: "Enduring partnerships",
                    desc: "building long-term success for our clients beyond just technology delivery.",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="mt-1 h-2 w-2 sm:h-3 sm:w-3 bg-gradient-to-br from-[#5AD6FF] to-[#9fd8f2] rounded-full flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-base">
                      <strong className="font-semibold text-slate-900">
                        {item.title}
                      </strong>{" "}
                      — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
