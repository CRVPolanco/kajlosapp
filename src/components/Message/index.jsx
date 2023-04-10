import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Alert from '../Alert';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import './Message.css';

const Message = ({ chat, sendByMe, message }) => {

  const { handleEditMessageEvent, handleDeleteMessage } = useContext(ChatContext);

  const [alertDelete, setAlertDelete] = useState(false);
  const [editMessage, setEditMessage] = useState(false);
  const [editText, setEditText] = useState(`${message.text}`);

  const handleEditMessage = () => {
    setEditMessage(!editMessage);
    setEditText(`${message.text}`);
  };
  const handleAlertDelete = () => setAlertDelete(!alertDelete);
  const handleEditText = (e) => setEditText(e.target.value);

  const handleEditCompleted = () => {
    handleEditMessageEvent(chat.chatId, message.id, editText);
    setEditMessage(false);
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
          {editMessage && <textarea onChange={handleEditText} value={editText}></textarea>}
          {!editMessage && <p>{sendByMe ? '~You: ' : `~${message.date}: ` }{message.text}</p>}
        </article>
        <article className='Message__data-time'>
          {editMessage &&
            <figure className="standard-modify-message--icons">
              <CloseIcon onClick={handleEditMessage} />
            </figure>
          }
          {editMessage &&
            <figure className="standard-modify-message--icons" onClick={handleEditCompleted}>
              <DoneIcon />
            </figure>
          }
          {!editMessage &&
            <figure className="standard-modify-message--icons" onClick={handleEditMessage}>
              <EditIcon />
            </figure>
          }
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
