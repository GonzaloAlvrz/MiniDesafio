import {React, useState} from 'react'

export default function ComponentNames({letra}) {

  const [select, setSelect] = useState(false);
  const clickSelecte = () => {
    setSelect(!select)
  }

  return (
    <div onClick={clickSelecte} className={select ? 'h-10 w-10 bg-[#0282F9]   flex justify-center items-center text-white cursor-pointer border-2 border-gray-400': 'h-10 w-10 bg-white dark:bg-slate-800  flex justify-center items-center cursor-pointer border-2 border-gray-400'}>
      <span>{letra}</span>
    </div>
  )
}

/* 'h-10 w-10 bg-gray-300 flex justify-center items-center ' */