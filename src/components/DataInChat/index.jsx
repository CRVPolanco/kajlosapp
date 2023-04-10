import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import ChatOptions from '../ChatOptions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import './DataInChat.css';

const DataInChat = () => {

  const { chats, actualChat, handleChatOpen } = useContext(ChatContext);

  const index = chats.findIndex(c => c.chatId === actualChat.chatId);
  const [options, setOptions] = useState(false)

  return(
    <nav className='DataInChat Header__nav'>
      <section className="DataInChat__info">
        <figure className="DataInChat__info-return" onClick={handleChatOpen}>
          <ArrowBackIcon />
        </figure>
        <div className="DataInChat__info-data">
          <figure className="info-data--profile-icon">
            <PersonIcon />
          </figure>
          <div className="DataInChat__info-text">
            <h3 className="info-text--name">{chats[index].name}</h3>
            <p className="info-text--last-connection">{chats[index].description}</p>
          </div>
        </div>
      </section>
      <section className="DataInChat__options">
        <figure className="DataInChat__options-icon" onClick={() => setOptions(!options)}>
          <MoreVertIcon />
        </figure>
        { options && <ChatOptions setOptions={setOptions} />}
      </section>
    </nav>
  )
};

export default DataInChat;
