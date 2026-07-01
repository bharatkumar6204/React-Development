import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(second)
  return (
    <div>
      <form onSubmit={()=>{

      }}>
      <input type="text" placeholder='Enter your name' /><br />
      <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
