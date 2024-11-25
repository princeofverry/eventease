import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Star } from 'lucide-react';

const Testimonial = () => {
    const testimonials = [
        {
            image: "https://xsgames.co/randomusers/avatar.php?g=female",
            name: "Sarah Johnson",
            position: "Wedding Planner",
            text: "EventEase sangat membantu saya dalam mengorganisir pernikahan klien saya. Platform yang user-friendly dan fitur yang lengkap membuat pekerjaan jadi lebih efisien.",
        },
        {
            image: "https://xsgames.co/randomusers/avatar.php?g=male",
            name: "Michael Chen",
            position: "Corporate Event Manager",
            text: "Sebagai event manager, saya telah menggunakan berbagai platform. EventEase adalah yang terbaik dalam hal kemudahan penggunaan dan kelengkapan fitur.",
        },
        {
            image: "https://xsgames.co/randomusers/avatar.php?g=female",
            name: "Amanda Putri",
            position: "Birthday Party Organizer",
            text: "Fitur tracking dan management EventEase sangat membantu saya mengatur acara ulang tahun. Klien saya selalu puas dengan hasilnya!",
        }
    ];

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className='font-bold text-4xl text-center mb-12'>What they said?</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Optimized Image */}
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={48} // Set width for image
                                height={48} // Set height for image
                                className="rounded-full object-cover"
                            />
                            {/* Testimonial Text */}
                            <p className="text-gray-600 mb-6">
                                &quot;{testimonial.text}&quot; {/* Escape quotes */}
                            </p>

                            {/* Profile Section */}
                            <div className="flex items-center gap-4">
                                <div>
                                    <h3 className="font-semibold text-lg">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-500">
                                        {testimonial.position}
                                    </p>
                                </div>
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
