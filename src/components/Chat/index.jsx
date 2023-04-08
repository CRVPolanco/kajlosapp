import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Message from '../Message';
import MessageInput from '../MessageInput/';
import './Chat.css';

const Chat = () => {

  const { chats, actualChat, handleNewMessage } = useContext(ChatContext);
  const index = chats.findIndex(c => c.chatId === actualChat.chatId);

  const [message, setMessage] = useState('');

  const sendMessage = () => {
    handleNewMessage({
      message,
      chatId: actualChat.chatId,
      isMine: true,
    });
    setMessage('');
  };

  return(
    <section className='Chat'>
      <div className='Chat__container'>
        {chats[index].messages.map(m => (
          <Message
            key={m.id}
            data={m}
            checked={m.isRead}
            sendByMe={m.isMine}
          />
        ))}
      </div>
      <MessageInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </section>
  )
};

export default Chat;
