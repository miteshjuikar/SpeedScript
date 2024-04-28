import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAj8aHGXRHtDmMPjATzdPSHDo6KyHga6Pc",
  authDomain: "speedscript-3e5db.firebaseapp.com",
  projectId: "speedscript-3e5db",
  storageBucket: "speedscript-3e5db.appspot.com",
  messagingSenderId: "1030506468646",
  appId: "1:1030506468646:web:154a67fb6b48ff69159de7",
  measurementId: "G-XRN3WRVBXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();