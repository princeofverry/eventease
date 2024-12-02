"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { cardData } from "@/data/cardData";
import {
  ChevronLeft,
  Star,
  MessageCircle,
  MapPin,
  DollarSign,
  Users,
  Check,
} from "lucide-react";

const DetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const { slug, id } = resolvedParams;

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("description");

  const data = cardData[slug]?.find((item) => item.id === parseInt(id));

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/api/placeholder/200/200"
              alt="Not Found"
              width={200}
              height={200}
              className="opacity-60"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Data Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, data yang Anda cari tidak dapat ditemukan.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Kembali ke Halaman Utama</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="mr-2" /> Kembali
        </button>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-8 p-6">
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {data.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 text-yellow-500 mb-6">
                <Star className="w-6 h-6 fill-current" />
                <span className="text-2xl font-bold">4.5</span>
                <span className="text-gray-600 ml-2 text-lg">(15 Ulasan)</span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Lokasi", value: "Jakarta" },
                { icon: DollarSign, label: "Harga", value: "Rp 500.000" },
                { icon: Users, label: "Kapasitas", value: "200 orang" },
                {
                  icon: Check,
                  label: "Fasilitas",
                  value: "AC, Proyektor, Kursi",
                },
              ].map((detail, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3"
                >
                  <detail.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {detail.label}
                    </div>
                    <div className="font-semibold text-gray-800">
                      {detail.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              {["description", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1 py-3 text-center font-semibold transition-colors 
                    ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-800"
                    }
                  `}
                >
                  {tab === "description" ? "Deskripsi" : "Ulasan"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "description" ? (
                <p className="text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              ) : (
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2 text-yellow-500">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="font-bold">4.5</span>
                        </div>
                        <MessageCircle className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-gray-700">
                        Tempat yang bagus untuk acara, fasilitas lengkap dan
                        harga terjangkau.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button */}
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-colors duration-300"
              onClick={() => alert("buka saja wa-nya!")}
            >
              Hubungi Mereka
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
