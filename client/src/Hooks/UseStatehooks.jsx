import React from 'react'
import { useState } from 'react'

function UseStatehooks() {
    const [count, setCount] = useState(0)// count is a state variable and setCount is a function to update the state variable
    
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
        <div className="mb-4">
            <h1>UseState hook</h1>
            <p>useState Lets you add state to a functional component.</p>
        </div>
        <h2 >The value is incremented by = {count}</h2>
        
        <h2>{count}</h2>
        <button onClick={increment} className='m-4'>Increment</button>
        <button onClick={decrement}>Decrement</button>

        
    </div>
  )
}

export default UseStatehooks