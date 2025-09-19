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
          <motion.div
            animate={{ 
              y: [0, -20, 0],       // bounce up & down
              scale: [1, 1.1, 1],   // slight zoom in/out
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="w-28 h-28 flex items-center justify-center"
          >
            <Image
              src="/technodromeTlogo.png" // ✅ must be in /public
              alt="Technodrome Logo Loader"
              width={112}
              height={112}
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
