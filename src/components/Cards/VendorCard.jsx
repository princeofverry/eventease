'use client'
import React from 'react'
import BaseCard from './BaseCard'

const VendorCard = ({ data }) => {
  return (
    <BaseCard
      {...data}
      badge="Vendor"
      buttonText="Lihat Produk"
    />
  )
}

export default VendorCard