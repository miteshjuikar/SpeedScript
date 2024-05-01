import React from 'react'
import style from './CSSFiles/Home.module.css'
import About from './About'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Icon from '../assets/typingSymbol.png';


export default function Home() {

  const handleSectionClick = () => {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();
  
  return (
    <>
      {/* <div className={style.homePage}>
        <h1 >Register with us</h1>
        <div className='buttonDiv'>
          <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
         <button className={`btn btn-outline-secondary ${style.buttonStyle}`} onClick={() => {navigate('/logIn')}} >Log In</button>
        </div> 
        <button className={`btn btn-outline-secondary ${style.aboutButton}`} onClick={handleSectionClick}>About Us</button> */}
{/* 
<div className={style.homepage_container}>
      <header className={style.header} >
        <h1>Speed Script</h1>
        <img src={Icon} alt="SpeedScript Logo" className={style.logo} height="100px" width="100px"  />
      </header>
      <main className={style.main} >
        <section className={style.description} >
          <h2>Welcome to SpeedScript</h2>
          <p>Enhance your typing skills with our engaging typing game. Practice typing exercises, improve your speed, and become a typing pro!</p>
        </section>
        <section className={style.features} >
          <h2>Key Features</h2>
          <ul>
            <li>Multiple typing exercises</li>
            <li>Various difficulty levels</li>
            <li>Real-time feedback</li>
            <li>Customizable settings</li>
            <li>Compete on leaderboards</li>
          </ul>
        </section>
        <section className={style.cta}>
          <h2>Get Started Now</h2>
          <Link to="/game" className="btn">Play Now</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          <Link to="/signin" className="btn btn-secondary">Sign In</Link>
        </section>
      </main>
    </div> */}


    <div className={style.homepage_container}>
      <header className={style.header}>
        <h1>Speed Script</h1>
        <img src={Icon  } alt="Typing Master Logo" className={style.logo} height="100px" width="100px" />
      </header>
      <main className={style.main}>
        <section className={style.hero}>
          <h2>Enhance Your Typing Skills</h2>
          <p>Practice typing exercises, improve your speed, and become a typing pro!</p>
          <div className={style.cta_buttons}>
            {/* <Link to="/game" className={`${style.btn} ${style.play_now}`}>Play Now</Link>
            <Link to="/signup" className={`${style.btn} ${style.sign_up}`}>Sign Up</Link>
            <Link to="/signin" className={`${style.btn} ${style.sign_in}`}>Sign In</Link> */}
          <button className={style.sign_up} onClick={() => {navigate('/signUp')}} >Sign-Up</button>
          <button className={style.sign_in} onClick={() => {navigate('/logIn')}} >Log In</button>
          <button className={style.aboutButton} onClick={handleSectionClick}>About Us</button>
          </div>
        </section>
        <section className={style.features}>
          <h2>Key Features</h2>
          <ul>
            <ol>
              <li>Multiple typing exercises</li>
              <li>Various difficulty levels</li>
            </ol>
            <ol>
              <li>Real-time feedback</li>
              <li>Customizable settings</li>
            </ol>
            <ol>
              <li>Compete on leaderboards</li>
            </ol>
          </ul>
        </section>
      </main>
      </div>




    {/* </div> */}
    <div id="about" className={style.aboutDiv} >
      <About />
    </div>
    </>
  )
}
