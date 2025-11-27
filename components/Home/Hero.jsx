import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="min-w-0 w-full">
      <div className="border-b border-b-black/10">
        {/* Hero Section */}
        <div className="h-[90vh] p-5">
          <div className="w-full h-full bg-gray-100 rounded-xl grid grid-cols-2 p-5">
            <div className="place-self-center min-w-0">
              <h4 className="text-5xl subtext">Redefining Excellence In</h4>
              <h2 className="text-[56px] highlight-text">
                Speech Pathology & Deglutology
              </h2>
            </div>
            <div className="place-self-center">Hero</div>
          </div>
        </div>
        {/* Welcome Sub section */}
        <div className="px-5 pb-5">
          <div className="relative rounded-xl overflow-hidden text-center text-white py-6 px-6">
            {/* Background Image */}
            <Image
              src="/Rectangle10.png"
              alt="Background"
              fill
              className="object-cover z-5 opacity-30"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0D2F5C]"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2">
              <h3 className="text-xl ">Welcome to</h3>

              <h1 className="text-2xl md:text-4xl font-bold">
                SKOPE CENTRE FOR SPEECH, VOICE, SWALLOWING & HEARING
              </h1>

              <p className="text-xl  mx-auto">
                At Skope Centre for Speech, Voice, Swallowing & Hearing, we
                provide comprehensive evaluation and personalized therapy for
                speech, language, feeding, swallowing and hearing disorders. Dr.
                Anand is dedicated to restoring clarity, confidence, and
                connection in every patient&apos;s communication journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
