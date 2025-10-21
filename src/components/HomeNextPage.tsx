// NOTE: For Next.js projects, uncomment and adjust the font import below
// and ensure 'use client' remains at the top.
"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Raleway } from "next/font/google";

// --- START: Raleway Font Mockup for Sandbox Environment ---
// In a Next.js project, this would be:
// import { Raleway } from "next/font/google";
// const raleway = Raleway({ subsets: ["latin"], weight: "600" });
const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});
// --- END: Raleway Font Mockup ---

// Define the content
const stickyHeadlineParts = [
  "Empowering enterprises with future-ready innovation,",
  "seamless integration, and intelligent computing solutions—delivering reliable technology",
  "expertise that drives business performance and creates measurable impact for end-users.",
];

// Define color constants for clarity
const BASE_COLOR = "#817c7cff"; // Deselected/faded color (Gray)
const ACTIVE_COLOR = "#000000ff"; // Highlighted color (White)

/**
 * Helper function to calculate the scroll range for a given word
 * The output range is normalized from 0 to 1.
 * @param wordIndex The index of the current word.
 * @param totalWords The total count of words in the headline.
 */
// FIX: Added explicit number types to resolve TypeScript error TS(7006)
const getWordColorProgress = (wordIndex: number, totalWords: number) => {
  // Use slightly larger segments for smoother transition across all words
  const segmentSize = 1 / totalWords;
  const start = wordIndex * segmentSize;
  const end = (wordIndex + 1) * segmentSize;
  const padding = 0.005; // Small padding for smooth transition gap
  return [start + padding, end - padding];
};

/**
 * Component to handle the color animation for a single word.
 */
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

  // Use useTransform to map scroll progress to a color value
  const color = useTransform(
    scrollYProgress,
    [startProgress, endProgress],
    [BASE_COLOR, ACTIVE_COLOR]
  );

  return (
    // Use inline-block for proper word wrapping
    <span className="inline-block mr-2 md:mr-3 my-1">
      <motion.span style={{ color }}>
        {word}
        {/* Add back the space after the word, but not at the end of the last word */}
        {wIndex < totalWords - 1 ? " " : ""}
      </motion.span>
    </span>
  );
}

/**
 * Main Sticky Scroll Section component.
 */
export default function App() {
  const containerRef = useRef(null);

  // 1. Setup Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Tracks scroll from the moment the container enters the viewport until it leaves
    offset: ["start end", "end start"],
  });

  // Flatten the headline into an array of words
  const words = stickyHeadlineParts.flatMap((part) => part.split(" ").filter(w => w.length > 0));
  const totalWords = words.length;

  return (
    // Removed min-h-screen as the spacers are gone.
    <section className={`bg-linear-gradient(135deg, #f8f8f8, #e6f7ff, #fff7e6)`}>
      <div
        ref={containerRef}
        // h-[300vh] increases the scroll duration for a smoother, slower effect
        className="
          relative
          w-full
          h-[200vh] 
          px-4 md:px-8 lg:px-16
        "
      >
        {/* Sticky Container - The content stays centered in the viewport */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h2
            className={`
              ${raleway.className} /* Applied Raleway font class */
              text-center
              max-w-4xl 
              font-extrabold
              leading-normal 
              text-black
              
              /* RESPONSIVENESS FIX */
              text-xl         
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
