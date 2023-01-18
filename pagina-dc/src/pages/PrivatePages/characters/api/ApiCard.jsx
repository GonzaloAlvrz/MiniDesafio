import React from 'react'

export default function ApiCard({photo, names}) {
  return (
    <div>
        <div className='w-full h-[250px]'><img src={photo} alt="" /></div>
        <div><h4>{names}</h4></div>
      
    </div>
  )
}
