import React, { useState } from 'react'

export default function UseMemohooks() {

    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cube(num){
        return num * num * num
    }
    const result = cube(number)

  return (
    <div>
        <h1>useMemohook</h1>
        
      <input type="number" value={number} 
      onChange={(e)=>{setNumber(e.target.value)}} 
      className='bg-white text-black p-2' placeholder='Enter a Number' />
      <h2>Cube of the number : {result}</h2>
      

    </div>
  )
}
