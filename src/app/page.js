"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "@/app/Pages/HomePage";
import ScrollableCards from "@/components/Cards/ScrollableCards";
import Testimonial from "@/components/Cards/Testimonial";
import CardDaftar from "@/components/ui/CardDaftar";
import Contact from "@/components/ui/Contact";

export default function Home() {
  const [groupedBusinesses, setGroupedBusinesses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch verified businesses
    const fetchBusinesses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/form/verified-businesses");
        if (!response.ok) {
          throw new Error("Failed to fetch verified businesses");
        }
        const data = await response.json();

        // Group businesses by type
        const grouped = data.reduce((acc, business) => {
          if (!acc[business.jenisUsaha]) {
            acc[business.jenisUsaha] = [];
          }
          acc[business.jenisUsaha].push(business);
          return acc;
        }, {});

        setGroupedBusinesses(grouped);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  // Loading and error handling
  if (loading) {
    return <div className="text-center py-4">Loading businesses...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  return (
    <>
      <HomePage />
      <div data-aos="fade-up">
        <CardDaftar />
      </div>

      {/* Render grouped businesses */}
      {Object.entries(groupedBusinesses).map(([jenisUsaha, businessList]) => (
        <section key={jenisUsaha} data-aos="fade-up" className="mb-8">
          <h2 className="text-2xl font-bold px-12">Rekomendasi {jenisUsaha}</h2>
          <ScrollableCards type={jenisUsaha} data={businessList} />
        </section>
      ))}

      <section data-aos="fade-up">
        <Testimonial />
      </section>

      <section data-aos="fade-up">
        <Contact />
      </section>
    </>
  );
}