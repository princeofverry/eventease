import Image from 'next/image'
import React from 'react'
import logo from '/public/eventease.png'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-16">
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        {/* Menambahkan class untuk navbar */}
        <ul className="text-black text-xl flex items-center space-x-8">
          <li>Layanan</li>
          <li>Rekomendasi</li>
          <li>Comment</li>
          <li>Contact Us</li>
          <Button>Login</Button>
        </ul>
      </div>
    </>
  )
}

export default Navbar
