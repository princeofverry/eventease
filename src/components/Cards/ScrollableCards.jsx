'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ScrollableCards = ({ type, data }) => {
  const router = useRouter();

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-full overflow-hidden px-12 py-8">
      <div
        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 w-full sm:w-[400px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex"
          >
            <div className="relative w-2/5 h-56 overflow-hidden">
              <Image
                src={item.fotoUsahaUrl}
                alt={item.namaUsaha}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="w-3/5 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.namaUsaha}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {truncateText(item.deskripsiUsaha, 120)}
                </p>
              </div>
              <button
                onClick={() => router.push(`/business/${item._id}`)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors duration-300 ease-in-out"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;