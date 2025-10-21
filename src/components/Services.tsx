"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600", "700"] });

type Service = {
  boldTitle: string;
  italicTitle: string;
  description: string;
  image: string;
};

export default function Services() {
  const services: Service[] = [
    // {
    //   boldTitle: "Infrastructure",
    //   italicTitle: "as a Service (IaaS)",
    //   description:
    //     "Our team has immense experience in setting up and maintenance of Cloud Infrastructure for Banks and Financial Institutions...",
    //   image: "/iaas2.png",
    // },
       {
      boldTitle: "Collections",
      italicTitle: "and Management",
      description:
        "Delivering efficient collections and management solutions to streamline financial operations and ensure seamless tracking of payments.",
      image: "/Services/Collections.png",
    },
            {
      boldTitle: "AI-Driven Solutions",
      italicTitle: "Powered by IBM watsonx",
      description:
              "AI-driven solutions powered by IBM Watson that enable businesses to harness data intelligently, automate processes, and deliver personalized experiences, enhancing operational efficiency and driving innovation across industries.",

      image: "/Services/Ibm-watsonxx.png",
    },
                {
      boldTitle: "UPI",
      italicTitle: "Integrations",
      description:
        "Specializing in seamless UPI integration solutions that connect acquirers and issuers to enable secure, real-time transactions, streamline digital payments, and enhance efficiency for businesses and customers alike.",
      image: "/Services/UPI.png",
    },
        {
      boldTitle: "Full-Stack Web ",
      italicTitle: "& Mobile Development",
      description:
        "we provide end-to-end web and mobile development, from static websites and full-stack applications to iOS and Android apps, delivering seamless, high-performance digital experiences that drive engagement and growth.",
      image: "/Services/fullstack.png",
    },
    {
      boldTitle: "Lightweight",
      italicTitle: "Business Application",
      description:
        "At Technodrome Solutions Pvt. Ltd., with our Oracle certified team, we can harness the power of Oracle APEX...",
      image: "/business.png",
    },
    {
      boldTitle: "Iaas, PaaS and SaaS",
      italicTitle: " Integration",
      description:
        "Our team has extensive experience in Cloud Infrastructure setup and maintenance for Banks and Financial Institutions, covering IaaS, PaaS, and SaaS environments.",
      image: "/Services/ips.png",
    },
    {
      boldTitle: "Event",
      italicTitle: "Streaming",
      description:
        "We specialize in event streaming technologies such as Apache Kafka, Oracle Streaming, and RabbitMQ, empowering businesses to build scalable, event-driven systems with reliable message delivery and real-time analytics.",
      image: "/Services/event.png",
    },
    {
      boldTitle: "Global",
      italicTitle: "Remittances",
      description:
        "A secure, fast, and easy-to-use platform for sending and receiving money globally—trusted by individuals and businesses for seamless cross-border transfers.",
      image: "/Services/globalremittance.png",
    },
        {
      boldTitle: "LOS & LMS",
      italicTitle: " Integration ",
      description:
        "A unified LOS and LMS platform that automates the entire loan process—from origination to repayment—improving efficiency, compliance, and customer experience.",
      image: "/Services/lms&los.png",
    },
    {
      boldTitle: "Observability",
      italicTitle: "and Analytics",
      description:
        "Our observability and analytics solutions, powered by Oracle Analytics and the ELK Stack, enable real-time monitoring, log analysis, and actionable insights.",
      image: "/observability.png",
    },

  ];

  const [current, setCurrent] = useState(0);
  const length = services.length;

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const clampIndex = (index: number) => {
    if (index < 0) return length - 1;
    if (index >= length) return 0;
    return index;
  };

  // Mouse / Touch Handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    let currentX;
    if ("touches" in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    const deltaX = currentX - startX;
    setCurrentTranslate(prevTranslate + deltaX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50) {
      setCurrent(clampIndex(current + 1));
    } else if (movedBy > 50) {
      setCurrent(clampIndex(current - 1));
    }
    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  useEffect(() => {
    setCurrentTranslate(0);
    setPrevTranslate(0);
  }, [current]);

  const nextSlide = () => setCurrent(clampIndex(current + 1));
  const prevSlide = () => setCurrent(clampIndex(current - 1));

  return (
    <section
      className={`${raleway.className} relative min-h-screen flex flex-col justify-center bg-white`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
          What <span className="text-[#5AD6FF]">We Do</span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0"
        ></motion.div>
      </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden pb-8">

          <div
            ref={containerRef}
            className="relative flex justify-center items-center w-full h-[500px] cursor-grab select-none"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => isDragging && handleDragEnd()}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onTouchCancel={() => isDragging && handleDragEnd()}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              transform: `translateX(${currentTranslate}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            {services.map((service, index) => {
              const isActive = index === current;
              const isLeft = index === (current - 1 + length) % length;
              const isRight = index === (current + 1) % length;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out rounded-2xl shadow-lg overflow-hidden
                  w-full max-w-lg h-full bg-white
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
                    src={service.image}
                    alt={service.boldTitle}
                    width={200}
                    height={200}
                   className="object-contain w-[70%] h-[70%] mx-auto"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t mask-linear-from-slate-50 via-slate-50/5 to-transparent text-slate-950 p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-4">
                      {service.boldTitle}{" "}
                      <span className=" text-[#5AD6FF]">
                        {service.italicTitle}
                      </span>
                    </h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 bottom-4 z-40 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full shadow p-2"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 bottom-4 z-40 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full shadow p-2"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
