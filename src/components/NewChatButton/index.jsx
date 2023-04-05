import React from 'react';
import Message from '@mui/icons-material/Message';
import './NewChatButton.css';

const NewChatButton = () => {
  return(
    <div className="NewChatButton">
      <button className="NewChatButton--button">
        <Message />
      </button>
    </div>
  )
};

export default NewChatButton;
