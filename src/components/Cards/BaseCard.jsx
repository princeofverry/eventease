'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation' // Import useRouter
import { Button } from '../ui/button'

const BaseCard = ({ imageUrl, title, description, buttonText, badge, slug, id }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/${slug}/${id}`) // Navigasi ke detail page dengan slug dan id
  }

  return (
    <div className="group min-w-[600px] h-64 overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mx-3 first:ml-0 last:mr-0">
      <div className="flex h-full">
        {/* Image container */}
        <div className="relative w-1/2 h-full">
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt={title}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              fill
              sizes="50vw"
            />
          </div>
          {/* Category badge */}
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
              {badge}
            </span>
          )}
        </div>

        {/* Content container */}
        <div className="flex flex-col justify-between w-1/2 p-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
              {title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3">
              {description}
            </p>
          </div>

          <Button
            onClick={handleClick} // Tambahkan handler untuk navigasi
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            {buttonText || 'Lihat Detail'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BaseCard
