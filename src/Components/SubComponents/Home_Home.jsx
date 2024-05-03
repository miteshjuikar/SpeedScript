import React from 'react'
import style from '../CSSFiles/Home.module.css'

import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/typingSymbol.png';



export default function Home_Home( { handleSectionClick }) {
    const navigate = useNavigate();

  return (
    <div className={style.homepage_container}>
    <header className={style.header}>
      <h1>Speed Script</h1>
      <img src={Icon} alt="Typing Master Logo" className={style.logo} height="100px" width="100px" />
    </header>
    <main className={style.main}>
      <section className={style.hero}>
        <h2>Enhance Your Typing Skills</h2>
        <p>Practice typing exercises, improve your speed, and become a typing pro!</p>
        <div className={style.cta_buttons}>
    
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
  )
}
