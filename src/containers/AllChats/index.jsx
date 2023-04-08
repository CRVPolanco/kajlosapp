import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import NewChatButton from '../../components/NewChatButton';
import MainChat from '../../components/MainChat';
import './AllChats.css';

const AllChats = () => {

  const { chats } = useContext(ChatContext);

  return(
    <div className="AllChats">
      {chats.map((c) => (
        <MainChat data={c} />
      ))}
      <NewChatButton />
    </div>
  )
};

export default AllChats;
