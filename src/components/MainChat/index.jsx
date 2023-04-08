import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './MainChat.css';

const MainChat = ({ data }) => {

  const { handleSetActualChat, handleChatOpen } = useContext(ChatContext);

  const handleClickChat = () => {
    handleSetActualChat(data.chatId);
    handleChatOpen();
  }

  return(
    <article className='MainChat' onClick={handleClickChat}>
      <div className="MainChat__info">
        <figure className='MainChat__info-icon'>
          <img src="" alt="ProfileImage" className="MainChat__info-icon--img" />
        </figure>
        <div className="MainChat__info-text">
          <h3 className="MainChat__info-text--name">{data.name}</h3>
          <p className="MainChat__info-text--message">{data.lastMessageSend}</p>
        </div>
      </div>
      <div className="MainChat__data">
        <p className="MainChat__data--date">{data.lastMessageHour}</p>
        <p className="MainChat__date--total_messages">
          {data.notReadQuantity}
        </p>
      </div>
    </article>
  )
};

export default MainChat;
