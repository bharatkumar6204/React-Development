import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('form Submited');
    setName('')
    setEmail('')

  }
  return (

    <div className="h-screen flex justify-center items-center">
      <div className="w-80 border-2 p-5 rounded">
        <form onSubmit={(e)=>
          submitHandler(e)
        }>
          <label className="text-xl text-red-600">Name</label><br />
          <input
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
            type="text"
            placeholder="Enter your name"
            className="border w-full p-2 mb-4"
          />

          <label className="text-xl text-red-600">Email</label><br />
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            type="email"
            placeholder="Enter your email"
            className="border w-full p-2 mb-4"
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default App