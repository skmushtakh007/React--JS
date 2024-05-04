import { useEffect, useState } from "react";
import Two from "./Two";

let One = () => {
    function handleClick(){
        setCount(count+1);
    }
    const[count, setCount]=useState(0);
    const[color,setColor]= useState(0);

    useEffect(()=>{
        alert("count was changed");
        setColor(color + 1);
    },[count])

    
    
    return(
        <>
        <Two color={"cyan" + "Blue"+  color}/>
        <div className="container">
            <h2>Counter={count}</h2>
            <button onClick={handleClick}>submit</button>
        </div>
        </>
    )
}
export default One;