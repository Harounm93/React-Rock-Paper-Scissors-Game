import { useState } from 'react'
import Button from '@material-ui/core/Button';
import "../Input/input.css"

function Input({addPlayer}) {
  const [text, setText ] = useState("")
   
    return (
      <div  className = "input-container">
        <input onChange = {event => setText(event.target.value) }/>
        <Button variant="contained" color="secondary" onClick = {() => addPlayer(text)}> Add name</Button>

      </div>
    );
  }
  
  export default Input;