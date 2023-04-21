import {StyledButton} from './components/StartButton/Button';
import Figure from './components/Figure';
import Podium from './components/Podium';
import LetterButton from './components/Letters'
import './App.css';
import { useState } from 'react';
// import styled from 'styled-components';

//fetching word and console logging on click TestBtn.
function TestBtn({ onSquareClick }) {
  return (
    <StyledButton className="square" onClick={onSquareClick}>
      Test Button
    </StyledButton>
  );
}

let word = 'The Word';

async function handleClick() {
  let response = await fetch('https://www.wordgamedb.com/api/v1/words/random');
  let data = await response.json();

  word = data.word;
  console.log(word);
}

//Displaying the word as a prop.

function WordContainer() {
  return <h2></h2>;
}

function App() {
  return (
    <div className="App">
      <h1> Start the game</h1>
      <StyledButton inverted="outline">Hover Me</StyledButton>
      <Podium></Podium>
     
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>

     
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>
      <WordContainer></WordContainer>
      <div className = "LetterContainer">
      <LetterButton buttonText = "A"></LetterButton>
      <LetterButton buttonText = "B"></LetterButton>
      <LetterButton buttonText = "C"></LetterButton>
      <LetterButton buttonText = "D"></LetterButton>
      <LetterButton buttonText = "E"></LetterButton>
      <LetterButton buttonText = "F"></LetterButton>
      <LetterButton buttonText = "G"></LetterButton>
      <LetterButton buttonText = "H"></LetterButton>
      <LetterButton buttonText = "I"></LetterButton>
      <LetterButton buttonText = "J"></LetterButton>
      <LetterButton buttonText = "K"></LetterButton>
      <LetterButton buttonText = "L"></LetterButton>
      <LetterButton buttonText = "M"></LetterButton>
      <LetterButton buttonText = "N"></LetterButton>
      <LetterButton buttonText = "P"></LetterButton>
      <LetterButton buttonText = "Q"></LetterButton>
      <LetterButton buttonText = "R"></LetterButton>
      <LetterButton buttonText = "S"></LetterButton>
      <LetterButton buttonText = "T"></LetterButton>
      <LetterButton buttonText = "U"></LetterButton>
      <LetterButton buttonText = "V"></LetterButton>
      <LetterButton buttonText = "W"></LetterButton>
      <LetterButton buttonText = "X"></LetterButton>
      <LetterButton buttonText = "Y"></LetterButton>
      <LetterButton buttonText = "Z"></LetterButton>
      </div>
    </div>
  );
}

export default App;
