"use client";
import { useState, useEffect } from "react";
import { Stethoscope, Brain, Baby, AudioWaveform } from "lucide-react";

const specialties = [
  {
    title: "Fibreoptic Endoscopic Evaluation of Swallowing (FEES)",
    desc: "Our clinic offers advanced FEES assessment to accurately evaluate swallowing function using a thin flexible endoscope. This minimally invasive procedure provides real-time visualization of the throat during swallowing, helping us identify aspiration risks, tailor treatment plans, and ensure safe feeding strategies for patients across all ages.",
    icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
    bg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
  },
  {
    title: "VitalStim Therapy (VST)",
    desc: "We provide VitalStim Therapy, an evidence-based neuromuscular electrical stimulation (NMES) technique designed to strengthen the swallowing muscles. Delivered by certified therapists, VST enhances muscle coordination, improves swallow safety, and supports faster rehabilitation for individuals with dysphagia.",
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
    bg: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
  },
  {
    title: "Neonatal & Pediatric Feeding Intervention",
    desc: "Our clinic specializes in feeding intervention for newborns and children, addressing challenges such as poor suck,swallow coordination, bottle or breast aversion, texture progression issues, and developmental feeding delays. Using a family-centred approach, we create individualized plans to promote safe feeding, efficient nutrition intake, and healthy oral-motor development.",
    icon: <Baby className="w-6 h-6 sm:w-8 sm:h-8" />,
    bg: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
  },
  {
    title: "Voice & Swallow Rehabilitation",
    desc: "We offer comprehensive voice and swallow rehabilitation for patients with voice disorders, post-surgical changes, neurological conditions, and age-related issues. Our therapy programs combine evidence-based voice techniques, swallow exercises, and customized home plans to restore vocal quality, enhance airway protection, and improve overall quality of life.",
    icon: <AudioWaveform className="w-6 h-6 sm:w-8 sm:h-8" />,
    bg: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
  },
];

export default function SpecialityCard() {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = (i) => {
    if (isMobile) {
      // On mobile, toggle clicked state
      setClicked(clicked === i ? null : i);
    } else {
      // On desktop, use hover
      setHovered(i);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHovered(null);
    }
  };

  return (
    <div className="w-full">
      <div className="border-b border-b-black/10 bg-gradient-to-r from-blue-50 to-white p-3 sm:p-5">
        <div className="flex flex-col pb-3 sm:pb-5 items-end px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl highlight-text ">
            Our Speciality
          </h2>
          <h5 className="text-lg sm:text-xl lg:text-2xl subtext">
            Professional Expertise
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 w-full">
          {specialties.map((item, i) => {
            const isActive = isMobile ? clicked === i : hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => !isMobile && handleInteraction(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => isMobile && handleInteraction(i)}
                className="relative w-full h-[250px] sm:h-[270px] md:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* FLIP WRAPPER */}
                <div
                  className="absolute inset-0 transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isActive ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT SIDE */}
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="w-full h-full bg-[#0D195C]/50 mix-blend-multiply absolute inset-0 z-10"></div>
                    <img
                      src={item.bg}
                      alt="background"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 p-2 sm:p-3 flex items-center z-50">
                      {/* LEFT COLUMN */}
                      <div className="relative flex flex-col items-center justify-center w-16 sm:w-20 md:w-[120px] h-full">
                        {/* Line */}
                        <div className="absolute h-full w-0.5 bg-[#A6D7F8]"></div>

                        {/* Icon */}
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#A6D7F8] backdrop-blur-md border border-white/40">
                          {item.icon}
                        </div>
                      </div>

                      {/* TITLE */}
                      <div className="flex-1 m-3 sm:m-4 md:m-6">
                        <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                          {item.title}
                        </h3>

                        {/* Click to Flip indicator for mobile */}
                        {isMobile && (
                          <p className="text-[#A6D7F8] text-xs sm:text-sm flex items-center">
                            Click to Flip
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="w-full h-full bg-[#0D195C]/50 mix-blend-multiply absolute inset-0 z-10"></div>
                    <img
                      src={item.bg}
                      alt="background"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 p-2 sm:p-3 flex items-center z-50">
                      {/* LEFT COLUMN */}
                      <div className="relative flex flex-col items-center justify-center w-16 sm:w-20 md:w-[120px] h-full">
                        {/* Line */}
                        <div className="absolute h-full w-0.5 bg-[#A6D7F8]"></div>

                        {/* Icon */}
                        <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#A6D7F8] backdrop-blur-md border border-white/40">
                          {item.icon}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex-1 m-2 sm:m-3 md:m-4 p-2">
                        <p className="text-white text-justify text-sm md:text-base lg:text-lg xl:text-2xl leading-snug">
                          {item.desc}
                        </p>

                        {/* Click again to flip back indicator for mobile */}
                        {isMobile && (
                          <p className="text-[#A6D7F8] text-xs mt-2">
                            Click to flip back
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
