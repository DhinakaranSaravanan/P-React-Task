import React, { useState } from 'react'

const Home = () => {
  const [bgcolor, setBgcolor] = useState('aliceblue')
  var test = []

  function handleClick(){
    
    const arr = ['red', 'green', 'blue', 'yellow', 'purple']
  const random = Math.floor(Math.random()*(arr.length))
  const  color = arr[random]
  const classColor = color ? color : null;
  setBgcolor(classColor)
  test.push(classColor)
  } 


  const content = (
    <div  style={{backgroundColor:`${bgcolor}` }} >
      <div className='content'>
      <h1 className='h'>Click to change the {bgcolor} bgcolor</h1>
      <button className='btn' onClick={handleClick}>Click Me</button>
      <p>{test}</p>
      </div>      
    </div>
   
  )
  return content
}

export default Home