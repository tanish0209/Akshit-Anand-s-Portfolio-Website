import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="border-b border-b-black/10 ">
      <div className="background-primary m-5 p-5 min-h-[90vh] rounded-xl">
        <div className="grid grid-cols-[6fr_4fr] h-[80vh]  place-content-center">
          <div className="pl-10 place-content-center">
            <h5 className="text-3xl text-white">Meet</h5>
            <h1 className="text-6xl mt-2 mb-1 font-bold">AKSHIT ANAND</h1>
            <h5 className="text-2xl subtext mb-2">MSc. SLP, BASLP</h5>
            <h5 className="text-3xl text-white ">
              Akshit Anand is a compassionate and dedicated specialist with
              expertise in speech, language,swallowing and hearing disorders.
              With a patient-focused approach, he strives to help individuals
              enhance their communication skills and improve their overall
              quality of life.
            </h5>
          </div>
          <div className="relative flex items-center justify-center w-[450px] h-[450px] mx-auto">
            {/* OUTER GRADIENT RING */}
            <div
              className="absolute w-[450px] h-[450px] rounded-full bg-linear-to-t from-[#FFFFFF] to-[#0D2F5C] p-0.5 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-full h-full rounded-full bg-[#7399c6]"></div>
            </div>

            {/* INNER GRADIENT RING */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full bg-linear-to-b from-[#FFFFFF] to-[#0D2F5C] p-0.5 
                  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-full h-full rounded-full bg-[#7399c6]"></div>
            </div>

            {/* IMAGE */}
            <Image
              src="/akshit-anand.png"
              alt="Profile"
              width={390}
              height={390}
              className="absolute rounded-full object-cover 
               top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex justify-center items-baseline">
          <ul className="flex justify-center items-center bg-[#0D2F5C] rounded-full p-3 shadow-lg backdrop-blur-lg">
            {[
              { num: "5+", label: "Years of Experience" },
              { num: "1000+", label: "Patients Treated" },
              { num: "3+", label: "Research Publications" },
            ].map((item, index) => (
              <li
                key={index}
                className={`flex flex-col items-center text-white px-10 ${
                  index !== 2 ? "border-r border-white/30" : ""
                }`}
              >
                <span className="text-2xl">{item.num}</span>
                <span className="text-sm ">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
