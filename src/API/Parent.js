import React from 'react'
import Child from './Child';
export default function Parent() {
    function getData(data){
        console.log(data)
    }
  return (
    <div>
        <Child getData={getData} />
    </div>
  )
}
