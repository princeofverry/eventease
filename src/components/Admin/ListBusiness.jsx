"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ListBusiness() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupedBusinesses, setGroupedBusinesses] = useState({});
  const router = useRouter();

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

  const BusinessCard = ({ business }) => {
    const [expanded, setExpanded] = useState(false);
  
    const truncateDescription = (desc, maxLength = 100) => {
      if (desc.length <= maxLength) return desc;
      return desc.substring(0, maxLength) + '...';
    };
  
    const toggleDescription = (e) => {
      e.stopPropagation();
      setExpanded(!expanded);
    };
  
    return (
      <div 
        className="border rounded-lg p-4 mb-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow relative flex flex-col"
        onClick={() => router.push(`/business/${business._id}`)}
      >
        {business.fotoUsahaUrl && (
          <div className="mb-4 relative w-full h-48">
            <Image 
              src={business.fotoUsahaUrl} 
              alt={business.namaUsaha} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-md"
            />
          </div>
        )}
        <h2 className="text-xl font-bold mb-2">{business.namaUsaha}</h2>
        <p className="text-gray-600 mb-2">{business.jenisUsaha}</p>
        
        <p className="mb-4 text-left flex-grow">
          {expanded ? business.deskripsiUsaha : truncateDescription(business.deskripsiUsaha)}
          {business.deskripsiUsaha.length > 100 && (
            <button 
              onClick={toggleDescription} 
              className="text-blue-500 hover:underline ml-2 text-sm"
            >
              {expanded ? 'Tampilkan lebih sedikit' : 'Lihat selengkapnya'}
            </button>
          )}
        </p>
  
        <div className="mt-auto">
          <div className="flex items-center">
            <span className="font-medium mr-2">Kontak:</span>
            <a 
              href={`https://wa.me/${business.nomorWhatsApp}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-600 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {business.nomorWhatsApp}
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  if (loading) {
    return <div className="text-center py-4">Memuat daftar usaha...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">Kesalahan: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Daftar Usaha Terverifikasi</h1>
      
      {businesses.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada usaha yang terverifikasi.</p>
      ) : (
        <div>
          {Object.entries(groupedBusinesses).map(([jenisUsaha, businessList]) => (
            <div key={jenisUsaha} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{jenisUsaha}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessList.map(business => (
                  <BusinessCard key={business._id} business={business} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}