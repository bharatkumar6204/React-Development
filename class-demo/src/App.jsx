import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submited');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
       <input className='px-4 py-3 m-5 text-xl font-semibold text-cyan-600' type="text" placeholder='Enter your name' />
      <button className='px-4 py-3 text-xl font-semibold   bg-cyan-600 rounded'>Submit</button>
      </form>
      
    </div>
  )
}

export default App
