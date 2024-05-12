import React, { useEffect, useRef, useState } from 'react'
import style from '../CSSFiles/SentenceRace.module.css'
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function SentenceRace() {

  const paragraph = "A paraphrase or rephrase is the rendering of the same text in different words without losing the meaning of the text itself. More often than not, a paraphrased text can convey its meaning better than the original words. In other words, it is a copy of the text in meaning, but which is different from the original.";

  const maxTime = 60;
  const [ timeLeft, setTimeLeft ] = useState(maxTime);
  const [ mistake, setMistake ] = useState(0);
  const [ WPM, setWPM ] = useState(0);
  const [ CPM, setCPM ] = useState(0);

  const [ charIndex, setCharIndex ] = useState(0);
  const [ isTyping, setIsTyping ] = useState(false);
  const inputRef = useRef(null);  
  const charRefs = useRef([]);

  const [ correctWrong, setCurrectWrong ] = useState([]);

  const myData = useSelector(state => state.myObject);
  const userId = myData.userId;


  useEffect(()=>{
    inputRef.current.focus();
    setCurrectWrong(Array(charRefs.current.length).fill(''))
  },[]);

  useEffect(() => {
    let interval;
    if(isTyping && timeLeft > 0){
      interval = setInterval(() => {
        
        setTimeLeft(timeLeft - 1);
        let correctChar = charIndex - mistake;
        let totalTime = maxTime - timeLeft;

        let cpm = correctChar * (60 / totalTime);
        cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
        setCPM(parseInt(cpm, 10));

        let wpm = Math.round((correctChar / 5 / totalTime) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        setWPM(wpm);

      }, 1000);
    }
    else if(timeLeft === 0){
      clearInterval(interval);
      setIsTyping(false);
      
    }
    return () => {
      clearInterval(interval);
    }
  },[isTyping, timeLeft]);

  const handleChange = (e) => {
    const characters = charRefs.current;
    let currentChar = charRefs.current[charIndex];
    let typeChar = e.target.value.slice(-1);

    if(charIndex < characters.length && timeLeft > 0){
      if(!isTyping){
        setIsTyping(true)
      }
      if(typeChar === currentChar.textContent){
        setCharIndex(charIndex + 1);
        correctWrong[charIndex] = style.correct;
      }
      else{
        setCharIndex(charIndex + 1);
        setMistake(mistake + 1);
        correctWrong[charIndex] = style.wrong;
      }
      if(charIndex === characters.length - 1){
        setIsTyping(false);
      }
    }
    else{
      setIsTyping(false);
    }
  }

  const resetGame = () => {
    setIsTyping(false);
    setTimeLeft(maxTime);
    setCharIndex(0);
    setMistake(0);
    setCPM(0);
    setWPM(0);
    setCurrectWrong(Array(charRefs.current.length).fill(''))
    inputRef.current.focus();
  }

  const handleSave = () => {
    const docRef = doc(db, 'userData',userId);
    setIsTyping(false);

    updateDoc(docRef, {WPM: WPM})
        .then(() => {
          alert('Document updated successfully.');
        })
        .catch((error) => {
          alert('Error updating document:', error);
        });
  }

  return (
    <div className={style.container}>

    <div className={style.mainDiv}>
      <div className={style.paraType}>
        <input type="text" className={style.input_field} ref={inputRef} onChange={handleChange} />
        {
          paragraph.split("").map((char, index) => (
            <span key={index} className={`${style.charStyle} ${index === charIndex ? style.active : ""} ${correctWrong[index]}`} ref={(e) => charRefs.current[index] = e }>{char}</span>
          ))
        }
      </div>
      <div className={style.result}>
        <p>Time Left: <strong>{timeLeft}</strong></p> 
        <p>Mistakes: <strong>{mistake}</strong></p> 
        <p>WPM: <strong>{WPM}</strong></p> 
        <p>CPM: <strong>{CPM}</strong></p> 
        <div className={style.buttons} >
          <button type="button" className="btn btn-primary" onClick={resetGame}>Try Again</button>
          <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  </div>
  )
}
