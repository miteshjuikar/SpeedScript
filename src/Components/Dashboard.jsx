import React from 'react'
import style from './CSSFiles/Dashboard.module.css'
import { TypeAnimation } from "react-type-animation";
import Icon from '../assets/typingSymbol.png'
import { useNavigate } from 'react-router-dom';
                  
export default function Dashboard() {

  const scoreData =  [
    {"name":"Mitesh Juikar","score":1000,"speed":16},
    {"name":"Parag bhosale","score":900,"speed":18},
    {"name":"Yogesh Juikar","score":800,"speed":20},
    {"name":"Siddhant Juikar","score":700,"speed":22}
  ]

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
            <p>for best typing score</p>
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
                        <p>{data.score}</p>
                        <p>{data.speed}<span className={style.paraSpan}>w/m</span></p>
                        </div>
                    </div>)
            })}

        </div>


        </div>
      </div>
    </div>
  )
}
