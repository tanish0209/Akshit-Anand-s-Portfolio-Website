import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import SpecialityCard from "../components/Home/Speciality";
import Locations from "../components/Home/Locations";
import Testimonials from "../components/Home/Testimonials";
import Gallery from "../components/Home/Gallery";
import ContactForm from "../components/Home/ContactForm";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <SpecialityCard />
      <section id="locations">
        <Locations />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <ContactForm />
    </div>
  );
}
