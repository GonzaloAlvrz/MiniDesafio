import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from '../pages/PrivatePages/characters/Characters'
import Home from '../pages/PublicPages/Home/Home'
import AuthProvider from '../context/authContext'
import PrivateRoutes from './PrivateRoutes'
import Account from '../pages/PrivatePages/account/Account'


export default function Router() {
  return (
    <div>
      <AuthProvider>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/characters' element={<PrivateRoutes><Characters/></PrivateRoutes> }/>
         <Route path='/account' element={<PrivateRoutes><Account/></PrivateRoutes> }/>
      </Routes>
      </AuthProvider>
    </div>
  )
}
