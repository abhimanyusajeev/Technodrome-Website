"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get In <span className="text-[#5AD6FF]">Touch</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-12"
          ></motion.div>

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get in touch with us today and discover how we can help your business
            grow and succeed. We can&apos;t wait to hear from you!
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-slate-950 p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Let&apos;s Talk</h3>
              <p className="text-gray-500 text-sm">
                Just pick up the phone to chat with a member of our sales team.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-slate-950 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Write Us</h3>
              <p className="text-gray-500 text-sm">
                We are always delighted to receive your inquiries and engage in
                discussions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
              required
            />
            <input
              type="email"
              placeholder="Enter your email address*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
              required
            />
            <input
              type="tel"
              placeholder="Enter your mobile*"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
              required
            />
            <textarea
              placeholder="Enter your message*"
              rows={4}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="bg-slate-950 text-white px-6 py-3 rounded-full hover:bg-[#0a0a5a] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
