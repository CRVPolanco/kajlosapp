import React from 'react';
import Message from '../Message';
import MessageInput from '../MessageInput/';
import './Chat.css';

const Chat = () => {
  return(
    <section className='Chat'>
      <div className='Chat__container'>
        <Message
          sendByMe={false}
          checked={true}
        />
        <Message
          sendByMe={true}
          checked={true}
        />
        <Message
          sendByMe={false}
          checked={false}
        />
        <Message
          sendByMe={false}
          checked={false}
        />
        <Message
          sendByMe={false}
          checked={false}
        />
        <Message
          sendByMe={false}
          checked={false}
        />
        <Message
          sendByMe={false}
          checked={false}
        />
      </div>
      <MessageInput />
    </section>
  )
};

export default Chat;
