"use client";
import React, { useState, useEffect } from "react";
import { Check, X, Eye } from 'lucide-react';
import Image from "next/image";

export default function RequestPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

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

  const handleViewDetails = (submission) => {
    setSelectedSubmission(submission);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
  };

  const DetailsModal = ({ submission, onClose }) => {
    if (!submission) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{submission.namaUsaha}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-600 hover:text-gray-900"
            >
              <X size={30} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informasi Usaha</h3>
              <div className="space-y-3">
                <p><strong>Jenis Usaha:</strong> {submission.jenisUsaha}</p>
                <p><strong>Nama Usaha:</strong> {submission.namaUsaha}</p>
                <p><strong>Deskripsi:</strong> {submission.deskripsiUsaha}</p>
                <p><strong>Nomor WhatsApp:</strong> {submission.nomorWhatsApp}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Dokumen</h3>
              <div className="grid grid-cols-2 gap-4">
                {submission.ktpNpwpUrl && (
                  <div>
                    <p className="mb-2 font-medium">Foto KTP/NPWP</p>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image 
                        src={submission.ktpNpwpUrl} 
                        alt="Foto KTP/NPWP" 
                        layout="fill" 
                        objectFit="cover" 
                        className="hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                )}
                {submission.fotoUsahaUrl && (
                  <div>
                    <p className="mb-2 font-medium">Foto Usaha</p>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image 
                        src={submission.fotoUsahaUrl} 
                        alt="Foto Usaha" 
                        layout="fill" 
                        objectFit="cover" 
                        className="hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button 
              onClick={() => {
                handleVerification(submission._id, true);
                onClose();
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
            >
              <Check size={20} className="mr-2" /> Terima
            </button>
            <button 
              onClick={() => {
                handleVerification(submission._id, false);
                onClose();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
            >
              <X size={20} className="mr-2" /> Tolak
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div className="p-20 text-center">Memuat submisi...</div>;
  }

  if (error) {
    return <div className="p-20 text-center text-red-500">Kesalahan: {error}</div>;
  }

  return (
    <section className="flex flex-col px-10 py-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Request Verifikasi Usaha</h2>
      
      {submissions.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Tidak ada submisi usaha yang perlu diverifikasi.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Usaha</th>
                <th className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Usaha</th>
                <th className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
                <th className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nomor WhatsApp</th>
                <th className="p-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission._id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3">{submission.jenisUsaha}</td>
                  <td className="p-3">{submission.namaUsaha}</td>
                  <td className="p-3 max-w-[200px] truncate">{submission.deskripsiUsaha}</td>
                  <td className="p-3">{submission.nomorWhatsApp}</td>
                  <td className="p-3 flex justify-center space-x-2">
                    <button 
                      onClick={() => handleViewDetails(submission)}
                      className="text-blue-500 hover:bg-blue-100 p-2 rounded-full"
                      title="Lihat Detail"
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      onClick={() => handleVerification(submission._id, true)}
                      className="text-green-500 hover:bg-green-100 p-2 rounded-full"
                      title="Terima"
                    >
                      <Check size={20} />
                    </button>
                    <button 
                      onClick={() => handleVerification(submission._id, false)}
                      className="text-red-500 hover:bg-red-100 p-2 rounded-full"
                      title="Tolak"
                    >
                      <X size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedSubmission && (
        <DetailsModal 
          submission={selectedSubmission} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}