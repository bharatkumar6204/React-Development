import React from 'react'

const App = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submit");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input className='px-4 py-3 text-xl m-5' type="text" placeholder='Enter Name' />
        <button className='px-4 py-3 text-xl text-white font-semibold bg-emerald-600 rounded'>Submit</button>
      </form>
      
    </div>
  )
}

export default App
