import React from 'react';
import EnterGuessForm from '../EnterGuessForm';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <><EnterGuessForm/></>;
}

export default Game;
