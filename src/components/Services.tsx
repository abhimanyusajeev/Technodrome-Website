"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the type for a service item
type Service = {
  boldTitle: string;
  italicTitle: string;
  description: string;
  image: string;
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lockScroll, setLockScroll] = useState(false); // lock only when section is in view
  const containerRef = useRef<HTMLElement | null>(null);

  // runtime flags (not causing re-renders)
  const inViewRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const handoffRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  // Your data untouched
  const services: Service[] = [
    {
      boldTitle: "Infrastructure",
      italicTitle: "as a Service (IaaS)",
      description:
        "Our team has immense experience in setting up and maintenance of Cloud Infrastructure for Banks and Financial Institutions...",
      image: "/iaas2.png",
    },
    {
      boldTitle: "Lightweight",
      italicTitle: "Business Application",
      description:
        "At Technodrome Solutions Pvt. Ltd., with our Oracle certified team, we can harness the power of Oracle APEX...",
      image: "/bussiness.png",
    },
    {
      boldTitle: "PaaS",
      italicTitle: "and SaaS Integration",
      description:
        "Our comprehensive experience in setting up and maintenance of Cloud Infrastructure...",
      image: "/saas2.png",
    },
    {
      boldTitle: "Event",
      italicTitle: "Streaming",
      description:
        "We specialize in event streaming technologies like Apache Kafka, Oracle Streaming...",
      image: "/stream1.png",
    },
    {
      boldTitle: "Cache",
      italicTitle: "Databases",
      description:
        "We implement cache databases like Redis to enhance application performance...",
      image: "/database.png",
    },
    {
      boldTitle: "Observability",
      italicTitle: "and Analytics",
      description:
        "Our observability and analytics solutions, based on the Oracle analytics...",
      image: "/observability.png",
    },
  ];

  // Observe when the section is truly in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If we're performing a handoff, ignore re-locks for a brief period
        if (handoffRef.current) return;

        const inView = entry.isIntersecting && entry.intersectionRatio >= 0.7;
        inViewRef.current = inView;
        setLockScroll(inView);
      },
      { threshold: [0, 0.7, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Debounced step through items
  const step = (direction: "up" | "down") => {
    if (isAnimatingRef.current) return; // debounce
    isAnimatingRef.current = true;

    if (direction === "down") {
      if (activeIndex < services.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else {
        // last item -> hand off to next section
        handoff("next");
      }
    } else {
      if (activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      } else {
        // first item -> hand off to previous section
        handoff("prev");
      }
    }

    // Allow next step after animation time
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };

  // Cleanly scroll to neighbor section and temporarily avoid re-lock
  const handoff = (where: "next" | "prev") => {
    const el = containerRef.current;
    if (!el) return;

    handoffRef.current = true;
    setLockScroll(false);

    const target =
      where === "next"
        ? (el.nextElementSibling as HTMLElement | null)
        : (el.previousElementSibling as HTMLElement | null);

    // If we can't find a neighbor, just let the browser handle natural scroll
    if (target && typeof target.scrollIntoView === "function") {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Give the browser time to move away from this section before re-locking
    setTimeout(() => {
      handoffRef.current = false;
      inViewRef.current = false;
    }, 700);
  };

  // Wheel handling (only while locked & in view)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!lockScroll || !inViewRef.current || handoffRef.current) return;

      // Only intercept while locked
      e.preventDefault();

      // Normalize delta (some devices send tiny deltas)
      const delta = e.deltaY || 0;
      if (Math.abs(delta) < 10) return;

      if (delta > 0) step("down");
      else step("up");
    };

    // Touch support (mobile)
    const onTouchStart = (e: TouchEvent) => {
      if (!lockScroll || !inViewRef.current || handoffRef.current) return;
      touchStartY.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!lockScroll || !inViewRef.current || handoffRef.current) return;
      if (touchStartY.current == null) return;

      const delta = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(delta) < 30) return;

      // We’re handling it; avoid page scroll
      e.preventDefault();

      if (delta > 0) step("down");
      else step("up");

      touchStartY.current = e.touches[0].clientY; // for repeated steps
    };

    // Keyboard accessibility (arrows/PageUp/PageDown)
    const onKeyDown = (e: KeyboardEvent) => {
      if (!lockScroll || !inViewRef.current || handoffRef.current) return;

      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        step("down");
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        step("up");
      }
    };

    // Attach listeners to the section element (scoped; not global)
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("wheel", onWheel as EventListener);
      el.removeEventListener("touchstart", onTouchStart as EventListener);
      el.removeEventListener("touchmove", onTouchMove as EventListener);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lockScroll, activeIndex, services.length]); // deps ok: functions close over latest state

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden flex flex-col justify-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading (unchanged) */}
<motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left"
>
  Our <span className="text-[#5AD6FF]">Services</span>
</motion.h2>

{/* Divider under heading */}
<div className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0 w-[120px]"></div>

              {/* Divider */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left (Title) */}
          <motion.div
            key={activeIndex + "-left"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              {services[activeIndex].boldTitle}{" "}
              <span className="italic text-[#5AD6FF]"> 
                {services[activeIndex].italicTitle}
              </span>
            </h2>
          </motion.div>

          {/* Right (Description + Image) */}
          <motion.div
            key={activeIndex + "-right"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].boldTitle}
              width={160}
              height={160}
              className="object-contain mb-6"
            />

            <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-md">
              {services[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
