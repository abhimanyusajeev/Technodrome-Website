  "use client";

  import { motion, useScroll, useTransform } from "framer-motion";
  import { useRef, useState, useEffect } from "react";
  import Image from "next/image";
  import { ChevronLeft, ChevronRight } from "lucide-react";
  import { Raleway } from "next/font/google";

  const raleway = Raleway({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700", "900"],
  });

  const cultureCards = [
    {
      title: "Deep domain expertiseibility",
      desc: "Delivering proven solutions across Banking & Finance, Insurance, Healthcare, and Logistics.",
      gradient: "bg-gradient-to-br from-slate-950 via-[#0B1A2A] to-[#021018]",
      accent: "#5AD6FF",
      image: "/Who/DDE.png",
    },
    {
      title: "Digital transformation accelerator",
      desc: "Driving innovation, precision, and agility for enterprises.",
      gradient: "bg-gradient-to-br from-[#0B1A2A] via-[#021018] to-[#5AD6FF]",
      accent: "#5AD6FF",
      image: "/Who/DTA.png",
    },
    {
      title: "Global presence with local insight",
      desc: "Addressing unique business challenges while adhering to international standards.",
      gradient: "bg-gradient-to-br from-[#021018] via-[#0B1A2A] to-slate-950",
      accent: "#5AD6FF",
      image: "/Who/GPL2.png",
    },
    {
      title: "Enduring partnerships",
      desc: "Building long-term success for our clients beyond just technology delivery.",
      gradient: "bg-gradient-to-br from-[#0B1A2A] via-slate-950 to-[#5AD6FF]",
      accent: "#5AD6FF",
      image: "/Who/EP1.jpg",
    },
  ];

  export default function WhoWeAreSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });

    // 🟦 For mobile carousel
    const [current, setCurrent] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);

    const length = cultureCards.length;

    const clampIndex = (i: number) => {
      if (i < 0) return length - 1;
      if (i >= length) return 0;
      return i;
    };

    // 🖐️ Drag handling
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
      setIsDragging(true);
      if ("touches" in e) setStartX(e.touches[0].clientX);
      else setStartX(e.clientX);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDragging) return;
      let currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const deltaX = currentX - startX;
      setTranslateX(prevTranslate + deltaX);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      const movedBy = translateX - prevTranslate;
      if (movedBy < -50) setCurrent(clampIndex(current + 1));
      if (movedBy > 50) setCurrent(clampIndex(current - 1));
      setTranslateX(0);
      setPrevTranslate(0);
    };

    useEffect(() => {
      setTranslateX(0);
      setPrevTranslate(0);
    }, [current]);

    const nextSlide = () => setCurrent(clampIndex(current + 1));
    const prevSlide = () => setCurrent(clampIndex(current - 1));

    const sectionHeight = cultureCards.length * 100;

    return (
      <section
        className={`relative bg-gradient-to-br from-white via-slate-50 to-slate-80 px-4 sm:px-6 lg:px-8 py-8 ${raleway.className}`}
        style={{ height: `${sectionHeight}vh` }}
      >
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative flex flex-col md:flex-row gap-10"
        >
          {/* LEFT COLUMN */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 sticky top-24 self-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-950 mb-4 text-center md:text-left">
                Who We <span className="text-[#5AD6FF]">Are</span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-[#5AD6FF] rounded-full mb-8 sm:mb-6 mx-auto md:mx-0"
              />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              <span className="italic text-[#5AD6FF] block mb-1">Accelerating</span>
              Enterprise Transformation <br /> with Expertise & Insight
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 mt-4">
              <div className="border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold border-l-4 border-[#5AD6FF] pl-3 mb-2">
                  Mission
                </h3>
                <p className="text-slate-700 text-sm">
                  To partner with forward-thinking organizations, applying
                  cutting-edge digital and cloud technologies to transform
                  processes.
                </p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold border-l-4 border-[#5AD6FF] pl-3 mb-2">
                  Vision
                </h3>
                <p className="text-slate-700 text-sm">
                  To be the global catalyst for digital transformation, shaping
                  the next generation of business through technology.
                </p>
              </div>
            </div>

            {/* 🟢 MOBILE CAROUSEL */}
            <div className="mt-10 flex flex-col items-center md:hidden relative">
              <div
                className="relative flex justify-center items-center w-full h-[450px] overflow-hidden cursor-grab select-none"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={() => isDragging && handleDragEnd()}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {cultureCards.map((card, index) => {
                  const isActive = index === current;
                  const isLeft = index === (current - 1 + length) % length;
                  const isRight = index === (current + 1) % length;

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-in-out rounded-2xl shadow-lg overflow-hidden
                      w-full max-w-sm h-full ${card.gradient}
                      ${
                        isActive
                          ? "z-30 opacity-100 scale-100 translate-x-0"
                          : isLeft
                          ? "z-20 opacity-50 scale-90 -translate-x-full"
                          : isRight
                          ? "z-20 opacity-50 scale-90 translate-x-full"
                          : "z-10 opacity-0 scale-90 translate-x-[200%]"
                      }`}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={200}
                        height={200}
                        className="object-contain w-[70%] h-[70%] mx-auto mt-4"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent text-white p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-bold mb-2 text-[#5AD6FF]">
                          {card.title}
                        </h3>
                        <p className="text-sm">{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 bottom-4 z-40 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full shadow p-2 mb-32"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 bottom-4 z-40 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full shadow p-2 mb-32"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN (Desktop Only) */}
{/* RIGHT COLUMN (Desktop Only) */}
<div className="w-full md:w-1/2 relative hidden md:block">
  <div className="sticky top-24 h-[80vh] flex justify-center items-start">
    <div className="relative w-full md:w-[90%] h-full">

      {/* 🆕 Heading shown before scroll */}
{/* 🆕 Heading shown before scroll */}
<motion.div
  className="absolute inset-0 flex justify-center items-center text-center px-6"
  style={{
    opacity: useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 0.5, 0]),
  }}
>
  <h3
    className={`text-3xl md:text-4xl font-black italic leading-relaxed ${raleway.className}`}
  >
    <span className="text-[#5AD6FF]">
      Technodrome Solutions
    </span>{" "}
    <span className="text-slate-950">
      is Your Digital Transformation Partner with{" "}
      <span className="text-[#5AD6FF]">20+ Years of Trust</span>
    </span>
  </h3>
</motion.div>


      {cultureCards.map((card, idx) => {
        const total = cultureCards.length;
        const start = idx / total;
        const end = (idx + 1) / total;

        const y = useTransform(
          scrollYProgress,
          [start, start + 0.1, end - 0.1, end],
          ["50vh", "10vh", "10vh", "-50vh"]
        );
        const opacity = useTransform(
          scrollYProgress,
          [start, start + 0.1, end - 0.1, end],
          [0, 1, 1, 0]
        );

        return (
          <motion.div
            key={idx}
            className={`absolute left-0 right-0 rounded-[1.5rem] p-6 origin-top shadow-2xl overflow-hidden ${card.gradient} mx-auto w-[80%] min-h-[480px]`}
            style={{
              y,
              opacity,
              zIndex: total - idx,
            }}
          >
            <div className="mb-6 relative w-full flex justify-center">
              <div className="w-full h-full bg-slate-900/40 rounded-xl border border-[#5AD6FF]/30 flex justify-center items-center overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-[#5AD6FF] font-semibold text-2xl mb-2 md:mb-3">
                {card.title}
              </h3>
              <p className="text-gray-200 text-base leading-relaxed max-w-[90%] md:max-w-[80%]">
                {card.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</div>

        </div>
      </section>
    );
  }
