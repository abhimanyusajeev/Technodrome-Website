"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Loader Inner */}
          <div className="relative h-[250px] aspect-square flex items-center justify-center">
            
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
                  delay: 0,
                }}
              />
            ))}

            {/* Logo - fades in once, stays visible */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] flex items-center justify-center z-[999]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.2, // ⏳ wait for ripples first
                ease: "easeOut",
              }}
            >
              <Image
                src="/technodromeTlogo.png"
                alt="Technodrome Logo Loader"
                width={140}
                height={140}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
