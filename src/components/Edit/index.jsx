import React, { useState } from 'react';
import './Edit.css';

const Edit = ({ actualChat, onclickEvent, closeEvent }) => {

  const [name, setName] = useState(`${actualChat.name}`);
  const [description, setDescription] = useState(`${actualChat.description}`);

  const handleEvent = () => {
    onclickEvent(actualChat.chatId, { name, description });
    closeEvent();
  }

  return(
    <section className='Edit'>
      <div className="Edit__container">
        <h3 className="Edit__title">Edit chat</h3>
        <div className="Edit__input">
          <input
            type="text"
            className="Edit__input-standard"
            placeholder='New title'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="Edit__input-standard"
            placeholder='New description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="Edit__buttons">
          <button className="Edit__standard" onClick={handleEvent}>Edit</button>
          <button className="Edit__standard" onClick={closeEvent}>Cancel</button>
        </div>
      </div>
    </section>
  )
};

export default Edit;
