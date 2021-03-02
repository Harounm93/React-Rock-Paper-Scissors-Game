import './App.css';
import Hand from '../selections/index'
import { useState, useEffect } from "react"
import Input from '../Input/index'
//import { Typography } from '@material-ui/core';

function App() {
  const [userScore,setUserScore] = useState(0)
  const [ComputerScore,setComputerScore] = useState(0)
  const [player, setPlayer] = useState("")
  const [possibleMoves,setPossibleMoves] = useState(["rock","paper", "scissors"])
  const [userMove, setUserMove] = useState("move")

 
  let randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
  //randomize computer moves
  function addPlayer(item){
    setPlayer(item)
  }
// adding user to game
  
  function changeMove(value){
setUserMove(value)
  }
/// lock in player move when button is clicked

 //functions to update scores
 function addScore(){
  setUserScore(userScore++)
        }
  
        function minusScore(){
          setUserScore(userScore - 1)
                }

 
  useEffect(() => {
    

//Game logic is below

//paper choice
      if (userMove === "paper" && randomMove === "rock" ){
        console.log("you gained a point")
        
      }

      if (userMove === "paper" && randomMove === "scissors" ){
        console.log("you lost this round")
        
      }
      if (userMove === "paper" && randomMove === "paper" ){
        console.log("its a draw")
        
      }

     

// rock choice

if (userMove === "rock" && randomMove === "rock" ){
  console.log("its a draw")
  

}

else if (userMove === "rock" && randomMove === "scissors" ){
  console.log("you won this round")
 addScore()
  
}
else if (userMove === "rock" && randomMove === "paper" ){
  console.log("you lost round")
  minusScore()
  
}

// scissor choices

if (userMove === "scissors" && randomMove === "paper" ){
  console.log("you gained a point")
  
}

if (userMove === "scissors" && randomMove === "rock" ){
  console.log("you lost this round")
  
}
if (userMove === "scissors" && randomMove === "scissors" ){
  console.log("its a draw")
  
}

      console.log("useffect is running")
      console.log(`computer picked ${randomMove}`)
      console.log( `you picked ${userMove}`)
      
  }, [randomMove, userScore, userMove, addScore, minusScore], );


  return (
    <div className="App">
    <div className = "scores">
    <h1 className = "user"> {player} Score: {userScore}</h1>
    <h1 className = "computer"> Computer Score: {ComputerScore}</h1>
    </div>
    <Input addPlayer = {addPlayer}/>
      <header className="App-header">
        <Hand userMove = {changeMove}/>
      </header>
      
    </div>
  );
}

export default App;
