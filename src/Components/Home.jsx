import React from 'react'
import style from './CSSFiles/Home.module.css'
import About from './About'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Home() {

  const handleSectionClick = () => {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();
  
  return (
    <>
      <div className={style.homePage}>
        <h1 >Register with us</h1>
        <div className='buttonDiv'>
          <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
         <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/logIn')}} >Log In</button>
        </div> 
        <button className={`btn btn-outline-secondary ${style.aboutButton}`} onClick={handleSectionClick}>About Us</button>
    </div>

    <div id="about" className={style.aboutDiv} >
      <About />
    </div>
    </>
  )
}
