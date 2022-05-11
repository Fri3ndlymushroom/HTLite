import React, {useState} from 'react'
import './index.css'
import '../../App.css'

export default function Typing({}: any) {

  const [inputValue, setInputValue] = useState("")


  return (
    <div className="body">
      <div>Hello world</div>
      <div id="testinput__centerer">
        <div id="testinput__wrapper">
          <input onChange={(event)=>{setInputValue(event.target.value)}}></input>
          <br/>
          <span>{inputValue}</span>
        </div>
      </div>
    </div>
  )
}