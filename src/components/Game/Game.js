import React from 'react';
import EnterGuessForm from '../EnterGuessForm';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
   const [enterGuess, setEnterGuess] = React.useState("");
   const [enteredList,setEnteredList]=React.useState([]);
   function getEnteredGuess(guess){
let newGuess={guess,id:Math.random()}
setEnteredList([...enteredList,newGuess])
   }
  return <>
  <EnterGuessForm getEnteredGuess={getEnteredGuess}
   enterGuess={enterGuess} setEnterGuess={setEnterGuess}/>
   <GuessList enteredList={enteredList} />

   </>;
}

export default Game;
