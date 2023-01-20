import {React,  useContext, useEffect, useState } from 'react'

import { createContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'


export  const authContext = createContext()
export const useAuth = () => {
  const context = useContext(authContext)
  return context
}


export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)

/*     const [loading, setLoading] = useState(true) */

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = async (email, password) => signInWithEmailAndPassword (auth, email, password) 

    const logout = () => signOut(auth);

    const loginWhitGoogle = () => {
      const googleProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleProvider);
    }

    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
     /*    setLoading(false) */
      })
      return () => unsubscribe () ;
    }, [])

   console.log(user)
  return (
    <div>
      <authContext.Provider value={{user, signup, login, logout,/*  loading, */ loginWhitGoogle, resetPassword}}>
          {children}
      </authContext.Provider>
    </div>
  )
}

