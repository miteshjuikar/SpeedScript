import React, { useState, useMemo, useEffect, useCallback } from 'react'
import style from '../CSSFiles/WordRace.module.css'
import wordList from '../Words.js'
import { useSelector } from 'react-redux';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

export default function WordRace() {


  const height = 500;
  const width = 900;
  const topDefaultVal = 10;
  const leftDafaultVal = 120;

  
  const [top, setTop] = useState(topDefaultVal);
  const [left, setLeft] = useState(leftDafaultVal);  
  const [ rankNo, setRankNo ] = useState(10);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const word = wordList[currentWordIndex];
  const [isMatched, setIsMatched] = useState(false);
  const [inputWord, setInputWord] = useState("");
  
  const [ pause, setPause ] = useState(false);
  const [score, setScore] = useState(0);
  
  const [ highScore, setHighScore ] = useState();
  const myData = useSelector(state => state.myObject);
  const speed = myData.speed;
  
  
  useEffect(()=>{
    const callFunction = async() => {
      const highScoreData = await getDoc(doc(db, "userData", "highScore"));
      setHighScore(highScoreData.data().highScore);
    }
    
    callFunction();
  },[]);

  const falling_word = useMemo(() => {
    return {
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
    };
  }, [top, left]);

  useEffect(() => {
    if (pause) {
      return setTop(top); // If shouldRunEffect is false, return early, effectively stopping the effect.
    }

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
  }, [pause]);

  useEffect(() => {
    if(isMatched){
      handleMatch();
    }
  },[isMatched]);

  const handleMatch = () => {
    setTop(topDefaultVal);
    setLeft(Math.floor(Math.random() * (width - leftDafaultVal + 1)) + leftDafaultVal);
    setCurrentWordIndex(Math.floor(Math.random() * 111));
    setIsMatched(false);
    setInputWord("");
  };
  
  const handleEnter = (e) => {
    if(e.key === "Enter"){
      handleSubmit();
    }
  }; 
  
  const handleSubmit = useCallback(
    () => { 
      if (inputWord === word) {
        setIsMatched(true);
        setScore(score + 1);
      }
    },
    [inputWord, score]
  );

  const handlePause = () => {
    setPause((prevPause) => !prevPause);
  };

const handleSave = async() => {

  setPause(true)

  if(score > myData.wordRaceScore){
    const userId = myData.userId;
    //Updated highscore in database
      const docRef = doc(db, 'userData',userId);
    // Data to be updated in the document
      const updatedData = {
        wordRaceScore: score
      };

      if(score > highScore){
      //Update high score
          const updateHighScore = doc(db, 'userData',"highScore");
          updateDoc(updateHighScore, {highScore: score})
            .catch((error) => {
              alert('Error updating document:', error);
            });
        }

    // Update the document with the specified data
      updateDoc(docRef, updatedData)
        .then(() => {
          alert('Document updated successfully.');
        })
        .catch((error) => {
          alert('Error updating document:', error);
        });
  }
}

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
                  aria-label="Type Here" 
                  aria-describedby="button-addon2" 
                  disabled={pause}
                  placeholder={pause ? "Resume game to start typing" : "Type Here"}
                  onKeyPress={handleEnter}
                  onChange={(e)=> setInputWord(e.target.value)}
                  value={inputWord}
          />
          <button id="button-addon2"
                  className={`btn btn-outline-secondary ${style.button}`}
                  type="button" 
                  disabled={pause}
                  onClick={handleSubmit}
          >Submit</button>
          <button id="button-addon2"
                  className={`btn btn-outline-secondary ${style.button}`}
                  type="button" 
                  onClick={handlePause}
          >{pause ? "Play" : "Pause"}</button>
        </div>
      </div>


      
      <div className={style.gameScore}>
        <div className={style.currentScore}>
            <p className={style.currentScore_title}>Current Score</p>
            <p className={style.currentScore_data}>{score}</p>
        </div>
        <div className={style.highestScore}>
            <p className={style.currentScore_title}>Highest Score</p>
            <p className={style.currentScore_data}>{highScore}</p>
        </div>
        <div className={style.rank}>
            <p className={style.currentScore_title}>Rank</p>
            <img src={`https://firebasestorage.googleapis.com/v0/b/typing-trainer-ec708.appspot.com/o/badge%2Fbadge${rankNo}.png?alt=media&token=e74041a6-5bd5-4eea-ba2d-0ec35b60c026`}/>
        </div>
        <button id="button-addon2"
                  className={`btn btn-outline-secondary ${style.button}`}
                  type="button" 
                  onClick={handleSave}
          >Save</button>
      </div>
    </div>
  )
}
