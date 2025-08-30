"use client";

import { motion } from "framer-motion";

export default function WhoWeAreSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
          Who We <span className="text-[#5AD6FF]">Are.</span>
        </h2>

        {/* Divider */}
        <div className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0 w-[120px]"></div>

        {/* Two-column container */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-snug mb-6">
              <span
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#9fd8f2",
                }}
              >
                Accelerating
              </span>
              <br />
              <span className="font-bold text-gray-900">
                Enterprise Transformation
                <br />
                with Expertise and Insight
              </span>
            </h2>

            {/* Bullet points content - now Raleway ExtraLight 200 */}
            <div
              className="w-full mt-8 text-gray-900 text-sm leading-relaxed space-y-3 font-extralight"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: 200 }}
            >
              <p>
                <strong style={{ fontWeight: 600 }}>Technodrome Solutions</strong> is Your
                Digital Transformation Partner with 20+ Years of Trust:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong style={{ fontWeight: 600 }}>Deep domain expertise</strong> — delivering
                  proven solutions across Banking & Finance, Insurance, Healthcare, and
                  Logistics.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Digital transformation accelerator</strong> —
                  driving innovation, precision, and agility for enterprises.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Global presence with local insight</strong> —
                  addressing unique business challenges while adhering to international
                  standards.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Trusted legacy of 20+ years</strong> — a
                  consistent partner for sustainable growth and resilience.
                </li>
                <li>
                  <strong style={{ fontWeight: 600 }}>Enduring partnerships</strong> — going
                  beyond technology delivery to build long-term success for our clients.
                </li>
              </ul>
            </div>
          </div>



        <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-6 justify-center items-stretch">
  {/* Vision Card */}
<motion.div
  initial={{ opacity: 0, scale: 0.9, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{
    scale: 1.05,
    rotate: "-1.5deg",
    boxShadow: "0 20px 40px rgba(90, 214, 255, 0.25)",
  }}
  whileTap={{ scale: 0.98 }}
  animate={{
    y: [0, -4, 0], // gentle floating
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  }}
  className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl p-8 w-full h-full overflow-hidden"
>
  {/* Decorative gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#5AD6FF]/15 to-[#9fd8f2]/10 rounded-3xl blur-xl -z-10"></div>

  {/* Title */}
  <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
    Vision
  </h3>

  {/* Content */}
  <p
    className="text-sm md:text-base leading-relaxed text-gray-700/90 tracking-wide"
    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 100 }}
  >
    The vision statement establishes{" "}
    <span className="font-semibold">Technodrome Solutions</span> as an
    aspirational market leader focused on meaningful transformation and
    stakeholder value creation...
  </p>

  {/* Animated underline */}
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
    className="h-1 mt-6 bg-gradient-to-r from-[#5AD6FF] to-[#9fd8f2] rounded-full"
  />
</motion.div>


  {/* Mission Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    whileHover={{ scale: 1.03, rotate: "1deg" }}
    className="relative bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl p-8 w-full h-full overflow-hidden"
  >
    {/* Decorative gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#9fd8f2]/20 to-[#5AD6FF]/10 rounded-3xl blur-2xl -z-10"></div>

    {/* Title */}
    <h3 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
      Mission
    </h3>

    {/* Content */}
 <p
  className="text-sm md:text-base leading-relaxed text-gray-700/90 tracking-wide"
  style={{ fontFamily: "Raleway, sans-serif", fontWeight: 100 }}
>
  The mission statement operationalizes this vision by emphasizing the
  company's partnership approach and comprehensive capabilities. It connects
  the three core pillars from the tagline{" "}
  <span className="font-semibold">(Innovate. Integrate. Compute.)</span> with
  concrete business outcomes, highlighting both technical excellence and
  strategic business understanding—key differentiators for corporate and
  technical professionals evaluating technology partners.
</p>


    {/* Subtle animated underline */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
      className="h-1 mt-6 bg-gradient-to-r from-[#9fd8f2] to-[#5AD6FF] rounded-full"
    />
  </motion.div>
</div>



        </div>


      </div>
    </section>
  );
}
