'use clients'
import React from 'react'
import Image from 'next/image'
import { Button } from './button'

const Card = ({ imageUrl, title, description }) => {
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
          
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Lihat Detail
          </Button>
        </div>
      </div>
    </div>
  )
}

const ScrollableCards = () => {
  const cards = [
    {
      imageUrl: "/dummycard.png",
      title: "Event Organizer Mantap 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maiores dignissimos nisi ut modi provident asperiores magni tenetur illo nostrum?"
    },
    {
      imageUrl: "/dummycard.png",
      title: "Event Organizer Mantap 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maiores dignissimos nisi ut modi provident asperiores magni tenetur illo nostrum?"
    },
    {
      imageUrl: "/dummycard.png",
      title: "Event Organizer Mantap 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maiores dignissimos nisi ut modi provident asperiores magni tenetur illo nostrum?"
    },
    {
      imageUrl: "/dummycard.png",
      title: "Event Organizer Mantap 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maiores dignissimos nisi ut modi provident asperiores magni tenetur illo nostrum?"
    },
    {
      imageUrl: "/dummycard.png",
      title: "Event Organizer Mantap 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, maiores dignissimos nisi ut modi provident asperiores magni tenetur illo nostrum?"
    }
  ];

  return (
    <div className="w-full overflow-hidden px-4 py-8">
      <div 
        className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="snap-center">
            <Card
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollableCards