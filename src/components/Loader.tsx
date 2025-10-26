"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white min-h-screen"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh", // ✅ mobile viewport fix
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Loader Inner */}
          <div className="relative flex items-center justify-center w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px]">
            {/* Ripple Circles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-transparent backdrop-blur-sm"
                style={{
                  inset: `${i * 15}%`,
                  zIndex: 100 - i,
                }}
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.8, 1],
                  boxShadow: [
                    "0 10px 10px rgba(0,0,0,0.3)",
                    "0 30px 20px rgba(0,0,0,0.3)",
                    "0 10px 10px rgba(0,0,0,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Logo - perfectly centered */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[999]"
              style={{ transformOrigin: "center center" }} // ✅ Fixes “sliding from right” issue
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]">
                <Image
                  src="/technodromeTlogo.png"
                  alt="Technodrome Logo Loader"
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
