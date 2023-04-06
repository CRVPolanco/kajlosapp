import React from 'react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './DataInChat.css';

const DataInChat = () => {
  return(
    <nav className='DataInChat Header__nav'>
      <section className="DataInChat__info">
        <figure className="DataInChat__info-return">
          <img src="" alt="return" className="info-return--icon" />
        </figure>
        <div className="DataInChat__info-data">
          <figure className="info-data--profile-icon">
            <img src="" alt="" className="info-data--profile-icon-img" />
          </figure>
          <div className="DataInChat__info-text">
            <h3 className="info-text--name">Chat básico</h3>
            <p className="info-text--last-connection">07:50 wednesday</p>
          </div>
        </div>
      </section>
      <section className="DataInChat__options">
        <figure className="DataInChat__options-icon">
          <MoreVertIcon />
        </figure>
      </section>
    </nav>
  )
};

export default DataInChat;
