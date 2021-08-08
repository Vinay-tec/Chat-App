import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import "./User.css"

const socket = io('http://localhost:7000')
const userName = 'User2'
function User2() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', payload => {
      setChat([...chat, payload])
    })
  })

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message)
    socket.emit('message',{userName,message})
    setMessage('')
  };
  return (
    <div className="User1">
    <div className="header">
      <img src="4043260-avatar-male-man-portrait_113269.png" alt="" />
      <h1> User2 </h1>
    </div>
   
      {chat.map((payload, index)=>{
        return(
          <h3 key={index}>{payload.userName}: <span>{payload.message}</span></h3>
        )
      })}
      <div className="form">
      <form onSubmit={sendMessage}>
        <input type="text" name="message"
        placeholder='Type message..'
        value={message}
        onChange={(e)=>{setMessage(e.target.value)}}
        required
        ></input>
        <button type='submit'>Send</button>
      </form>
      </div>
    </div>
  );
}

export default User2;
