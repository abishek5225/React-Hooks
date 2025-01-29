import React from 'react'
import {useState, useEffect, useRef} from 'react'

export default function UseRefhooks() {
  {/* Example 1: */}
    const [value, setvalue] = useState(0)
    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1
    })
    if(value <0){
        setvalue(0)
    }


    {/* Example 2: */}

    const inputelement = useRef()
    const btnclicked = () => {
      console.log(inputelement.current.value);
      inputelement.current.style.backgroundColor = 'black'
      
    }
  return (
    <div>
      <div className="example1">
        <h1 >UseRef Hook</h1>
       <h2 className='text-4xl p-2'>Example 1:</h2>
        <button onClick={()=>{
            setvalue(value +1)
        }}>Increment</button>
      <h1>{value}</h1>
      <button onClick={
        ()=>{
          setvalue(value -1)
        }
      }>Decrement</button>
      <h2 className='mt-4 text-2xl'>Render count: {count.current} </h2>
      </div>
<hr />
      <div className="mt-4">
      <h1>Example 2</h1>
      <input type="text" ref={inputelement} className='bg-white text-black' />
      <button onClick={btnclicked}>Click here</button>
     
      </div>
    </div>
  )
}
