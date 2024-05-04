import React from 'react'
import { memo } from 'react'

const HookCallback = ({CounterTwo}) => {
    console.log("Child component rendering....")
  return (
    <div>HookCallback ={CounterTwo}</div>
  )
}

export default memo(HookCallback)