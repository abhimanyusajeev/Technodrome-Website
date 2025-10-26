"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  animationDuration?: number; // in seconds
  ease?: string; // e.g., "back.inOut(2)"
  scrollStart?: string; // e.g., "center bottom+=50%"
  scrollEnd?: string; // e.g., "bottom bottom-=40%"
  stagger?: number; // delay between child elements
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  animationDuration = 1,
  ease = "power1.inOut",
  scrollStart = "top bottom",
  scrollEnd = "bottom top",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Create GSAP animation timeline
    const tl = gsap.fromTo(
      el.children,
      { y: 20, opacity: 0 },
      {
        y: -20,
        opacity: 1,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    // Cleanup on unmount
    return () => {
      tl.scrollTrigger?.kill(); // Kill ScrollTrigger associated with this timeline
      tl.kill(); // Kill the timeline
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollFloat;
