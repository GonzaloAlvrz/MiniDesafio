import React from 'react'
import Icon from '../img/footer/dc-logo.svg'
export default function Footer() {
  return (
    <div className='h-72 w-full bg-black text-white flex justify-center items-center flex-col'>
      <img src={Icon} alt="" />
      <div>
        <span>PRIVACITY POLICY |</span>
        <span>TERMS |</span>
        <span>AD CHOICES |</span>
        <span>ACCESSIBILITY |</span>
        <span>GESTIONAR PREFERENCIAS</span>
      </div>
      <div className='mt-2'>
        <p>© & ™ DC. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}
