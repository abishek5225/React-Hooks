import React from 'react'
import {useState, useEffect, useRef} from 'react'

export default function UseRefhooks() {
    const [value, setvalue] = useState(0)
    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
    })
    if(value <0){
        setvalue(0)
    }
  return (
    <div>
      <div className="example1">
        <h1>UseRef Hook</h1>
        <button onClick={()=>{
            setvalue(value +1)
        }}>Increment</button>
      <h1>{value}</h1>
      <button onClick={
        ()=>{
          setvalue(value -1)
        }
      }>Decrement</button>
      <h2 className='mt-4'>Render count: {count.current} </h2>
      </div>

      <div className="example2">


      </div>
    </div>
  )
}
