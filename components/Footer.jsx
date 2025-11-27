import { Clock10, MapPin, Phone } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const socials = [
  "/instagram.png",
  "/linked_in.png",
  "/whatsapp.png",
  "/facebook.png",
  "/gmail.png",
];
const cliniclocations = [
  {
    name: "Rajiv Gandhi Cancer Institute & Research Centre, Rohini",
    address:
      "Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini,New Delhi, Delhi, 110085",
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
      className={`${poppins.className} p-10 bg-linear-to-b from-[#E3F2FD] to-[#FFFFFF] grid grid-cols-3 gap-40`}
    >
      <div className="">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="text-lg font-normal mt-2 space-y-4">
          <li>
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="/services_page" className="cursor-pointer">
              Services
            </Link>
          </li>
          <li>
            <Link href="/specialities" className="cursor-pointer">
              Specialities
            </Link>
          </li>
          <li>
            <Link href="/#locations" className="cursor-pointer">
              Locations
            </Link>
          </li>
          <li>
            <Link href="/#testimonials" className="cursor-pointer">
              Patient Testimonials
            </Link>
          </li>
          <li>
            <Link href="/#gallery" className="cursor-pointer">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Available locations</h4>
        <div className=" grid grid-rows-2">
          {cliniclocations.map((item) => {
            return (
              <div key={item.name} className="w-full pb-5 ">
                <h3 className="text-sm font-semibold py-2">{item.name}</h3>
                <div className="text-sm py-1 flex items-center gap-3">
                  <MapPin className="size-4 text-black shrink-0 " />
                  <p className="leading-relaxed">{item.address}</p>
                </div>

                <div className="text-sm py-1 flex items-center gap-3">
                  <Phone className="size-4 text-black shrink-0" />
                  <p className="leading-relaxed">{item.phone}</p>
                </div>

                <div className="text-sm py-1 flex items-center gap-3">
                  <Clock10 className="size-4 text-black shrink-0" />
                  <p className="leading-relaxed">{item.availability}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold">Social & Contact Links</h4>
        {socials.map((item) => {
          return (
            <Image
              key={item}
              src={item}
              height={60}
              width={100}
              className="mt-10"
              alt="Social Links"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
