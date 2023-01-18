import React from 'react'
import Uno from './img/uno.svg'
import Dos from './img/dos.svg'
import Tres from './img/tres.svg'
import Cuatro from './img/cuatro.svg'

export default function Banner() {
  return (
    <div className='bg-[#0282F9] h-44 w-full mt-16 mb-8 flex flex-row justify-center items-center text-white'>
        <div className='flex mobile:flex-col  mobileL:flex-row justify-center items-center desktop-two:mr-8 mobile:mobile:ml-3'>
            <img className='lap_tablet:h-20 mobile:h-12 ' src={Uno} alt="" />
            <h4 className='mobile:text-xs mobileL:text-sm mobile:text-center tablet:text-start tablet:text-base'>DIGITAL COMICS</h4>
        </div>
        <div className='flex mobile:flex-col mobileL:flex-row justify-center items-center mx-8'>
            <img className='lap_tablet:h-20  mr-3 mobile:h-12' src={Dos} alt="" />
            <h4 className='mobile:text-xs mobileL:text-sm mobile:text-center tablet:text-start tablet:text-base'>DIGITAL COMICS</h4>
        </div>
        <div className='flex mobile:flex-col mobileL:flex-row justify-center items-center mx-8'>
            <img className='lap_tablet:h-20  mr-3 mobile:h-12' src={Tres} alt="" />
            <h4 className='mobile:text-xs mobileL:text-sm mobile:text-center tablet:text-start tablet:text-base'>DIGITAL COMICS</h4>
        </div>
        <div className='flex mobile:flex-col mobileL:flex-row justify-center items-center desktop-two:ml-8 mobile:mr-3'>
            <img className='lap_tablet:h-20  mr-3 mobile:h-12 ' src={Cuatro} alt="" />
            <h4 className='mobile:text-xs mobileL:text-sm mobile:text-center tablet:text-start tablet:text-base'>DIGITAL COMICS</h4>
        </div>
      
    </div>
  )
}
