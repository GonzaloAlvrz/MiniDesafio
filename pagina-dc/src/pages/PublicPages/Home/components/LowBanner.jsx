import React from 'react'

export default function LowBanner() {
  return (
    <div className='laptop:h-96 mobile:h-[570px] w-full bg-violet-800  flex mobile:flex-col mobile:items-center laptop:flex-row '>
        {/* description */}
        <div className='h-96 w-7/12 text-white flex justify-center laptop:ml-16 flex-col'>
             <h2 className='text-left text-5xl mb-4 mobile:mt-8 mobileL:mt-0'>JOIN THE DC UNIVERSE</h2>
             <p>Register for FREE to access member-exclusive content and activities, read FREE comics from DC UNIVERSE INFINITE, and get alerts and early access to exclusive products from DC Shop</p>
             
        </div>
        {/* picture */}
        <div className='h-96 w-5/12 flex justify-center mobile:mt-8 lap_tablet:mt-0'>
            <img src="https://static.dc.com/2022-06/DC_Peacemaker_RegBan_cutout.png?w=700" alt="" />

        </div>
      
    </div>
  )
}
