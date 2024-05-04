import React, { useState, useMemo, useEffect, useCallback } from 'react'
import style from '../CSSFiles/WordRace.module.css'
import wordList from '../Words.js'

export default function WordRace() {

  const height = 500;
  const width = 900;
  const topDafaultVal = 10;
  const leftDafaultVal = 120;
  const speed = 5;

  const [top, setTop] = useState(topDafaultVal);
  const [left, setLeft] = useState(leftDafaultVal);  
  const [ rankNo, setRankNo ] = useState(10);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const word = wordList[currentWordIndex];
  const [isMatched, setIsMatched] = useState(false);
  const [inputWord, setInputWord] = useState("");

  const [score, setScore] = useState(0);



  const falling_word = useMemo(() => {
    return {
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
    };
  }, [top, left]);

  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      setTop((prevTop) => {
        if (prevTop + speed >= height) {
          handleMatch();
          return 0;
        }
        return prevTop + speed;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if(isMatched){
      handleMatch();
    }
  },[isMatched]);

  const handleMatch = () => {
    console.log("matxh tr");
    setTop(topDafaultVal);
    // setLeft(Math.floor(Math.random() * width));
    setLeft(Math.floor(Math.random() * (width - leftDafaultVal + 1)) + leftDafaultVal);
    setCurrentWordIndex(Math.floor(Math.random() * 111));
    setIsMatched(false);
    setInputWord("");
  };
  console.log(left);

  const handleSubmit = useCallback(
    () => { 
      if (inputWord === word) {
        setIsMatched(true);
        setScore(score + 1);
      }
    },
    [inputWord, score]
  );

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      handleSubmit();
    }
  };



  return (
    <div className={style.mainWorkspace}>
      <div className={style.gameWorkspace}>
        <div className={style.workspaceContainer}>
          <div style={falling_word}>
            {word}
          </div>

        </div>
        <div className="input-group mb-3">
          <input type="text" 
                  className="form-control" 
                  placeholder="Type Here" 
                  aria-label="Type Here" 
                  aria-describedby="button-addon2" 
                  onKeyPress={handleEnter}
                  onChange={(e)=> setInputWord(e.target.value)}
                  value={inputWord}
          />
          <button id="button-addon2"
                  className="btn btn-outline-secondary"
                  type="button" 
                  onClick={handleSubmit}
          >Button</button>
        </div>
      </div>


      
      <div className={style.gameScore}>
        <div className={style.currentScore}>
            <p className={style.currentScore_title}>Current Score</p>
            <p className={style.currentScore_data}>{score}</p>
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
