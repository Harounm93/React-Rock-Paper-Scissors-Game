import './selections.css'


function Hand ({handleMove}){
console.log("User has chosen a move")



// Player move is decided 

    return ( <div className = "container">

<button className = "rock" onClick = {() => {handleMove("rock")}} > 👊</button>
    <button className = "paper" onClick = {() => {handleMove("paper")}}> ✋</button>
    <button className = "scissors" onClick = {() => {handleMove("scissors")}}> ✌️ </button>
    

    </div>)
}


export default Hand
