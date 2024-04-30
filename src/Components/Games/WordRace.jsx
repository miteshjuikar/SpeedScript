import React, { useState } from 'react'
import style from '../CSSFiles/WordRace.module.css'
import wordList from '../Words.js'

export default function WordRace() {

  const [ rankNo, setRankNo ] = useState(10);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const word = wordList[currentWordIndex];

  return (
    <div className={style.mainWorkspace}>
      <div className={style.gameWorkspace}>
        <div className={style.workspaceContainer}>

          <div className={style.falling_word} 
                // style={style}
          >
            {word}
          </div>

        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Type Here" aria-label="Type Here" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
      </div>


      
      <div className={style.gameScore}>
        <div className={style.currentScore}>
            <p className={style.currentScore_title}>Current Score</p>
            <p className={style.currentScore_data}>200</p>
        </div>
        <div className={style.highestScore}>
            <p className={style.currentScore_title}>Highest Score</p>
            <p className={style.currentScore_data}>400</p>
        </div>
        <div className={style.rank}>
            <p className={style.currentScore_title}>Rank</p>
            <img src={`https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/badge%2Fbadge${rankNo}.png?alt=media&token=e74041a6-5bd5-4eea-ba2d-0ec35b60c026`}/>
        </div>
      </div>
    </div>
  )
}
