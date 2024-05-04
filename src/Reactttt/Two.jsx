import React, { useEffect } from 'react'
const Two = ({color}) => {

  // case 1: Run on every render
  useEffect(()=>{
    alert("Hey I will run on every render");
})

// case 1: Run only on render
useEffect(()=>{
    alert("Hey welcome to my page. This is the first render")
},[]);

// case 3: Run only when certain value change
useEffect(()=>{
    alert("Hey I am running because color was changed");
},[color])


// Example of cleanup function
useEffect(()=>{
  alert("Example of cleanup function");
  return ()=>{
    alert("Component was unmounted");
  }
},[])
  return (
    <div>
      I am navbar of {color};
    </div>
  )
}
export default Two;
