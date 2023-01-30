import React from 'react'
import { Link } from 'react-router-dom'
export default function Community() {
  return (
    <div className='h-72 mb-10  flex justify-center items-center flex-col'>
      <div>
        <h2 className='text-3xl'>Please don't be shy</h2>
      </div>
      <div>
       <Link to='/404-not-found-Error'><button className='h-12 px-3 bg-black text-white mt-6 hover:bg-black/70'>EXPLORE COMMUNITY</button></Link>
      </div>
    </div>
  )
}
