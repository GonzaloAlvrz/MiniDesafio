import React from 'react'

export default function Cva() {
  return (
    <div className='w-[550px] h-56 mx-auto mt-7'>
      {/* options */}
      <ul>
        <li className='flex flex-row '><input type="radio" className='w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300' checked/><div className='border-b-2 border-black w-full ml-4 pb-4'>All</div></li>
        <li className='flex flex-row '><input type="radio" className='w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300'/><div className='border-b-2 border-black w-full ml-4 pb-4'>0+</div></li>
        <li className='flex flex-row '><input type="radio" className='w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300'/><div className='border-b-2 border-black w-full ml-4 pb-4'>12+</div></li>
        <li className='flex flex-row '><input type="radio" className='w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300'/><div className='border-b-2 border-black w-full ml-4 pb-4'>15+</div></li>
        <li className='flex flex-row '><input type="radio" className='w-4 h-4 rounded-full text-blue-600 bg-gray-100 border-gray-300'/><div className='border-b-2 border-black w-full ml-4 pb-4'>17+</div></li>
     
      </ul>
    </div>
  )
}
