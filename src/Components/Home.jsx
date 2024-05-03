import React from 'react'
import style from './CSSFiles/Home.module.css'
import About from './SubComponents/About_Home'
import Home_Home from './SubComponents/Home_Home';


export default function Home() {

  const handleSectionClick = () => {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={style.homePage}>
        <Home_Home handleSectionClick={handleSectionClick}/>
      </div> 
      <div id="about" className={style.aboutDiv} >
        <About />
      </div>
    </>
  )
}
