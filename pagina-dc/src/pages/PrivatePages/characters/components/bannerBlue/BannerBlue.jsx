import React from 'react'
import Uno from './img/uno.svg'
import Dos from './img/dos.svg'
import Tres from './img/tres.svg'
import Cuatro from './img/cuatro.svg'

export default function Banner() {
  return (
    <div className='bg-[#0282F9] h-44 w-full mt-16 mb-8 flex flex-row justify-center items-center text-white'>
        <div className='flex flex-row justify-center items-center mr-8'>
            <img className='h-20 mr-' src={Uno} alt="" />
            <h4>DIGITAL COMICS</h4>
        </div>
        <div className='flex flex-row justify-center items-center mx-8'>
            <img className='h-20 mr-3 ' src={Dos} alt="" />
            <h4>DIGITAL COMICS</h4>
        </div>
        <div className='flex flex-row justify-center items-center mx-8'>
            <img className='h-20 mr-3 ' src={Tres} alt="" />
            <h4>DIGITAL COMICS</h4>
        </div>
        <div className='flex flex-row justify-center items-center ml-8'>
            <img className='h-20 mr-3 ' src={Cuatro} alt="" />
            <h4>DIGITAL COMICS</h4>
        </div>
      
    </div>
  )
}
