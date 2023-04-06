import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './MainChat.css';

const MainChat = () => {

  const { handleChatOpen } = useContext(ChatContext);

  return(
    <article className='MainChat' onClick={handleChatOpen}>
      <div className="MainChat__info">
        <figure className='MainChat__info-icon'>
          <img src="" alt="ProfileImage" className="MainChat__info-icon--img" />
        </figure>
        <div className="MainChat__info-text">
          <h3 className="MainChat__info-text--name">MainChat básico</h3>
          <p className="MainChat__info-text--message">Hola mundo</p>
        </div>
      </div>
      <div className="MainChat__data">
        <p className="MainChat__data--date">14:33</p>
        <p className="MainChat__date--total_messages">
          110
        </p>
      </div>
    </article>
  )
};

export default MainChat;
