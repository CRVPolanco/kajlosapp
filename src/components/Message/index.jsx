import React from 'react';
import './Message.css';

const Message = ({ sendByMe, checked, data }) => {

  return(
    <div className={`Message ${!!sendByMe ? 'send-by-me' : 'send-by-other'}`}>
      <article className='Message__container'>
        <article className='Message__data-text'>
          <p>{data.text}</p>
        </article>
        <article className='Message__data-time'>
          <p>{checked ? '✔️✔️' : '✔️'}</p>
          <p>{data.datetime}</p>
        </article>
      </article>
    </div>
  )
};

export default Message;
