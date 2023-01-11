import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from '../pages/PrivatePages/characters/Characters'
import Home from '../pages/PublicPages/Home/Home'
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
         <Route path='/charactes' element={<Characters/>}/>
      </Routes>
    </div>
  )
}
