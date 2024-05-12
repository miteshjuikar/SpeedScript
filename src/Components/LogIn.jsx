import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../assets/typingSymbol.png';
import style from './CSSFiles/LogIn.module.css'

import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db, provider } from './firebase'
import { doc, getDoc, setDoc } from "firebase/firestore"; 

import { useSelector, useDispatch } from 'react-redux';
import { storeObject } from '../store/actions';

export default function LogIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ logInData, setLogInData ] = useState({ email:"", password:"" });

    
const handleChnage = (e) => {
        setLogInData((pre)=> ({
            ...pre,
            [e.target.id]: e.target.value
        }))
}

//Log In button 
const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            //Log in through authorise userId and password
            const res = await signInWithEmailAndPassword(auth, logInData.email, logInData.password);

            //Fetching data from firestrore which was saved, when user registration
            const docSnap = await getDoc(doc(db, "userData", auth.currentUser.uid));

    //Store data to state by redux
            dispatch(storeObject(docSnap.data()));
            navigate("/dashboard");

        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
        };
}



//Sign In through goggle account

  const signInWithGoogle = async() => {
    try{
        const res = await signInWithPopup(auth, provider);
        // The signed-in user info.
        const user = res.user;
        navigate("/dashboard");

      //Storing google fetched data to firestrore
        const docSnap = await getDoc(doc(db, "userData", user.uid));
        
        if (docSnap.data() === undefined || docSnap.data() === null) { //checking data is not present in database or not
          await setDoc(doc(db, "userData", user.uid), {
            name: user.displayName,
            email: user.email,
            userId: user.uid,
            photo: user.photoURL,
            wordRaceScore: 0,
            WPM: 0,
            speed: 1.5,
            wordLevel: 1
          });

          //Store data to state by redux
          dispatch(storeObject({
                                name:user.displayName,
                                email: user.email,
                                userId: user.uid,
                                photo: user.photoURL,
                                wordRaceScore: 0,
                                WPM: 0,
                                speed: 1.5,
                                wordLevel: 1
          }));
          
        }
        else{    // Data is already present in database
          dispatch(storeObject({
            ...docSnap.data(),
          }));
         }
      }
    catch (err) {
        alert(err.code, err.message);
      }
}


  return (
    <div className={style.main} >

    <div className={style.mainContent}>     
        <img src={Icon} height="100px" width="100px" />
        <div className={style.login_form}>
            <h1>Welcome to Typing Trainer</h1>

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp"
                        value={logInData.email}
                        onChange={handleChnage}        
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" 
                        className="form-control" 
                        id="password" 
                        value={logInData.password}
                        onChange={handleChnage} 
                />
            </div>
        
            <button type="submit" className={`btn btn-primary ${style.submitButton}`}>Submit</button>
            </form>
        </div>
        <div>
            Don't have an account? <Link to="/signUp" style={{color: 'orange'}}> sign up</Link>
        </div>
        <span className={style.orOption}>
            -------------------------- OR -------------------------
        </span>
        <button 
        onClick={signInWithGoogle} 
        className={`btn btn-primary ${style.googleButton}`}
        >
            <FcGoogle className={style.googleIcon}/>
            <span>Signin with google</span>
        </button>
    </div>
    
    </div>
  )
}
