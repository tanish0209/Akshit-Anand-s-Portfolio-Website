import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <section className="bg-white h-16 border-b w-full px-5 border-b-black/10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <h2 className="text-3xl">Akshit Anand</h2>
          <h5 className="text-base highlight-text">
            Speech Language Pathologist | Swallowing Specialist | Audiologist
          </h5>
        </div>
        <ul className="flex items-center gap-8 text-xl subtext">
          <Link
            href="/"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 
hover:before:w-full"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 
hover:before:w-full"
          >
            About
          </Link>
          <Link
            href="/services_page"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 
hover:before:w-full"
          >
            Services
          </Link>
          <Link
            href="/specialities"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 
hover:before:w-full"
          >
            Specialities
          </Link>
          <Link
            href="/#locations"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 
hover:before:w-full"
          >
            Locations
          </Link>
          <Link
            href="/#testimonials"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 scroll-smooth
hover:before:w-full"
          >
            Patient Testimonials
          </Link>
          <Link
            href="/#gallery"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 scroll-smooth
hover:before:w-full"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="relative cursor-pointer hover:text-black transition
before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 
before:bg-blue-900 before:transition-all before:duration-300 scroll-smooth
hover:before:w-full"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </section>
  );
}
