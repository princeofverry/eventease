"use client";
import React, { useState, useEffect } from "react";
import { Check, X } from 'lucide-react';

export default function RequestPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/form/submissions');
        if (!response.ok) {
          throw new Error('Failed to fetch submissions');
        }
        const data = await response.json();
        setSubmissions(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleVerification = async (id, isVerified) => {
    try {
      const response = await fetch(`http://localhost:5000/api/form/verify/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isVerified })
      });

      if (!response.ok) {
        throw new Error('Failed to update verification status');
      }
      setSubmissions(submissions.filter(submission => submission._id !== id));
    } catch (err) {
      console.error('Verification error:', err);
    }
  };

  if (loading) {
    return <div className="p-20 text-center">Loading submissions...</div>;
  }

  if (error) {
    return <div className="p-20 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section className="flex flex-col px-20 min-w-[240px] w-full max-md:px-5 max-md:max-w-full">
      <h2 className="text-xl font-semibold leading-relaxed text-black">Request Verifikasi Usaha</h2>
      
      {submissions.length === 0 ? (
        <p className="mt-6 text-zinc-500">Tidak ada submisi usaha yang perlu diverifikasi.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Jenis Usaha</th>
                <th className="p-3 text-left">Nama Usaha</th>
                <th className="p-3 text-left">Deskripsi</th>
                <th className="p-3 text-left">Nomor WhatsApp</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission._id} className="border-b">
                  <td className="p-3">{submission.jenisUsaha}</td>
                  <td className="p-3">{submission.namaUsaha}</td>
                  <td className="p-3 max-w-[200px] truncate">{submission.deskripsiUsaha}</td>
                  <td className="p-3">{submission.nomorWhatsApp}</td>
                  <td className="p-3 flex justify-center space-x-2">
                    <button 
                      onClick={() => handleVerification(submission._id, true)}
                      className="text-green-500 hover:bg-green-100 p-2 rounded-full"
                      title="Terima"
                    >
                      <Check size={24} />
                    </button>
                    <button 
                      onClick={() => handleVerification(submission._id, false)}
                      className="text-red-500 hover:bg-red-100 p-2 rounded-full"
                      title="Tolak"
                    >
                      <X size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}