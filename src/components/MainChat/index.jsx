import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import PersonIcon from '@mui/icons-material/Person';
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
          <PersonIcon />
        </figure>
        <div className="MainChat__info-text">
          <h3 className="MainChat__info-text--name">{data.name}</h3>
          <p className="MainChat__info-text--message">{data.lastMessageSend}</p>
        </div>
      </div>
      <div className="MainChat__data">
        <p className="MainChat__data--date">{data.lastMessageHour.substring(0, 5)}</p>
        <p className="MainChat__date--total-messages">
          {data.notReadQuantity < 1 ? '' : data.notReadQuantity}
        </p>
      </div>
    </article>
  )
};

export default MainChat;
