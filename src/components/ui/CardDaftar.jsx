import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import abstract from '/public/abstract.png'

const CardDaftar = () => {
  return (
    <>
      <div className='w-full px-12 relative'>
        <Image src={abstract} className='absolute left-0' alt='abstract' height={400} width={300}/>
        <div className='bg-[#043873] rounded-2xl flex py-8 flex-col items-center text-white my-8'>
          <h1 className='font-bold text-6xl my-12'>Daftarkan Jasa & Usaha Anda</h1>
          <p className='text-sm mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, pariatur.</p>
          <Button className="mb-12 bg-[#4F9CF9] py-6">Pelajari Lebih Lanjut →</Button>
        </div>
    </div>
    </>
  )
}

export default CardDaftar