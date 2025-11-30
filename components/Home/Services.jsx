"use client";
import { useState, useEffect, Activity } from "react";
import {
  ActivityIcon,
  AudioLines,
  AudioWaveform,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Speech,
  Stethoscope,
} from "lucide-react";

const ourservices = [
  {
    title: "Speech Therapy",
    desc: "Our clinic offers specialized speech therapy for children, adults, and seniors, helping improve speech clarity, language skills, voice quality, fluency, and articulation function.",
    icon: <Speech className="size-10 text-black" />,
  },
  {
    title: "Language Therapy",
    desc: "Our language therapy services help children and adults develop and restore effective communication skills for daily life, academics, and work.",
    icon: <MessageCircle className="size-10 text-black" />,
  },
  {
    title: "Swallow Therapy",
    desc: "Our swallow therapy services help individuals of all ages regain safe, comfortable, and efficient swallowing. We assess, diagnose, and treat a wide range of swallowing disorders.",
    icon: <Stethoscope className="size-10 text-black" />,
  },
  {
    title: "Voice Therapy",
    desc: "Our voice therapy services help children, adults, and professional voice users regain clear, strong, and healthy vocal function.",
    icon: <AudioLines className="size-10 text-black" />,
  },
  {
    title: "Audiology Care",
    desc: "Our clinic provides comprehensive hearing evaluations and hearing aid solutions for children, adults, and seniors.",
    icon: <AudioWaveform className="size-10 text-black" />,
  },
  {
    title: "Vestibular Care",
    desc: "Our clinic provides specialized Vertigo Assessment & Management to identify and treat the root causes of dizziness, spinning sensations, and balance problems.",
    icon: <ActivityIcon className="size-10 text-black" />,
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const next = () => setIndex((i) => (i + 1) % ourservices.length);
  const prev = () =>
    setIndex((i) => (i - 1 + ourservices.length) % ourservices.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (pos) => {
    const diff = (pos - index + ourservices.length) % ourservices.length;

    if (isMobile) {
      // Mobile: Show 3 cards (center, left, right)
      if (diff === 0) return { scale: 1, zIndex: 40, opacity: 1, x: 0 };
      if (diff === 1 || diff === ourservices.length - 1)
        return {
          scale: 0.75,
          zIndex: 20,
          opacity: 0.9,
          x: diff === 1 ? 80 : -80,
        };
      return { scale: 0.2, zIndex: 0, opacity: 0, x: 0 };
    } else {
      // Desktop: Show 5 cards
      if (diff === 0) return { scale: 1, zIndex: 40, opacity: 1, x: 0 };
      if (diff === 1 || diff === ourservices.length - 1)
        return {
          scale: 0.85,
          zIndex: 20,
          opacity: 0.98,
          x: diff === 1 ? 200 : -200,
        };
      if (diff === 2 || diff === ourservices.length - 2)
        return {
          scale: 0.7,
          zIndex: 10,
          opacity: 0.8,
          x: diff === 2 ? 350 : -350,
        };
      return { scale: 0.2, zIndex: 0, opacity: 0, x: 0 };
    }
  };

  return (
    <section className="bg-linear-to-b from-[#E3F2FD] to-white border-b border-b-black/10 min-h-screen py-5 sm:py-8">
      <div className="px-4 sm:px-6 lg:pl-10 mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0D2F5C] ">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl subtext mt-1">
          Conditions Treated
        </p>
      </div>

      <div className="flex flex-col place-items-center place-content-center justify-center items-center px-4">
        <div className="relative w-full flex justify-center items-center min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] ">
          {ourservices.map((item, i) => {
            const { scale, zIndex, opacity, x } = getPosition(i);

            return (
              <div
                key={item.title}
                className="absolute w-[60vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] xl:w-[22vw] 
                          h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]
                          bg-[#7399C6] backdrop-blur-xl rounded-full border sm:border-2 border-white
                          shadow-lg flex flex-col place-items-center place-content-center pt-8 sm:pt-12 xl:pt-0 text-white
                          transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${x}px) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-3 sm:mb-4 px-6 sm:px-8 lg:px-10 text-center">
                  {item.title}
                </h3>

                {/* LINE + ICON WRAPPER */}
                <div className="relative w-full flex items-center justify-center my-3 sm:my-4">
                  {/* Full Horizontal Line */}
                  <div className="absolute w-full h-0.5 bg-white"></div>

                  {/* Icon Circle */}
                  <div
                    className="relative z-10 flex items-center justify-center text-4xl sm:text-5xl
                                w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 backdrop-blur-md border border-white/40"
                  >
                    {item.icon}
                  </div>
                </div>

                <p className=" mx-6 sm:mx-10 text-sm sm:text-base lg:text-lg text-white text-center sm:text-justify leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="relative z-50 flex gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-15">
          <button
            onClick={prev}
            className="p-2 sm:p-3 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition shadow-lg"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={next}
            className="p-2 sm:p-3 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition shadow-lg"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
