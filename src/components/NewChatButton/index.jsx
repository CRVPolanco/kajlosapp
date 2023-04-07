import React from 'react';
import { ChatContext } from '../../context/ChatContext';
import Message from '@mui/icons-material/Message';
import './NewChatButton.css';

const NewChatButton = () => {

  const { handleNewChatOpen } = React.useContext(ChatContext);

  return(
    <div className="NewChatButton">
      <button className="NewChatButton--button" onClick={handleNewChatOpen} >
        <Message />
      </button>
    </div>
  )
};

export default NewChatButton;
