import React from 'react'
import Parent from './Parent'

export default function GrandParent() {
    function getdata(data){
        console.log(data)
    }
  return (
<div>
    <Parent getdata={getdata}/>
    </div>
  )
}
