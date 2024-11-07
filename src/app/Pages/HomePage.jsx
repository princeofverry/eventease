import Search from '@/components/ui/search'
import React from 'react'
import circle from '/public/circle.png'
import Image from 'next/image'

const HomePage = () => {
    return (
        <div className='flex flex-row items-center'>
            {/* Kontainer Teks di Kiri */}
            <div className='px-6 w-1/2'>
                <div className='font-bold text-6xl w-full text-left mb-4'>
                    <h1>Mari Sukseskan</h1>
                    <h1><a className='text-[#4F9CF9]'>Event</a> Kamu Bersama</h1>
                    <h1><a className='text-[#4F9CF9]'>EventEase</a></h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni?</p>
                <Search />
            </div>

            {/* Gambar di Kanan */}
            <div className='w-5/12 right-12'>
                <Image
                    alt='circle'
                    src={circle}
                    layout="contain" // Mengisi kontainer secara penuh
                    objectFit="contain" // Menjaga gambar tetap proporsional dan menutupi area
                    priority
                />
            </div>
        </div>
    )
}

export default HomePage
