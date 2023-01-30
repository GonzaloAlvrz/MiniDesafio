import React from 'react'

export default function HeaderImg() {
  return (
    <div className='h-40 flex justify-center items-center relative mobile:top-16 laptop:top-0 ' style={{
        backgroundImage:
          'url("https://www.dcuniverseinfinite.com/_nuxt/img/comic-browse-header.4963edd.jpg")',
      }}>
    <div className='text-5xl text-gray-700'>
      SETTINGS
      </div>
    </div>
  )
}
