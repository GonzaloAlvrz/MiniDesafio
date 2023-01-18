import {React,  useContext, useEffect, useState } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'
/* import types from './types';
import Reducer from './Reducer'; */

export  const authContext = createContext()
export const useAuth = () => {
  const context = useContext(authContext)
  return context
}

/* const init = () => ({
  state: !!localStorage.getItem('state'),
}); */
export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)

/*     const [loading, setLoading] = useState(true) */

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = async (email, password) => signInWithEmailAndPassword (auth, email, password) 

    const logout = () => signOut(auth);

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      /*   setLoading(false) */
      })
    })

   console.log(user)
  return (
    <div>
      <authContext.Provider value={{user, /* loading,  */signup, login, logout}}>
          {children}
      </authContext.Provider>
    </div>
  )
}

/* const init = () => ({
  state: !!localStorage.getItem('state'),
}); */


/* const [loggedIn, dispatch] = useReducer(Reducer, {}, init);


const actionUno = {
  type: types.in,
};

const signup = (email, password) => {

createUserWithEmailAndPassword(auth, email, password)

localStorage.setItem('state', true);
dispatch(actionUno);
const actionDos = {
type: types.in,
};
const login = (email, password) =>{
signInWithEmailAndPassword (auth, email, password)

localStorage.setItem('state', true);
dispatch(actionDos);
}
    const actionTres = {
  type: types.out,
}  
const logout = () =>{ signOut(auth);
localStorage.removeItem('state');

dispatch(actionTres);
} */