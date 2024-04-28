import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Icon from '../assets/typingSymbol.png';
import style from './CSSFiles/LogIn.module.css'

export default function LogIn() {
  return (
    <div className={style.main} >

    <div className={style.mainContent}>     
        <img src={Icon} height="100px" width="100px" />
        <div className={style.login_form}>
            <h1>Welcome to Typing Trainer</h1>

            <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
        
            <button type="submit" class={`btn btn-primary ${style.submitButton}`}>Submit</button>
            </form>
        </div>
        <div>
            Don't have an account? <Link to="/signUp" style={{color: 'orange'}}> sign up</Link>
        </div>
        <span className={style.orOption}>
            -------------------------- OR -------------------------
        </span>
        <button 
        // onClick={signInWithGoogle} 
        className={`btn btn-primary ${style.googleButton}`}
        >
            <FcGoogle className={style.googleIcon}/>
            <span>Signin with google</span>
        </button>
    </div>
    
    </div>
  )
}
