import React from "react";

const memberships = [
  "Indian Speech and Hearing Association (ISHA)",
  "Delhi Branch of Indian Speech and Hearing Association (DISHA)",
  "SLPQuest, Bangalore, India",
  "Rehabilitation Council Of India (RCI) - A78605",
];

function Memberships() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 border-b border-b-black/10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 lg:mb-10 font-bold highlight-text">
        Memberships
      </h2>
      <div className="max-w-full mx-auto">
        {memberships.map((item, index) => (
          <div
            key={item}
            className={`py-3 sm:py-4 md:py-5 px-2 sm:px-4
                      highlight-text 
                      text-base sm:text-lg md:text-xl lg:text-2xl 
                      font-medium
                      border-t-2 border-t-gray-300
                      hover:bg-blue-50 hover:px-6 sm:hover:px-8
                      transition-all duration-300
                      ${
                        index === memberships.length - 1
                          ? "border-b-2 border-b-gray-300"
                          : ""
                      }`}
          >
            <div className="flex items-center ">
              <span className="leading-relaxed">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memberships;
