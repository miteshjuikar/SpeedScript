import React, { useEffect, useState } from 'react'
import style from './CSSFiles/Dashboard.module.css'
import { TypeAnimation } from "react-type-animation";
import Icon from '../assets/typingSymbol.png'
import { useNavigate } from 'react-router-dom';

import {db } from './firebase'
import { doc, getDoc } from "firebase/firestore"; 
                  
export default function Dashboard() {

  const [ highScore, setHighScore ] = useState(0);

  const scoreData =  [
    {"name":"Mitesh Juikar","wordRaceScore":1000,"WPM":16},
    {"name":"Parag bhosale","wordRaceScore":900,"WPM":18}
  ]

//fetching data from database
  useEffect(() => {
    const fetchHighscore = async() => {
      try{
        // const highScore = await getDoc(doc(db, "userData", "highScore"))
        const docSnap = await getDoc(doc(db, "userData", "highScore"));
        setHighScore(docSnap.data().highScore);
      }
      catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
      };
    }
    fetchHighscore();
  },[])

  const navigate = useNavigate();

  return (
    <div className={style.dashboardpage}>
      <div>
        <h2 className={style.headerText}>
          <TypeAnimation
          sequence={[
            "Welcome to, Word Typing Race",
            1000,
            "Welcome to, Sentence Typing Race",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ fontSize: '1.5em' }}
          />
        </h2>
      </div>
      <div className={style.secondDiv}>
        <div className={style.games}>
          <h1>Games</h1>
          <div className={style.words}>
            <h3 style={{ margin: "10px" }}>🏎️💨Word Race</h3>
            <p>
              Race against the clock, typing words accurately to sprint your way
              to victory and improve your typing speed!
            </p>
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/wordRace')}}>START</button>
          </div>
          <div className={style.words}>
            <div className="games-logo">
              <h3 style={{ margin: "10px" }} className="gameName">Word Typing</h3>
            </div>
            <p>
              Sharpen your typing skills by typing out paragraphs under the
              pressure of time. And measure your WPM.
            </p>
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/sentenceRace')}}>START</button>
          </div>
        </div>

        <div className={style.score}>
          <div className={style.winnerName}>
            <h3>🎊 Congratulations Mitesh Juikar 🎊</h3>
            <p>for highest score of <span style={{ fontWeight: 'bold' }}>{highScore}</span></p>
          </div>
          

        <div className={style.scoreList} >
        <p className={style.bestScoreList}>Best Score List</p>
            {scoreData.map((data,i)=>{
              return(<div className={style.scoreItems} key={i+1}>
                        <img src={Icon} className={style.userProfile} />
                        <div className={style.scoreItems_rank}>{i+1}</div>
                        <div className={style.scoreItems_name}>
                          <p className={style.parColor}>Word Race</p>
                          <p>{data.name}</p>
                        </div>
                        <div className={style.scoreItems_score}>
                        <p>{data.wordRaceScore}</p>
                        <p>{data.WPM}<span className={style.paraSpan}>w/m</span></p>
                        </div>
                    </div>)
            })}

        </div>


        </div>
      </div>
    </div>
  )
}
