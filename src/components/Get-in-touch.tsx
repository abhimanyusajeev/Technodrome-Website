"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaRegCommentDots,
  FaMobileAlt,
} from "react-icons/fa";
import { useState } from "react";
import { Raleway, Roboto } from "next/font/google";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [mobileError, setMobileError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const SCRIPT_URL: string =
    "https://script.google.com/macros/s/AKfycbyWkLxUxX65cqh79_nSbV0By_COfPEZ7xX-SeenpXhdrP4xPYe02_uQ00AhL_9zvm82Cg/exec";

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateName = (name: string) => /^.{0,50}$/.test(name);

  const validateMessage = (msg: string) => /^[a-zA-Z0-9\s]{0,50}$/.test(msg);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (!validateName(value)) return;
      setNameError(value.length > 50 ? "Max 50 characters allowed" : "");
    }

    if (name === "message") {
      if (value.length > 50) return;
      if (!validateMessage(value)) {
        setMessageError(
          "Only letters, numbers, and spaces allowed (max 50 chars)"
        );
      } else {
        setMessageError("");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setEmailError(value && !validateEmail(value) ? "Invalid email" : "");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateName(formData.name))
      return setNameError("Only letters and max 20 characters allowed");

    if (!validateEmail(formData.email)) return setEmailError("Invalid email");

    if (!isValidPhoneNumber(formData.mobile))
      return setMobileError("Enter a valid mobile number");

    if (!validateMessage(formData.message))
      return setMessageError(
        "Only letters, numbers, and spaces allowed (max 50 chars)"
      );

    setLoading(true);
    try {
      const response = await fetch(SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "text/plain;charset=utf-8" },
      });

      const resultText = await response.text();
      const result = JSON.parse(resultText);

      if (response.ok && result.status === "success") {
        setSuccess("Message sent successfully ✅");
      } else {
        console.error(
          "Error submitting form:",
          result.message || response.statusText
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setLoading(false);
    }
  };

  return (
    <section
      className={`${raleway.className} !font-[Raleway] bg-gradient-to-br from-white via-slate-50 to-slate-80 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto md:mx-0"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-[#5AD6FF]">Touch</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-6 sm:mb-8"
          ></motion.div>

          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 text-justify">
            Get in touch with us today and discover how we can help your business
            grow and succeed. We can’t wait to hear from you!
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-slate-950 p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Let&apos;s Talk</h3>
              <p className="text-gray-500 text-sm">
                Just pick up the phone to chat with a member of our sales team.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
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
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`w-full max-w-xl mx-auto md:mx-0 ${roboto.className} !font-[Roboto]`}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name*"
                className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  nameError
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#0B0B6E]"
                } text-gray-600`}
                required
              />
              {nameError && (
                <p className="text-red-500 text-sm mt-1 pl-2">{nameError}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address*"
                className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  emailError
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#0B0B6E]"
                } text-gray-600`}
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1 pl-2">{emailError}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="relative">
              <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <PhoneInput
                defaultCountry="IN"
                value={formData.mobile}
                onChange={(value) =>
                  setFormData({ ...formData, mobile: value || "" })
                }
                placeholder="Enter your mobile number*"
                international
                countryCallingCodeEditable={false}
                className={`w-full pl-14 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  mobileError
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#0B0B6E]"
                } text-gray-600`}
              />
              {mobileError && (
                <p className="text-red-500 text-sm mt-1 pl-2">{mobileError}</p>
              )}
            </div>

            {/* Message */}
            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message*"
                rows={4}
                className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  messageError
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#0B0B6E]"
                } text-gray-600`}
                required
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-sm mt-1 pl-2">{messageError}</p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="bg-slate-950 text-white px-6 py-3 rounded-full hover:bg-[#0a0a5a] transition w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="text-center mt-2 text-sm text-green-600">{success}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
