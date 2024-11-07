import Image from 'next/image'
import React from 'react'
import logo from '/public/eventease.png'

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        {/* Menambahkan class untuk navbar */}
        <ul className="text-black text-4xl flex space-x-4">
          <li>Layanan</li>
          <li>Rekomendasi</li>
          <li>Comment</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
