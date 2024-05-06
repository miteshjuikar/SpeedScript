import React, { useEffect, useState } from 'react'
import style from './CSSFiles/Dashboard.module.css'
import { TypeAnimation } from "react-type-animation";
import Icon from '../assets/typingSymbol.png'
import { useNavigate } from 'react-router-dom';

import {db } from './firebase'
import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore"; 
                  
export default function Dashboard() {

  const [ highScoreData, setHighScoreData ] = useState();
  const [ bestScoreList, setBestScoreList] = useState();

  const [ rankNo, setRankNo ] = useState(10);
  
// Dommy data
  // const scoreData =  [
  //   {"name":"Mitesh Juikar","wordRaceScore":1000,"WPM":16},
  //   {"name":"Parag bhosale","wordRaceScore":900,"WPM":18}
  // ]

//fetching first 4 high score data from database
  React.useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "userData"),orderBy("wordRaceScore", "desc"),limit(4));
      try {
        const querySnapshot = await getDocs(q);
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHighScoreData( { name: newData[0].name,
                            highScore: newData[0].wordRaceScore}
                        );
        setBestScoreList(newData);
      } catch (error) {
        console.error("Error getting highest score:", error);
      }
    };
    fetchData();
  }, []);


  const navigate = useNavigate();

  return (
    <>
    {highScoreData &&
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
            <h3>🎊 Congratulations {highScoreData.name} 🎊</h3>
            <p>for highest score of <span style={{ fontWeight: 'bold' }}>{highScoreData.highScore}</span></p>
          </div>
          

        <div className={style.scoreList} >
        <p className={style.bestScoreList}>Best Score List</p>
            {bestScoreList.map((data,i)=>{
              return(<div className={style.scoreItems} key={i+1}>
                        <img src={data.photo} className={style.userProfile} />
                        <div className={style.scoreItems_rank}>{i+1}</div>
                        <div className={style.scoreItems_name}>
                          <p className={style.parColor}>Word Race</p>
                          <p>{data.name}</p>
                        </div>
                        <div className={style.rank}>
                          <img src={`https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/badge%2Fbadge${(4-i)}.png?alt=media&token=e74041a6-5bd5-4eea-ba2d-0ec35b60c026`}  width="50" height="50"/>
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
}
  </>
  )
}
