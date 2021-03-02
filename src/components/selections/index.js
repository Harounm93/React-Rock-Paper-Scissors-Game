import './selections.css'


function Hand ({userMove}){
console.log("User has chosen a move")

// Player move is decided 

    return ( <div className = "container">

<button className = "rock" onClick = {() => {userMove("rock")}} > 👊</button>
    <button className = "paper" onClick = {() => {userMove("paper")}}> ✋</button>
    <button className = "scissors" onClick = {() => {userMove("scissors")}}> ✌️ </button>
    

    </div>)
}


export default Hand
