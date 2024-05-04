import { useState } from "react"

export function HooksIn(){
    const[state,setStatee]=useState(0);
    function updaterFunction(){
        setStatee(state+1);
    }
    return(
        <div>
            <h2>{state}</h2>
<button onClick={updaterFunction}>click</button>
        </div>
    )
}