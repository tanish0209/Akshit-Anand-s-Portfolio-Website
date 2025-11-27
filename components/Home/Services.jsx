"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Activity,
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
    desc: "Our clinic provides specialized Vertigo Assessment & Management to identify and treat the root causes of dizziness, spinning sensations, and balance problems. ",
    icon: <Activity className="size-10 text-black" />,
  },
];

export default function Services() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % ourservices.length);
  const prev = () =>
    setIndex((i) => (i - 1 + ourservices.length) % ourservices.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  const getPosition = (pos) => {
    const diff = (pos - index + ourservices.length) % ourservices.length;

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
  };

  return (
    <section className="bg-linear-to-b from-[#E3F2FD] border-b border-b-black/10 min-h-screen to-white py-5">
      <div className="pl-10">
        <h2 className="text-5xl text-[#0D2F5C] ">Our Services</h2>
        <p className="text-2xl subtext mb-10">Conditions Treated</p>
      </div>
      <div className="flex flex-col place-items-center place-content-center justify-center items-center">
        <div className="relative w-full flex justify-center items-center min-h-[70vh]">
          {ourservices.map((item, i) => {
            const { scale, zIndex, opacity, x } = getPosition(i);

            return (
              <motion.div
                key={item.title}
                className="absolute w-[22vw] h-[80vh] bg-[#7399C6] backdrop-blur-xl rounded-full
              //   border-2 border-white shadow-lg flex-col place-items-center place-content-center  text-white"
                animate={{ scale, zIndex, opacity, x }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
              >
                <h3 className="text-4xl font-semibold text-black mb-4 px-10 text-center">
                  {item.title}
                </h3>

                {/* LINE + ICON WRAPPER */}
                <div className="relative w-full flex items-center justify-center my-4">
                  {/* Full Horizontal Line */}
                  <div className="absolute w-full h-0.5 bg-white"></div>

                  {/* Icon Circle */}
                  <div className="relative z-10 flex items-center justify-center size-20 rounded-full bg-gray-200 backdrop-blur-md border border-white/40">
                    {item.icon}
                  </div>
                </div>

                <p className="my-5 mx-8 text-xl text-white text-justify">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="relative z-100 flex gap-6 mt-15">
          <button
            onClick={prev}
            className="p-2 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="p-2 bg-[#0D2F5C] text-white rounded-full hover:scale-110 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
