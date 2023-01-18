import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from '../pages/PrivatePages/characters/Characters'
import Home from '../pages/PublicPages/Home/Home'
import AuthProvider from '../context/authContext'
import PrivateRoutes from './PrivateRoutes'


export default function Router() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/characters' element={<PrivateRoutes><Characters/></PrivateRoutes> }/>
      </Routes>
      </AuthProvider>
    </div>
  )
}
