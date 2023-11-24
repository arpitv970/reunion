import React from 'react'
import AllProperties from '../Property/AllProperties'

const HomePage = () => {
  return (
    <section>
      <h1 className='text-3xl mb-3 font-bold text-center'>Published rental propteries</h1>
      <AllProperties />
    </section>
  )
}

export default HomePage
