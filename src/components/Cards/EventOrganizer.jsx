'use client'
import React from 'react'
import BaseCard from './BaseCard'

const EventOrganizerCard = ({ data }) => {
  return (
    <BaseCard
      {...data}
      badge="Event Organizer"
      buttonText="Lihat Paket EO"
    />
  )
}

export default EventOrganizerCard