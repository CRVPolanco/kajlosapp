import React from 'react';
import './Chat.css';

const Chat = () => {
  return(
    <article className='Chat'>
      <div className="Chat__info">
        <figure className='Chat__info-icon'>
          <img src="" alt="ProfileImage" className="Chat__info-icon--img" />
        </figure>
        <div className="Chat__info-text">
          <h3 className="Chat__info-text--name">Chat básico</h3>
          <p className="Chat__info-text--message">Hola mundo</p>
        </div>
      </div>
      <div className="Chat__data">
        <p className="Chat__data--date">14:33</p>
        <p className="Chat__date--total_messages">
          110
        </p>
      </div>
    </article>
  )
};

export default Chat;
