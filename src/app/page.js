"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "@/app/Pages/HomePage";
import ScrollableCards from "@/components/Cards/ScrollableCards";
import Testimonial from "@/components/Cards/Testimonial";
import CardDaftar from "@/components/ui/CardDaftar";
import Contact from "@/components/ui/Contact";
// import EventOrganizer from "@/components/ui/EventOrganizer";
import { cardData } from "@/data/cardData";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi dari aosnya
      once: true, // Cuma bisa sekali aja
    });
  }, []);

  return (
    <>
      <HomePage />
      <div data-aos="fade-up">
        <CardDaftar />
      </div>
      {/* <EventOrganizer /> */}
      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold px-12">Event Organizer</h2>
        <ScrollableCards type="eo" data={cardData.eo} />
      </section>

      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold px-12">Vendor</h2>
        <ScrollableCards type="vendor" data={cardData.vendor} />
      </section>

      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold px-12">Makeup Artist</h2>
        <ScrollableCards type="mua" data={cardData.mua} />
      </section>

      <section data-aos="fade-up">
        <Testimonial />
      </section>

      <section data-aos="fade-up">
        <Contact />
      </section>
    </>
  );
}
