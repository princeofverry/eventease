import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#043873] text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">EventEase</h2>
                        <p className="text-gray-300">Platform manajemen event terpercaya untuk mewujudkan acara impian Anda.</p>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                            <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                            <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Beranda</a></li>
                            <li><a href="#" className="hover:text-gray-300">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-gray-300">Layanan</a></li>
                            <li><a href="#" className="hover:text-gray-300">Event</a></li>
                            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Layanan Kami</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Event Planning</a></li>
                            <li><a href="#" className="hover:text-gray-300">Venue Booking</a></li>
                            <li><a href="#" className="hover:text-gray-300">Wedding Organization</a></li>
                            <li><a href="#" className="hover:text-gray-300">Corporate Events</a></li>
                            <li><a href="#" className="hover:text-gray-300">Virtual Events</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Hubungi Kami</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5" />
                                <span>Jl. Event No. 123, Jakarta</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5" />
                                <span>+62 123 4567 890</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5" />
                                <span>info@eventease.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} EventEase. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;