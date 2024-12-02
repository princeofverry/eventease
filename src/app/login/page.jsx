'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import login_icon from '/public/login_icon.png';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); 

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('Login successful: ' + data.message);
        router.push('../dashboard');
      } else {
        const error = await response.json();
        setErrorMessage(error.message);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-4">Login to your account!</h1>
        <h2 className="font-light text-center mb-6">Welcome back!</h2>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <Button className="w-full text-lg py-5" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
      <div className="bg-[#154378] w-1/2 h-full flex justify-center items-center">
        <Image
          alt="login_icon"
          src={login_icon}
          layout="contain"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
