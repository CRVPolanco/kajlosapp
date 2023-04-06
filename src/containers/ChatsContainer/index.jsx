import React from 'react';
import './ChatsContainer.css';

const ChatsContainer = ({ children }) => {

  return(
    <section className="ChatsContainer">
      {children}
    </section>
  )
};

export default ChatsContainer;
