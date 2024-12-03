"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

export default function BusinessForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    jenisUsaha: "", // Now will be a dropdown selection
    namaUsaha: "",
    deskripsiUsaha: "",
    nomorWhatsApp: "",
    ktpNpwp: null,
    fotoUsaha: null
  });

  // State for toast message
  const [toast, setToast] = useState({
    message: "",
    type: "",
    show: false
  });

  const router = useRouter();

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  // Custom toast function
  const showToast = (message, type) => {
    setToast({ message, type, show: true });

    // Automatically hide toast after 5 seconds and redirect
    setTimeout(() => {
      setToast({ message: "", type: "", show: false });
      
      // Only redirect if it was a success toast
      if (type === 'success') {
        router.push('/');
      }
    }, 5000);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object for file upload
    const form = new FormData();
    form.append("jenisUsaha", formData.jenisUsaha);
    form.append("namaUsaha", formData.namaUsaha);
    form.append("deskripsiUsaha", formData.deskripsiUsaha);
    form.append("nomorWhatsApp", formData.nomorWhatsApp);

    // Append files if selected
    if (formData.ktpNpwp) {
      form.append("ktpNpwp", formData.ktpNpwp);
    } else {
      showToast("Please upload KTP/NPWP", "error");
      return;
    }

    if (formData.fotoUsaha) {
      form.append("fotoUsaha", formData.fotoUsaha);
    } else {
      showToast("Please upload Foto Usaha", "error");
      return;
    }

    try {
      // Send data to backend
      const response = await fetch("http://localhost:5000/api/form/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (response.ok) {
        showToast("Form submitted successfully", "success");
      } else {
        showToast(data.message || "Form submission failed", "error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      showToast("Error submitting form", "error");
    }
  };

  return (
    <section className="relative flex flex-col justify-center items-center min-h-screen px-20 py-10 max-md:px-5 mt-16">
      {/* Custom Toast */}
      {toast.show && (
        <div 
          className={`
            fixed top-4 right-4 z-50 px-4 py-2 rounded-md shadow-lg transition-all duration-300
            ${toast.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'}
          `}
        >
          {toast.message}
        </div>
      )}

      <div className="flex flex-col w-full max-w-[707px]">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-6">
          Form Pengisian Usaha
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Jenis Usaha Dropdown */}
          <div className="flex flex-col mt-4 w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="jenisUsaha">
              Jenis Usaha *
            </label>
            <select
              id="jenisUsaha"
              value={formData.jenisUsaha}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 focus:border-blue-500 focus:outline-none"
              required
            >
              <option value=""></option>
              <option value="Event Organizer">Event Organizer</option>
              <option value="Vendor">Vendor</option>
              <option value="Make Up Artist">Make Up Artist</option>
            </select>
          </div>
          {/* Nama Usaha */}
          <div className="flex flex-col mt-6 w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="namaUsaha">
              Nama Usaha *
            </label>
            <input
              type="text"
              id="namaUsaha"
              value={formData.namaUsaha}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Deskripsi Usaha */}
          <div className="flex flex-col mt-6 w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="deskripsiUsaha">
              Deskripsi Usaha *
            </label>
            <textarea
              id="deskripsiUsaha"
              value={formData.deskripsiUsaha}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[100px] text-zinc-500 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Nomor WhatsApp */}
          <div className="flex flex-col mt-6 w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="nomorWhatsApp">
              Nomor WhatsApp *
            </label>
            <input
              type="tel"
              id="nomorWhatsApp"
              value={formData.nomorWhatsApp}
              onChange={handleChange}
              className="flex overflow-hidden gap-2 items-center px-4 mt-3 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* KTP/NPWP Upload */}
          <div className="flex flex-col mt-6 w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="ktpNpwp">
              Upload KTP/NPWP *
            </label>
            <div className="relative w-full mt-3">
              <input
                type="file"
                id="ktpNpwp"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                required
              />
              <div className="flex overflow-hidden gap-2 items-center px-4 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 focus-within:border-blue-500">
                <span className="flex-grow text-zinc-400 truncate">
                  {formData.ktpNpwp ? formData.ktpNpwp.name : 'Choose KTP/NPWP file'}
                </span>
                <div className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-md">Browse</div>
              </div>
            </div>
          </div>

          {/* Foto Usaha Upload */}
          <div className="flex flex-col mt-6 w-full">
            <label className="text-xs font-bold leading-none uppercase text-zinc-500" htmlFor="fotoUsaha">
              Upload Foto Usaha *
            </label>
            <div className="relative w-full mt-3">
              <input
                type="file"
                id="fotoUsaha"
                onChange={handleChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                required
              />
              <div className="flex overflow-hidden gap-2 items-center px-4 w-full text-base leading-loose bg-white rounded-md border border-solid border-stone-300 min-h-[40px] text-zinc-500 focus-within:border-blue-500">
                <span className="flex-grow text-zinc-400 truncate">
                  {formData.fotoUsaha ? formData.fotoUsaha.name : 'Choose Foto Usaha file'}
                </span>
                <div className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-md">Browse</div>
              </div>
            </div>
          </div>

          <Button type="submit" className="my-4">Submit</Button>
        </form>
      </div>
    </section>
  );
}