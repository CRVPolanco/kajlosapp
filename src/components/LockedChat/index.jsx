import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import './LockedChat.css';

const LockedChat = ({ unlock }) => {

  return(
    <section className="LockedChat">
      <div className="LockedChat__info">
        <figure className="LockedChat__icon">
          <HttpsIcon />
        </figure>
        <h3>Chat is blocked</h3>
        <button onClick={unlock}>Click to unlock chat</button>
      </div>
    </section>
  )
};

export default LockedChat;
