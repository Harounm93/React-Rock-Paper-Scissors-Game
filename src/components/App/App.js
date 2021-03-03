import './App.css';
import Hand from '../selections/index';
import { useState, useEffect } from 'react';
import Input from '../Input/index';
//import { Typography } from '@material-ui/core';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [ComputerScore, setComputerScore] = useState(0);
  const [player, setPlayer] = useState('');
  const [possibleMoves, setPossibleMoves] = useState([
    'rock',
    'paper',
    'scissors',
  ]);
  const [userMove, setUserMove] = useState('move');
  const [count, setCount] = useState();

  function handleMove(userMove) {
    let randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    console.log(randomMove);
    //set user move
    setUserMove(userMove);

    //Game logic is below

    //draw scenario: return early

    if (userMove === randomMove) {
      console.log('its a draw');
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
    }
  }
  //randomize computer moves from array
  function addPlayer(item) {
    setPlayer(item);
  }
  // input user name to game

  function changeMove(value) {
    setUserMove(value);
  }
  /// set player move as state when button is clicked

  //     //functions to update scores
  function addScore() {
    return setUserScore(userScore + 1);
  }

  function minusScore() {
    return setUserScore(userScore - 1);
  }

  useEffect(() => {
    console.log('useffect is running');

    console.log(`you picked ${userMove}`);
  }, [userMove]);

  console.log('render');
  return (
    <div className='App'>
      <div className='scores'>
        <h1 className='user'>
          {' '}
          {player} Score: {userScore}
        </h1>
        <h1 className='computer'> Computer Score: {ComputerScore}</h1>
      </div>
      <Input addPlayer={addPlayer} />
      <header className='App-header'>
        <Hand userMove={changeMove} handleMove={handleMove} />
      </header>
    </div>
  );
}

export default App;
