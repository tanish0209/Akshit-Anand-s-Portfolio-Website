"use client";
import { useState } from "react";
import Image from "next/image";
import { AudioWaveform, Baby, Brain, Stethoscope } from "lucide-react";

const specialties = [
  {
    title: "Fibreoptic Endoscopic Evaluation of Swallowing (FEES)",
    desc: "Our clinic offers advanced FEES assessment to accurately evaluate swallowing function using a thin flexible endoscope. This minimally invasive procedure provides real-time visualization of the throat during swallowing, helping us identify aspiration risks, tailor treatment plans, and ensure safe feeding strategies for patients across all ages.",
    icon: <Stethoscope className="size-8" />,
    bg: "/img1.avif",
  },
  {
    title: "VitalStim Therapy (VST)",
    desc: "We provide VitalStim Therapy, an evidence-based neuromuscular electrical stimulation (NMES) technique designed to strengthen the swallowing muscles. Delivered by certified therapists, VST enhances muscle coordination, improves swallow safety, and supports faster rehabilitation for individuals with dysphagia.",
    icon: <Brain className="size-8" />,
    bg: "/img1.avif",
  },
  {
    title: "Neonatal & Pediatric Feeding Intervention",
    desc: "Our clinic specializes in feeding intervention for newborns and children, addressing challenges such as poor suck,swallow coordination, bottle or breast aversion, texture progression issues, and developmental feeding delays. Using a family-centred approach, we create individualized plans to promote safe feeding, efficient nutrition intake, and healthy oral-motor development.",
    icon: <Baby className="size-8" />,
    bg: "/img1.avif",
  },
  {
    title: "Voice & Swallow Rehabilitation",
    desc: "We offer comprehensive voice and swallow rehabilitation for patients with voice disorders, post-surgical changes, neurological conditions, and age-related issues. Our therapy programs combine evidence-based voice techniques, swallow exercises, and customized home plans to restore vocal quality, enhance airway protection, and improve overall quality of life.",
    icon: <AudioWaveform className="size-8" />,
    bg: "/img1.avif",
  },
];

export default function SpecialityCard() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full">
      <div className="border-b border-b-black/10 bg-linear-to-r from-[#E3F6FD] to-[#FFFFFF] p-5">
        <div className="flex flex-col pb-5 items-end">
          <h2 className="text-5xl highlight-text">Our Speciality</h2>
          <h5 className="text-2xl subtext">Professional Expertise</h5>
        </div>
        <div className="grid grid-cols-2 gap-10 w-full">
          {specialties.map((item, i) => {
            const isActive = hovered === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative w-full h-[250px] rounded-3xl overflow-hidden cursor-pointer [perspective-distant"
              >
                {/* FLIP WRAPPER */}
                <div
                  className={`absolute inset-0 transition-transform duration-700 transform-3d ${
                    isActive ? "transform-[rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden">
                    <div className="w-full h-full bg-[#0D195C]/50 mix-blend-multiply absolute inset-0 z-10"></div>
                    <Image
                      src={item.bg}
                      fill
                      alt="background"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 p-2 flex items-center z-50">
                      {/* LEFT COLUMN */}
                      <div className="relative flex flex-col items-center justify-center w-[120px] h-full">
                        {/* Line */}
                        <div className="absolute h-full w-0.5 bg-[#A6D7F8]"></div>

                        {/* Icon */}
                        <div className="relative z-10 flex items-center justify-center size-20 rounded-full bg-[#A6D7F8] backdrop-blur-md border border-white/40">
                          {item.icon}
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-white text-4xl font-bold ml-6 w-[70%]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden transform-[rotateY(180deg)] backface-hidden">
                    <div className="w-full h-full bg-[#0D195C]/50 mix-blend-multiply absolute inset-0 z-10"></div>
                    <Image
                      src={item.bg}
                      fill
                      alt="background"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 p-2 flex items-center z-50">
                      {/* LEFT COLUMN */}
                      <div className="relative flex flex-col items-center justify-center w-[120px] h-full">
                        {/* Line */}
                        <div className="absolute h-full w-0.5 bg-[#A6D7F8]"></div>

                        {/* Icon */}
                        <div className="relative z-10 flex items-center justify-center size-20 rounded-full bg-[#A6D7F8] backdrop-blur-md border border-white/40">
                          {item.icon}
                        </div>
                      </div>

                      {/* Description */}
                      <h3 className="text-white text-xl ml-4 w-[80%]">
                        {item.desc}
                      </h3>
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
