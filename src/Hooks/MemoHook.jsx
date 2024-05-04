import React, { useMemo, useState } from 'react'

const nums = new Array(30_000_000).fill(0).map((_ , i) =>{
    return {
        index: i,
        isMatch: i === 29_000_000
    }
})
export const MemoHook = () => {
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(nums);
    //Expensive computation
     //const magical = numbers.find(item => item.isMatch === true)

     const magical = useMemo(() => numbers.find(item => item.isMatch === true), [numbers])
    return (
        <div>
            <span>Magical number is {magical.index}</span>
            <h2>Count = {count}</h2>
            <button onClick={() => {
                setCount(count + 1)
                if (count === 10) {
                    setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
                        return {  //array of object
                            index: i,
                            isMatch: i === 9_000_000
                        }
                    })
                    )
                }
            }}>Increment</button>
        </div>
    )
}
