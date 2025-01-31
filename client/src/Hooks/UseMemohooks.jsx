import React, { useState , useMemo} from 'react'

export default function UseMemohooks() {

    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cube(num){
      console.log('Calculation done')
        return num * num * num
    }
    const result = useMemo(()=> cube(number), [number])

  return (
    <div>
        <h1>useMemohook</h1>
        <h2>usememo example</h2>
        
      <input type="number" value={number} 
      onChange={(e)=>{setNumber(e.target.value)}} 
      className='bg-white text-black p-2' placeholder='Enter a Number' />
      <h2>Cube of the number : {result}</h2>
      <h2>Counter : {counter}</h2>
      <button onClick={()=>{setCounter(counter+1)}} className='bg-blue-500 text-white p-2'>Increment Counter</button>
      

    </div>
  )
}
