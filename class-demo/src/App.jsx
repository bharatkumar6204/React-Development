import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('form submited',{name,email});
    setName('')
    setEmail('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <label >Name</label><br />
        <input 
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        type="text" 
        placeholder='Enter name'
        /><br />
        <label >Email</label><br />
        <input
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
         type="text"
          placeholder='Enter Email'
         /> <br />

         <button>Submit</button>
      </form>
    </div>
  )
}

export default App
