import React from 'react';
import NewChatButton from '../../components/NewChatButton';
import MainChat from '../../components/MainChat';
import './AllChats.css';

const AllChats = () => {
  return(
    <div className="AllChats">
      {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((e) => (
        <MainChat />
      ))}
      <NewChatButton />
    </div>
  )
};

export default AllChats;
