import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './MessageInput.css';

const MessageInput = () => {

  const [message, setMessage] = useState('');
  const handleMessage = (e) => setMessage(e.target.value);

  return(
    <aside className='MessageInput'>
      <div className="MessageInput__input-container">
        <input type="text" value={message} onChange={handleMessage}/>
      </div>
      <div className="MessageInput__send-button">
        <button onClick={() => console.log('Send!')}>
          <SendIcon />
        </button>
      </div>
    </aside>
  )
};

export default MessageInput;
