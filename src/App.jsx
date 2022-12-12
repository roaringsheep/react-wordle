import GameBoard from './GameBoard'
import Keyboard from './Keyboard'
import './App.css'
import {useState} from 'react';

const answer = 'apple';
function App() {
  const [attempts, setAttempts] = useState([0,1,2,3,4,5].map(n => [0,1,2,3,4].map(m => { return {val: ' '}; })));
  const [currentAttempt, setCurrentAttempt] = useState([]);
  const [attemptNum, setAttemptNum] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [keyboardColors, setKeyboardColors] = useState({});


  function handleKeyButtonClick(e) {
    processInput(e.target.id);
  }

  function processInput(key) {
    //no more coin? no more game for you! (or why are you still playing after you got it right)
    if(attemptNum === 6 || correctAnswer) return;

    //let's check if the user clicked enter or del
    //if they clicked enter, we should check 2 things
    //1. the current attempt has 5 characters if not, do nothing
    //2. if it does have 5 characters, we should process that
    if(key === 'entr') {
      if(currentAttempt.length < 5) return;
      else
      {
        processSubmission();
      }
    }

    else if(key === 'del') {
      //if it's already empty.. do nothing
      if(currentAttempt.length === 0) return;

      //otherwise, get rid of the last one
      const updatedAttempt = currentAttempt.slice(0, -1);
      setCurrentAttempt(updatedAttempt);
      const display = [0,1,2,3,4].map((n) => n <= updatedAttempt.length ? {val: updatedAttempt[n]} : {val: ' '});
      setAttempts([...attempts.slice(0, attemptNum), display, ...attempts.slice(attemptNum + 1)]);

    }

    else {
      //rest of the keyboard, aka alphabets
      //first check if the current attempt is full
      //if so, do nothing
      if(currentAttempt.length === 5) return;
  
      else {
        //Join the current character to the current attempt and set it
        const attempt = [...currentAttempt, key];
        setCurrentAttempt(attempt);
        const display = [0,1,2,3,4].map((n) => n <= attempt.length ? {val: attempt[n]} : {val: ' '});
        setAttempts([...attempts.slice(0, attemptNum), display, ...attempts.slice(attemptNum + 1)]);
      }
    }

  }

  function processSubmission() {
    //if the attempts are all full, then don't bother
    if(attemptNum === 6) return;

    //first, check if the answer is correct
    if(answer === currentAttempt.join('')) setCorrectAnswer(true);

    //First, take the current attempt, and ananlyze it
    //also kinda hacky, but set the keycolors along with it
    let keyColors = {...keyboardColors};
    const colorized = currentAttempt.map((val, idx) => {
      let className;
      if(val === answer[idx]) className = 'correct'
      else if(answer.includes(val)) className = 'contains'
      else className = 'dne';

      keyColors[val] = className;
      return { val, className }
    });
    
    setKeyboardColors(keyColors);
    setAttempts([...attempts.slice(0, attemptNum), colorized, ...attempts.slice(attemptNum + 1)]);


    //emptying the current attempt and incrementing the counter
    setCurrentAttempt([]);
    setAttemptNum(attemptNum + 1);
  }

  return (
    <div className='app'>
      <h1 className='center'>React Wordle</h1>
      <GameBoard attempts={attempts} />
      <Keyboard colors={keyboardColors} onClick={handleKeyButtonClick} />
    </div>
  )
}

export default App
