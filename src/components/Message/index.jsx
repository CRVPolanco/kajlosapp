import React from 'react';
import './Message.css';

const Message = ({ sendByMe, checked }) => {
  return(
    <div className={`Message ${!!sendByMe ? 'send-by-me' : 'send-by-other'}`}>
      <article className='Message__container'>
        <article className='Message__data-text'>
          <p>Hola mundo, estamos progresando, espero que vaya mejor!!</p>
        </article>
        <article className='Message__data-time'>
          <p>{checked ? '✔️✔️' : '✔️'}</p>
          <p>19:56</p>
        </article>
      </article>
    </div>
  )
};

export default Message;
