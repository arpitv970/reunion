import { PropertyType } from '@/lib/types'
import React from 'react'

const PropertyCard = ({ img, name, address, data, price }: PropertyType) => {
  return (
    <span className='property-card'>
      <img src={img} alt={name} />
      <p>${price}/month</p>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <div>
        <span>
          {data.bed} beds
        </span>
        <span>
          {data.bathroom} bathrooms
        </span>
        <span>
          {data.area.width} x {data.area.breadth} m^2
        </span>
      </div>
    </span>
  )
}

export default PropertyCard
