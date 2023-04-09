import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import './DataInChat.css';
import ChatOptions from '../ChatOptions';

const DataInChat = () => {

  const { actualChat, handleChatOpen, handleChatOptions } = useContext(ChatContext);

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
            <h3 className="info-text--name">{actualChat.name}</h3>
            <p className="info-text--last-connection">{actualChat.lastMessageHour}</p>
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
