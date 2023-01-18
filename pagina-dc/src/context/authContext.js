import {React,  useContext, useEffect, useState } from 'react'

import { createContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'


export  const authContext = createContext()
export const useAuth = () => {
  const context = useContext(authContext)
  return context
}


export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)


    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = async (email, password) => signInWithEmailAndPassword (auth, email, password) 

    const logout = () => signOut(auth);

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
     
      })
    })

   console.log(user)
  return (
    <div>
      <authContext.Provider value={{user, signup, login, logout}}>
          {children}
      </authContext.Provider>
    </div>
  )
}

