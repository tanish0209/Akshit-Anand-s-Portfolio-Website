"use client";
import {
  Clock,
  Clock10,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const socials = [
  {
    name: "Instagram",
    icon: <Instagram />,
    url: "https://www.instagram.com/spee.chster/?hl=en",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/akshit-anand-2b851322b/",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    url: "https://facebook.com",
  },
  {
    name: "Gmail",
    icon: <Mail />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=akshitanand97@gmail.com",
  },
];
const cliniclocations = [
  {
    name: "Rajiv Gandhi Cancer Institute & Research Centre, Rohini",
    address:
      "Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini, New Delhi, Delhi, 110085",
    phone: "+91-9980216451, +91-11-47022222",
    availability: "Wednesday, Friday : 12:00 Noon - 4:00 PM",
  },
  {
    name: "Skope Centre for Speech, Voice, Swallowing & Hearing",
    address: "281, Block DG 3, Vikaspuri, Delhi, 110018",
    phone: "+91-9980216451, +91-70115 04587",
    availability: "Monday-Saturday: 10:00 AM - 9:00 PM",
  },
];

function Footer() {
  return (
    <div
      className={`${poppins.className} p-4 sm:p-6 lg:p-10 bg-linear-to-b from-blue-100 to-white`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-20 xl:gap-40">
        {/* Quick Links Section */}
        <div className="w-full">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="text-sm sm:text-base lg:text-lg font-normal space-y-2 sm:space-y-3 lg:space-y-4">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services_page" },
              { label: "Specialities", href: "/specialities" },
              { label: "Locations", href: "/#locations" },
              { label: "Patient Testimonials", href: "/#testimonials" },
              { label: "Gallery", href: "/#gallery" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="cursor-pointer hover:text-blue-900 transition-colors duration-200 inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations Section */}
        <div className="w-full md:col-span-1 lg:col-span-1">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Available Locations
          </h4>
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {cliniclocations.map((item) => {
              return (
                <div key={item.name} className="w-full">
                  <h3 className="text-sm sm:text-sm font-semibold py-1 sm:py-2 text-gray-900">
                    {item.name}
                  </h3>

                  {/* Address */}
                  <div className="text-sm sm:text-sm py-1 flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed text-sm text-gray-600">
                      {item.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="text-sm sm:text-sm py-1 flex items-center gap-2 sm:gap-3">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed text-sm text-gray-600 break-all sm:break-normal">
                      {item.phone}
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="text-sm sm:text-sm py-1 flex items-center gap-2 sm:gap-3">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed text-sm text-gray-600">
                      {item.availability}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="w-full">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
            Social & Contact Links
          </h4>
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:flex-col lg:space-y-3">
            {socials.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5"
                  aria-label={item.name}
                >
                  <span className="text-2xl sm:text-3xl">{item.icon}</span>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {item.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-300">
        <p className="text-center text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} Akshit Anand - Speech, Voice, Swallowing
          & Hearing Specialist. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
