import { useEffect } from "react"
import { useState } from "react"

export default function Index() {
    const[random,setRandom]=useState(0);
    function click(){
        const randomNumber=Math.floor(Math.random()*100);
        setRandom(randomNumber);
    }
    useEffect(()=>{
        click();
        //clean up code
        return()=>{
            console.log("clean up code")
        }
    },[])
    return(
        <div>
            <h2>random Number</h2>
            <p>Random Number:{random}</p>
            <button onClick={click}>onclick</button>
        </div>
    )
}