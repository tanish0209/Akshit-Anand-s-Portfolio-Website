import React from "react";

const certifications = [
  "Certified VitalStim Therapist, Envois, USA - 2021",
  "Certified Laryngeal Voice Restoration Expert - Tata Memorial Hospital, Mumbai - 2022",
  "Certified for Fibre optic Endoscopic Evaluation of Swallowing - SLPQuest Bangalore - 2023",
  "Certified for Videofluoroscopy Swallow Study - Tata Memorial Hospital, Mumbai - 2024",
  "Manual Therapy Expert - Waltz Fritz, USA - 2025",
];

function Certifications() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 border-b border-b-black/10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10 highlight-text">
        Certifications
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {certifications.map((item, index) => (
          <div
            key={item}
            className={`bg-white border-2 border-[#B3C8E1] highlight-text 
                      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
                      hover:scale-105 hover:shadow-lg hover:border-[#0D2F5C]
                      transition-all duration-300 
                      px-4 sm:px-6 md:px-8 lg:px-10 
                      py-3 sm:py-4 md:py-5
                      rounded-2xl sm:rounded-3xl lg:rounded-full 
                      w-full max-w-132 flex place-items-center  justify-center text-center
                      shadow-sm
                      ${
                        index === certifications.length - 1
                          ? "lg:col-span-2 lg:place-self-center"
                          : ""
                      }
            `}
          >
            <span className="leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
