import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './MessageInput.css';

const MessageInput = ({ message, setMessage, sendMessage }) => {

  const handleMessage = (e) => setMessage(e.target.value);

  return(
    <aside className='MessageInput'>
      <div className="MessageInput__input-container">
        <input type="text" value={message} onChange={handleMessage}/>
      </div>
      <div className="MessageInput__send-button">
        <button onClick={() => sendMessage()}>
          <SendIcon />
        </button>
      </div>
    </aside>
  )
};

export default MessageInput;
