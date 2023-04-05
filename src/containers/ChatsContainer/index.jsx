import React from 'react';
import Chat from '../../components/Chat';
import './ChatsContainer.css';
import NewChatButton from '../../components/NewChatButton/index';

const ChatsContainer = () => {
  return(
    <section className="ChatsContainer">
      {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((e) => (
        <Chat />
      ))}
      <NewChatButton />
    </section>
  )
};

export default ChatsContainer;
