import React from "react";
import Locations from "../../components/Home/Locations";
import ContactForm from "../../components/Home/ContactForm";
function page() {
  return (
    <div>
      <div className="space-y-4 p-5 bg-linear-to-r from-[#E3F2FD] to-[#FFFFFF]">
        <h1 className="text-4xl highlight-text">
          Skope Centre for Speech, Voice, Swallowing & Hearing{" "}
        </h1>
        <h3 className="text-2xl text-black">
          For booking an appointment please contact us using the information
          below:
        </h3>
      </div>
      <div className="w-full bg-linear-to-r from-[#E3F2FD] to-[#FFFFF] ">
        <div className=" mx-auto space-y-10">
          <Locations />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default page;
