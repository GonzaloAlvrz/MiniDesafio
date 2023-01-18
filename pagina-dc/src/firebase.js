// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1xx4BMDU4WyfDkxj0ntKqdT4-TKFBXjM",
  authDomain: "minidesafio-46371.firebaseapp.com",
  projectId: "minidesafio-46371",
  storageBucket: "minidesafio-46371.appspot.com",
  messagingSenderId: "913939321982",
  appId: "1:913939321982:web:27be3282355555d0cf742f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)