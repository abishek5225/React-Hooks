import React, { useState, useEffect } from 'react'


export default function UseEffecthooks() {
  const [count, setcount] = useState(0)
  const [name, setname] = useState('test 1 ')
 useEffect(()=>{
    setTimeout(()=>{
      setcount(count => count+1)
    },1000)
  },[count, name]) 
  
  return (
    <div>
      <h1>UseEffect hook</h1>
      
      <h2>It will be increment in every 3 sec</h2>
      <h3>{count}</h3>
      
      <h4>{name}</h4>
    </div>
  )
}
