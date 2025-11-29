import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="min-w-0 w-full">
      <div className="border-b border-b-black/10">
        {/* Hero Section */}
        <div className="h-[90vh] p-3 sm:p-5">
          <div className="w-full h-full bg-gray-100 rounded-xl grid grid-cols-1 lg:grid-cols-2 p-4 sm:p-5 gap-4">
            <div className="place-self-center min-w-0 text-center lg:text-left">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl subtext">
                Redefining Excellence In
              </h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] highlight-text mt-2">
                Speech Pathology & Deglutology
              </h2>
            </div>
            <div className="place-self-center">Hero</div>
          </div>
        </div>
        {/* Welcome Sub section */}
        <div className="px-3 sm:px-5 pb-3 sm:pb-5">
          <div className="relative rounded-xl overflow-hidden text-center text-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
            {/* Background Image */}
            <Image
              src="/Rectangle10.png"
              width={100}
              height={100}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-5 opacity-30"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0D2F5C]"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-2 sm:gap-3 md:gap-4">
              <h3 className="text-base sm:text-lg md:text-xl">Welcome to</h3>

              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold px-2 sm:px-4">
                SKOPE CENTRE FOR SPEECH, VOICE, SWALLOWING & HEARING
              </h1>

              <p className="text-xs sm:text-base md:text-lg lg:text-xl mx-auto max-w-6xl px-2 sm:px-4">
                At Skope Centre for Speech, Voice, Swallowing & Hearing, we
                provide comprehensive evaluation and personalized therapy for
                speech, language, feeding, swallowing and hearing disorders.
                Akshit Anand is dedicated to restoring clarity, confidence, and
                connection in every patient&apos;s communication journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
