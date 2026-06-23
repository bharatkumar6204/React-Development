import React from 'react'
import { useState } from 'react'

const App = () => {
 const [username, setUserName] = useState("") 

 const submitHandler = (e)=>{
  e.preventDefault()
  console.log("submited form",username);
  setUserName("")
 }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
          setUserName(e.target.value)
        }} 
        className='px-4 py-3 font-semibold text-xl rounded '
         type="text" 
         placeholder='Enter Your Name'
        />
        <button className='px-4 py-3 font-semibold text-xl bg-emerald-600 rounded m-5'>Submit</button>
      </form> 
    </div>
  )
}

export default App
