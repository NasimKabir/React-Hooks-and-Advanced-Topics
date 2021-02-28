import React ,{useState} from 'react'

const UseState_basic = () => {
    const [text,setText]=useState("Welcome")
    const handler=()=>{
        if(text=="Welcome"){
            setText("Welcome to react hooks tutorials.")
        }
        else{
            setText("Random change")
        }
    }
    return (
        <div>
        <h1>{text}</h1>
        <button onClick={handler}>change</button>
     </div>
    )
}

export default UseState_basic

