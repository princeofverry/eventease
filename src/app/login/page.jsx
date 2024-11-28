import { Button } from '@/components/ui/button'
import Image from 'next/image'
import login_icon from '/public/login_icon.png'

const Page = () => {
  return (
    <div className="flex flex-row h-screen w-full">
     {/* Bagian Kiri */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-4">
          Login to your account!
        </h1>
        <h2 className="font-light text-center mb-6">
          Welcome back!
        </h2>
        <div className="flex flex-col space-y-6 w-full max-w-sm mx-auto mt-8">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button className="w-full text-lg py-5">Login</Button>
          
      </div>

      </div>
      {/* Bagian Kanan */}
      <div className="bg-[#154378] w-1/2 h-full flex justify-center items-center">
        <Image
          alt='login_icon'
          src={login_icon}
          layout="contain" // Mengisi kontainer secara penuh
          objectFit="contain" // Menjaga gambar tetap proporsional dan menutupi area
          priority
        />
      </div>
    </div>

  )
}

export default Page