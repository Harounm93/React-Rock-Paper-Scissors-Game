import './App.css';
import Hand from '../selections/index';
import { useState, useEffect } from 'react';
import Input from '../Input/index';
//import { Typography } from '@material-ui/core';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [ComputerScore, setComputerScore] = useState(0);
  const [player, setPlayer] = useState('');
  const [winner, setWinner] = useState("Click a move to start game!")
  const [turn, setTurn] = useState(0)
  
let possibleMoves = [
  'rock',
  'paper',
  'scissors',
] 

  const [userMove, setUserMove] = useState('move');
  // const [count, setCount] = useState();

  // count state: potential turn counter or game history if added

  function handleMove(userMove) {

    //randomize computer moves from array
    let randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    console.log(randomMove);
    //set user move
    setUserMove(userMove);

    //update round
    setTurn(turn + 1)

    //Game logic is below

    //draw scenario: return early

    if (userMove === randomMove) {
      console.log('its a draw');
      setWinner(`round ${turn} was a draw, try again`)
      return;
    }

    //win scenarios below
    if (
      (userMove === 'paper' && randomMove === 'rock') ||
      (userMove === 'rock' && randomMove === 'scissors') ||
      (userMove === 'scissors' && randomMove === 'paper')
    ) {
      console.log('you gained a point');
      // addScore();
      setUserScore(userScore + 1);
      setWinner(`${player} won round ${turn}`)
      
    } 
    //lose scenarios below
    else if (
      (userMove === 'paper' && randomMove === 'scissors') ||
      (userMove === 'scissors' && randomMove === 'rock') ||
      (userMove === 'rock' && randomMove === 'paper')
    ) {
      console.log('you lost this round');
      // minusScore();
      
      setComputerScore(ComputerScore + 1)
      setWinner(`computer won round ${turn}`)
    }
  }
  
  function addPlayer(item) {
    setPlayer(item);
  }
  // input user name to game

 
  
  useEffect(() => {
    console.log('useffect is running');

    console.log(`you picked ${userMove}`);
  }, [userMove]);

  console.log('render');
  return (
    <div className='App'>
      <div className='scores'>
        <h1 className='user'>
         
          {player} Score: {userScore}
        </h1>
        <h1 className='computer'> Computer Score: {ComputerScore}</h1>
      </div>
      <Input addPlayer={addPlayer} />
      <header className='App-header'>
      <h2> { winner} </h2>
        <Hand  handleMove={handleMove} />
      </header>
    </div>
  );
}

export default App;
