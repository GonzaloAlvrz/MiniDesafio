import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function PrivateRoutes({children}) {
  const {user} = useAuth()
  if (!user) return <Navigate to='/'/>
  return <>{children}</>
}