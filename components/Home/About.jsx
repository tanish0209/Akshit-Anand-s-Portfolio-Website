import React from "react";

function About() {
  return (
    <div className="border-b border-b-black/10">
      <div className="background-primary m-3 sm:m-5 p-4 sm:p-5 min-h-[90vh] rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] min-h-[80vh] place-content-center gap-8 lg:gap-0">
          <div className="px-4 sm:px-6 lg:pl-10 place-content-center text-center lg:text-left">
            <h5 className="text-xl sm:text-2xl md:text-3xl text-white">Meet</h5>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 mb-1 font-bold">
              AKSHIT ANAND
            </h1>
            <h5 className="text-lg sm:text-xl md:text-2xl subtext mb-2">
              MSc. SLP, BASLP
            </h5>
            <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed">
              Akshit Anand is a compassionate and dedicated specialist with
              expertise in speech, language, swallowing and hearing disorders.
              With a patient-focused approach, he strives to help individuals
              enhance their communication skills and improve their overall
              quality of life.
            </h5>
          </div>

          <div className="relative flex items-center justify-center w-full max-w-[450px] mx-auto aspect-square">
            {/* OUTER GRADIENT RING */}
            <div
              className="absolute w-full h-full rounded-full bg-linear-to-t from-[#FFFFFF] to-[#0D2F5C] p-0.5 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-full h-full rounded-full bg-[#7399c6]"></div>
            </div>

            {/* INNER GRADIENT RING */}
            <div
              className="absolute w-[93.3%] h-[93.3%] rounded-full bg-linear-to-b from-[#FFFFFF] to-[#0D2F5C] p-0.5 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-full h-full rounded-full bg-[#7399c6]"></div>
            </div>

            {/* IMAGE */}
            <img
              src="/akshit-anand.png"
              alt="Profile"
              className="absolute w-[86.6%] h-[86.6%] rounded-full object-cover 
               top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="flex justify-center items-baseline mt-6 lg:mt-0 px-4">
          <ul className="flex sm:flex-row justify-center items-center bg-[#0D2F5C] rounded-full p-3 sm:p-4 shadow-lg backdrop-blur-lg w-full max-w-3xl">
            {[
              { num: "5+", label: "Years of Experience" },
              { num: "1000+", label: "Patients Treated" },
              { num: "3+", label: "Research Publications" },
            ].map((item, index) => (
              <li
                key={index}
                className={`flex flex-col items-center text-white px-6 sm:px-8 md:px-10 py-3 sm:py-0 ${
                  index !== 2 ? "border-b-0 border-r border-white/30" : ""
                } w-full sm:w-auto`}
              >
                <span className="text-lg sm:text-2xl md:text-3xl ">
                  {item.num}
                </span>
                <span className="text-[10px] sm:text-sm md:text-base text-center">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
