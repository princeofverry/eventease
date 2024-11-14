'use client'
import React from 'react'
import BaseCard from './BaseCard'

const MakeupArtistCard = ({ data }) => {
  return (
    <BaseCard
      {...data}
      badge="Makeup Artist"
      buttonText="Lihat Layanan"
    />
  )
}

export default MakeupArtistCard