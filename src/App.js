import React from 'react'
import User1 from './User1'
import User2 from './User2'
import "./App.css"

const App = () => {
  return (
    <>
    <h2 className="heading">Welcome To Chat App</h2>
    <div className="App">
      
      <User1/>
      <User2/>
    </div>
    </>
  )
}

export default App;
