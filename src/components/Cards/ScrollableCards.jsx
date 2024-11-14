'use client'
import React from 'react'
import VendorCard from './VendorCard'
import EventOrganizerCard from './EventOrganizer'
import MakeupArtistCard from './MakeupArtist'

const ScrollableCards = ({ type, data }) => {
  const CardComponent = {
    eo: EventOrganizerCard,
    vendor: VendorCard,
    mua: MakeupArtistCard
  }[type]

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
        {data.map((item, index) => (
          <div key={index} className="snap-center">
            <CardComponent data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollableCards