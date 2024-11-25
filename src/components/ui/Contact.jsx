import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Instagram Card */}
                <div className="bg-[#043873] p-8 rounded-lg text-white text-center">
                    <Instagram className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="uppercase mb-2">Instagram</h3>
                    <p>@eventease.id</p>
                </div>

                {/* Phone Card */}
                <div className="bg-[#043873] p-8 rounded-lg text-white text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="uppercase mb-2">Contact Us</h3>
                    <p>+62 234 567 890</p>
                </div>

                {/* Email Card */}
                <div className="bg-[#043873] p-8 rounded-lg text-white text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="uppercase mb-2">Email</h3>
                    <p>hello@3legant.com</p>
                </div>
            </div>

            {/* Contact Form and Map Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">FULL NAME</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043873]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">EMAIL ADDRESS</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043873]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">MESSAGE</label>
                        <textarea
                            placeholder="Your message"
                            rows={6}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#043873]"
                        />
                    </div>
                    <button className="bg-[#4790FF] text-white py-3 px-6 rounded-lg hover:bg-[#043873] transition-colors duration-300">
                        Send Message
                    </button>
                </div>

                {/* Map */}
                <div className="h-[400px] rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.087276084186!2d110.42526811477666!3d-7.050114994899717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cde153b4035%3A0x282d01ccfb6be764!2sTeknik%20Komputer%20UNDIP%2C%20Tembalang%2C%20Semarang%2C%20Jawa%20Tengah%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1637764744777!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;