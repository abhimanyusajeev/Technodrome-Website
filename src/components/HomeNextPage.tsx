"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});

const stickyHeadlineParts = [
  "Empowering enterprises with future-ready innovation,",
  "seamless integration, and intelligent computing solutions—delivering reliable technology",
  "expertise that drives business performance and creates measurable impact for end-users.",
];

const BASE_COLOR = "#817c7cff";
const ACTIVE_COLOR = "#000000ff";

const getWordColorProgress = (wordIndex: number, totalWords: number) => {
  const segmentSize = 1 / totalWords;
  const start = wordIndex * segmentSize;
  const end = (wordIndex + 1) * segmentSize;
  const padding = 0.005;
  return [start + padding, end - padding];
};

function AnimatedWord({
  word,
  wIndex,
  totalWords,
  scrollYProgress,
}: {
  word: string;
  wIndex: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
}) {
  const [startProgress, endProgress] = getWordColorProgress(wIndex, totalWords);
  const color = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [BASE_COLOR, ACTIVE_COLOR]
  );

  return (
    <span className="mr-2 md:mr-3 my-1 whitespace-normal">

      <motion.span style={{ color }}>
        {word}
        {wIndex < totalWords - 1 ? " " : ""}
      </motion.span>
    </span>
  );
}

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = stickyHeadlineParts.flatMap((part) =>
    part.split(" ").filter((w) => w.length > 0)
  );
  const totalWords = words.length;

  return (
    <section className="bg-linear-gradient(135deg, #f8f8f8, #e6f7ff, #fff7e6)">
<div
  ref={containerRef}
  className="
    relative
    w-full
    min-h-[150vh]        /* enough scroll space */
    sm:min-h-[200vh]     /* full scroll on desktop */
    overflow-visible     /* ensures sticky works */
    px-4 md:px-8 lg:px-16
  "
>


        <div className="sticky top-0 h-screen flex items-center justify-center">
<h2
  className={`
    ${raleway.className}
    text-center
    max-w-4xl 
    font-extrabold
    leading-normal 
    text-black

    /* ✅ Mobile-only adjustments */
    text-[2.1rem] leading-snug px-3
    sm:text-3xl     
    md:text-4xl     
    lg:text-5xl     

    transition-colors duration-200
  `}
>

            {words.map((word, wIndex) => (
              <AnimatedWord
                key={wIndex}
                word={word}
                wIndex={wIndex}
                totalWords={totalWords}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
