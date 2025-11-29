import { Clock10, MapPin, Phone } from "lucide-react";

const cliniclocations = [
  {
    name: "Rajiv Gandhi Cancer Institute & Research Centre, Rohini",
    address:
      "Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini, New Delhi, Delhi, 110085",
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
    <div className="w-full border-b border-b-black/10 p-3 sm:p-5">
      <div className="min-h-[90vh] rounded-xl sm:rounded-2xl bg-gray-200 p-3 sm:p-5">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl highlight-text text-center mb-4 sm:mb-2 ">
          Available Locations
        </h3>
        <div className="mt-3 sm:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {cliniclocations.map((item) => {
            return (
              <div
                key={item.name}
                className="w-full rounded-xl sm:rounded-2xl background-primary p-4 sm:p-5 shadow-lg"
              >
                {/* Map Container */}
                <div className="w-full relative pb-[50%] sm:pb-[45%] lg:pb-[40%] rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                  {item.location}
                </div>

                {/* Clinic Name */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl py-2 sm:py-3  leading-tight">
                  {item.name}
                </h3>

                {/* Address */}
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl py-2 flex items-center gap-2 sm:gap-3 min-h-16 sm:min-h-20">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0 mt-1" />
                  <p className="leading-relaxed ">{item.address}</p>
                </div>

                {/* Phone */}
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl py-2 flex items-center gap-2 sm:gap-3 min-h-10">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0 mt-1" />
                  <p className="leading-relaxed  break-all sm:break-normal">
                    {item.phone}
                  </p>
                </div>

                {/* Availability */}
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl py-2 flex items-center gap-2 sm:gap-3 min-h-10">
                  <Clock10 className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0 mt-1" />
                  <p className="leading-relaxed ">{item.availability}</p>
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
