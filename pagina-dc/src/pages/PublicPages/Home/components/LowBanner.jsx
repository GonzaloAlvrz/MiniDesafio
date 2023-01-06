import React from 'react'
import Button from './Button'

export default function LowBanner() {
  return (
    <div className='h-96 w-full bg-violet-800 mb-20 flex flex-row'>
        <div className='h-96 w-7/12  flex justify-center  ml-16 flex-col'>
             <h2 className='text-left text-5xl mb-4'>JOIN THE DC UNIVERSE</h2>
             <p>Register for FREE to access member-exclusive content and activities, read FREE comics from DC UNIVERSE INFINITE, and get alerts and early access to exclusive products from DC Shop</p>
             
        </div>
        <div className='h-96 w-5/12 flex justify-center'>
            <img src="https://static.dc.com/2022-06/DC_Peacemaker_RegBan_cutout.png?w=700" alt="" />

        </div>
      
    </div>
  )
}
