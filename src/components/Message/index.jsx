import React from 'react';
import './Message.css';

const Message = ({ person, sendByMe, data }) => {

  return(
    <div className={`Message ${!!sendByMe ? 'send-by-me' : 'send-by-other'}`}>
      <article className='Message__container'>
        <article className='Message__data-text'>
          <p>{sendByMe ? '~You: ' : `~${person}: ` }{data.text}</p>
        </article>
        <article className='Message__data-time'>
          <p>{data.datetime.substring(0, 5)}</p>
        </article>
      </article>
    </div>
  )
};

export default Message;
