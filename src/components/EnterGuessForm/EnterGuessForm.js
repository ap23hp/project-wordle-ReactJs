import React from "react";

function EnterGuessForm() {
  function handleChange(e) {
 
 setEnterGuess(e.target.value.toUpperCase());
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(enterGuess.length!==5){
      return
    }
    console.log(enterGuess);
    setEnterGuess("");
  }
  const [enterGuess, setEnterGuess] = React.useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        pattern="[A-Z]{5}"
        type="text"
        value={enterGuess}
        onChange={handleChange}
        required
        title="5 letter word"
      />
    </form>
  );
}

export default EnterGuessForm;
