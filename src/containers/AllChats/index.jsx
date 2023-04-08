import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import NewChatButton from '../../components/NewChatButton';
import MainChat from '../../components/MainChat';
import './AllChats.css';

const AllChats = () => {

  const { chats, searchValue } = useContext(ChatContext);

  return(
    <div className="AllChats">
      {chats.map((c) => {
        if(c.name.includes(searchValue))
          return (
            <MainChat data={c} />
          )}
        )
      }
      <NewChatButton />
    </div>
  )
};

export default AllChats;
