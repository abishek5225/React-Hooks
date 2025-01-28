import React from 'react'
import { useState } from 'react'

function UseStatehooks() {
    const [count, setCount] = useState(0)

    let increment = ()=>{
        setCount(count + 1)
    }
    let decrement = ()=>{
        setCount(count - 1)
    }
    if(count < 0){
        setCount(0)
    }
    const [name, setName] = useState('')


  return (
    <div>
        <h1>UseState hook</h1>
        <h2 >The value is incremented by = {count}</h2>
        
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseStatehooks