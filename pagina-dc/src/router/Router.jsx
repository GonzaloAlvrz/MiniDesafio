import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Characters from '../pages/PrivatePages/characters/Characters'
import Home from '../pages/PublicPages/Home/Home'
import AuthProvider from '../context/authContext'
import PrivateRoutes from './PrivateRoutes'
import Account from '../pages/PrivatePages/account/Account'
import Profile from '../pages/PrivatePages/profile/Profile'
import Error from '../pages/PrivatePages/error/Error'
import ErrorP from  '../pages/PublicPages/error/Error'
export default function Router() {
  return (
    <div>
      <AuthProvider>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/404-not-found-Error-P' element={<ErrorP/>}/>
         <Route path='/characters' element={<PrivateRoutes><Characters/></PrivateRoutes> }/>
         <Route path='/account' element={<PrivateRoutes><Account/></PrivateRoutes> }/>
         <Route path='/profile' element={<PrivateRoutes><Profile/></PrivateRoutes> }/>
         <Route path='/404-not-found-Error' element={<PrivateRoutes><Error/></PrivateRoutes> }/>
      </Routes>
      </AuthProvider>
    </div>
  )
}
