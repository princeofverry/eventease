import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import abstract from '/public/abstract.png'

const CardDaftar = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-12 relative'>
      <div className='bg-[#043873] rounded-2xl flex py-8 flex-col items-center text-white my-8 overflow-hidden'>
        {/* Background Image - Positioned Responsively */}
        <div className='absolute left-0 top-0 w-1/4 h-full opacity-80 z-0'>
          <Image
            src={abstract}
            alt='abstract background'
            layout='fill'
            objectFit='cover'
            objectPosition='left center'
          />
        </div>

        {/* Content Container */}
        <div className='relative z-10 text-center px-4 sm:px-8 md:px-12'>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 sm:my-8 md:my-12'>
            Daftarkan Jasa & Usaha Anda
          </h1>
          <p className='text-xs sm:text-sm mb-6 sm:mb-8 max-w-2xl mx-auto'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, pariatur.
          </p>
          <Button className="mb-6 sm:mb-8 md:mb-12 bg-[#4F9CF9] py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-12">
            Pelajari Lebih Lanjut →
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardDaftar