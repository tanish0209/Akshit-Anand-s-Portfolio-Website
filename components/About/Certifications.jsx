import React from "react";
const certifications = [
  "Certified VitalStim Therapist, Envois, USA - 2021",
  "Certified Laryngeal Voice Restoration Expert - Tata Memorial Hospital, Mumbai - 2022 ",
  " Certified for Fibre optic Endoscopic Evaluation of Swallowing - SLPQuest Bangalore - 2023",
  " Certified for Videofluoroscopy Swallow Study - Tata Memorial Hospital, Mumbai -2024",
  "Manual Therapy Expert - Waltz Fritz, USA -2025",
];
function Certifications() {
  return (
    <div className="p-15 border-b border-b-black/10">
      <h2 className="text-4xl mb-10">Certifications</h2>

      <div className="grid grid-cols-2 gap-8 max-w-6xl place-self-center">
        {certifications.map((item, index) => (
          <div
            key={item}
            className={`bg-white border border-[#B3C8E1] highlight-text text-2xl hover:scale-105 duration-300 px-10 py-4 rounded-full w-full max-w-132 place-content-center text-center mx-auto
        ${index === certifications.length - 1 ? "col-span-2" : ""}
      `}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
