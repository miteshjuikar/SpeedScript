import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Icon from '../assets/typingSymbol.png';
import style from './CSSFiles/LogIn.module.css'

import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db, provider } from './firebase'
import { doc, getDoc, setDoc } from "firebase/firestore"; 


export default function LogIn() {

    const [ logInData, setLogInData ] = useState({ email:"", password:"" });
    const [ fetchData, setFetchData ] = useState();
    
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
            console.log(docSnap.data());

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

    //Storing google fetched data to firestrore
    const docSnap = await getDoc(doc(db, "userData", user.uid));
      if (docSnap._document === null) {
        await setDoc(doc(db, "userData", user.uid), {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          wordRaceScore: 0
        });
        console.log(user, "1st if conditin");

//Store data in state by redux
        setFetchData({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          wordRaceScore: 0,
          userId: user.uid,
          highestScoreWordRace: highestScore
        });
      }
      else{
        setFetchData({
          ...docSnap.data(),
          highestScoreWordRace: highestScore,
          userId: user.uid
        });
        console.log("2st if conditin");
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
