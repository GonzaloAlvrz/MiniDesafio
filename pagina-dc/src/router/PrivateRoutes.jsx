import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function PrivateRoutes({children}) {
  const {user} = useAuth()
  if (!user) return <Navigate to='/'/>
  return <>{children}</>
}








/* import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {authContext} from '../context/authContext';


function PrivateRoutes({ children }) {
  const { state } = useContext(authContext);
  return state ? children : <Navigate to='/' />;
}

export default PrivateRoutes;
 */