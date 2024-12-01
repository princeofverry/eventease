"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ListBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupedBusinesses, setGroupedBusinesses] = useState({});

  // Fetch verified businesses from backend
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/form/verified-businesses');
        if (!response.ok) {
          throw new Error('Failed to fetch verified businesses');
        }
        const data = await response.json();
        setBusinesses(data);

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

  const BusinessCard = ({ business }) => (
    <div 
      key={business._id} 
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image 
          src={`http://localhost:5000${business.fotoUsahaUrl}`} 
          alt={business.namaUsaha} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{business.namaUsaha}</h3>
        <p className="text-sm text-zinc-500">{business.jenisUsaha}</p>
        <p className="mt-2 text-sm">{business.deskripsiUsaha}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-zinc-600">Kontak: </span>
          <a 
            href={`https://wa.me/${business.nomorWhatsApp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 text-green-600 hover:underline"
          >
            {business.nomorWhatsApp}
          </a>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <div className="p-20 text-center">Loading businesses...</div>;
  }

  if (error) {
    return <div className="p-20 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section className="flex flex-col px-20 min-w-[240px] w-full max-md:px-5 max-md:max-w-full">
      <h2 className="text-xl font-semibold leading-relaxed text-black">Daftar Usaha Terverifikasi</h2>
      
      {businesses.length === 0 ? (
        <p className="mt-6 text-zinc-500">Belum ada usaha yang terverifikasi.</p>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedBusinesses).map(([jenisUsaha, businessList]) => (
            <div key={jenisUsaha} className="mb-6">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                {jenisUsaha}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessList.map(business => (
                  <BusinessCard key={business._id} business={business} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}