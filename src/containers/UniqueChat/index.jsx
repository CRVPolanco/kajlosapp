import React from 'react';
import './UniqueChat.css';

const UniqueChat = ({ children }) => {
  return(
    <section className='UniqueChat'>
      {children}
    </section>
  )
};

export default UniqueChat;
