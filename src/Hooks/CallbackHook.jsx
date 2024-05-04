import React, { useCallback, useState } from 'react'
import HookCallback from './HookCallback';

export const CallbackHook = () => {
    const[count,setCount] =useState(0);
    const[countTwo,setCountTwo] = useState([]);
     
    //Here function contineously changes whenever component change.
    // const fun = ()=>{
    //     setCountTwo(countTwo + 90)
    // }


    // Here function not changing (Remains same)
    // const fun = useCallback(()=>{
    //     setCountTwo(countTwo + 90)
    // },[countTwo])
    
  return (
    <div>
        <HookCallback CounterTwo={countTwo}/>
        <h2>Count = {count}</h2>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
    </div>
  )
}
