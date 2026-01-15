import React from 'react';

function GuessList({enteredList}) {
  return <div className="guess-results">
    {enteredList.map((guessItem)=>{
    return   <p key={guessItem.id} className="guess">{guessItem.guess}</p>
  })}


</div>
}

export default GuessList;
