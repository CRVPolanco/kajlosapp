import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Message.css';
import Alert from '../Alert';

const Message = ({ person, sendByMe, message }) => {

  const { handleDeleteMessage } = useContext(ChatContext);

  const [alertDelete, setAlertDelete] = useState(false);
  const [editMessage, setEditMessage] = useState(false);

  const handleEditMessage = () => setEditMessage(!editMessage);
  const handleAlertDelete = () => setAlertDelete(!alertDelete);

  const handleEditEvent = () => {

  };

  const handleDeleteEvent = () => {
    handleDeleteMessage(message.id);
    handleAlertDelete(false);
  };

  return(
    <div className={`Message ${!!sendByMe ? 'send-by-me' : 'send-by-other'}`}>
      {alertDelete && 
      <Alert 
        title="Are you sure you want to delete the message ?" 
        closeEvent={handleAlertDelete}
        onclickEvent={handleDeleteEvent}
      /> 
      }
      <article className='Message__container'>
        <article className='Message__data-text'>
          <p>{sendByMe ? '~You: ' : `~${message.date}: ` }{message.text}</p>
        </article>
        <article className='Message__data-time'>
          <figure className="standard-modify-message--icons" onClick={handleEditMessage}>
            <EditIcon onClick={handleEditMessage}/>
          </figure>
          <figure className="standard-modify-message--icons" onClick={handleAlertDelete}>
            <DeleteIcon />
          </figure>
          <p>{message.datetime.substring(0, 5)}</p>
        </article>
      </article>
    </div>
  )
};

export default Message;
