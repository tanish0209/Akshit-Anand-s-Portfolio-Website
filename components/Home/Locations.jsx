import { Clock10, MapPin, Phone } from "lucide-react";
import React from "react";

const cliniclocations = [
  {
    name: "Rajiv Gandhi Cancer Institute & Research Centre, Rohini",
    address:
      "Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini,New Delhi, Delhi, 110085",
    phone: "+91-9980216451, +91-11-47022222",
    availability: "Wednesday, Friday : 12:00 Noon - 4:00 PM",
    location: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111971.45451372024!2d77.02916789621474!3d28.716319631620394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f9f5ef8ff1%3A0x57345a618ab5b2e7!2sRajiv%20Gandhi%20Cancer%20Institute%20%26%20Research%20Centre%2C%20Rohini%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1764099694092!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    name: "Skope Centre for Speech, Voice, Swallowing & Hearing",
    address: "281, Block DG 3, Vikaspuri, Delhi, 110018",
    phone: "+91-9980216451, +91-70115 04587",
    availability: "Monday-Saturday: 10:00 AM - 9:00 PM",
    location: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112054.13471234102!2d76.98350679321263!3d28.639000474752024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05592b0b6d79%3A0xfd3e897ef4dba51c!2sSKOPE%20-%20Centre%20for%20Speech%20and%20Swallowing%20I%20Akshit%20Anand%20(Speech%20and%20Swallowing%20Specialist)!5e0!3m2!1sen!2sin!4v1764099588763!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];
function Locations() {
  return (
    <div className="w-full border-b border-b-black/10 p-5">
      <div className="min-h-[90vh] rounded-2xl bg-gray-200 p-5">
        <h3 className="text-4xl highlight-text place-self-center">
          Available Locations
        </h3>
        <div className="m-5 grid grid-cols-2 gap-5">
          {cliniclocations.map((item) => {
            return (
              <div
                key={item.name}
                className="w-full rounded-2xl background-primary p-5 "
              >
                <div className="w-full relative pb-[40%] rounded-xl overflow-hidden">
                  {item.location}{" "}
                </div>
                <h3 className="text-3xl py-2">{item.name}</h3>
                <div className="text-2xl py-1 flex items-center gap-3 min-h-20">
                  <MapPin className="size-6 text-black shrink-0 " />
                  <p className="leading-relaxed">{item.address}</p>
                </div>

                <div className="text-2xl py-1 flex items-center gap-3 min-h-10">
                  <Phone className="size-6 text-black shrink-0" />
                  <p className="leading-relaxed">{item.phone}</p>
                </div>

                <div className="text-2xl py-1 flex items-center gap-3 min-h-10">
                  <Clock10 className="size-6 text-black shrink-0" />
                  <p className="leading-relaxed">{item.availability}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Locations;
