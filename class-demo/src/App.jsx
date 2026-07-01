import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('form submited');
    setName('')
    setEmail('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
      <input 
      value={name}
      onChange={(e)=>{
        setName(e.target.value)
      }}
      type="text"
       placeholder='Enter your name'
        /><br />
      <input
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
       type="email" 
       placeholder='Enter email'
        /><br />
      <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
