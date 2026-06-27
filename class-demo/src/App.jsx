import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submited');
    setNum('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input
        value={num}
        onChange={(e)=>{
          setNum(e.target.value)
        }}
         type="text"
          placeholder='Enter your name'
         />
        <button>sumit</button>
      </form>
      
    </div>
  )
}

export default App
