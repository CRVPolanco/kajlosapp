import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import NewChatButton from '../../components/NewChatButton';
import MainChat from '../../components/MainChat';
import './AllChats.css';

const AllChats = () => {

  const { chats, searchValue, handleNewChatOpen } = useContext(ChatContext);

  return(
    <div className="AllChats">
      { !chats.length &&
        <div className="AllChats__no-chats">
          <p className="no-chats__text">There is no chat yet, create one!</p>
          <div className="no-chats__button-container">
            <button className="no-chat__button" onClick={handleNewChatOpen}>
              <span>Add one</span>
              <span>+</span>
            </button>
          </div>
        </div>
      }
      {chats.map((c) => {
        if(c.name.includes(searchValue))
          return (
            <MainChat data={c} key={c.chatId}/>
          )}
        )
      }
      <NewChatButton />
    </div>
  )
};

export default AllChats;
