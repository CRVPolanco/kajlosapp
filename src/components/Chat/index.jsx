import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import ChatOptions from '../ChatOptions';
import Message from '../Message';
import MessageInput from '../MessageInput/';
import Alert from '../Alert';
import LockedChat from '../LockedChat';
import './Chat.css';

const Chat = () => {

  const {
    chats,
    openModal,
    actualChat,
    handleNewMessage,
    handleDeleteChat,
    handleEraseChat,
    handleBlockChat,
    setOpenModal,
  } = useContext(ChatContext);

  const index = chats.findIndex(c => c.chatId === actualChat.chatId);

  const [message, setMessage] = useState('');

  const eraseAndClose = () => {
    handleEraseChat(actualChat.chatId);
    setOpenModal({ ...openModal, erase: !openModal.erase });
  };

  const blockAndClose = () => {
    handleBlockChat(actualChat.chatId);
    setOpenModal({ ...openModal, block: false });
  }

  const sendMessage = () => {
    handleNewMessage({
      message,
      chatId: actualChat.chatId,
      isMine: true,
    });
    setMessage('');
  };

  return(
    <section className='Chat'>
      <div className='Chat__container'>
        {chats[index].isBlocked && <LockedChat unlock={blockAndClose} />}
        {chats[index].messages.map(m => (
          <Message
            person={chats[index].name}
            key={m.id}
            data={m}
            checked={m.isRead}
            sendByMe={m.isMine}
          />
        ))}
      </div>
      {openModal.erase &&
        <Alert
          title="Are you sure you want to erase data ?"
          onclickEvent={eraseAndClose}
          closeEvent={() => setOpenModal({ ...openModal, erase: !openModal.erase })}
        />
      }
      {openModal.block &&
        <Alert
          title="Are you sure you want to block the chat ?"
          onclickEvent={blockAndClose}
          closeEvent={() => setOpenModal({ ...openModal, block: !openModal.block })}
        />
      }
      {openModal.delete &&
        <Alert
          title="Are you sure you want to delete chat ?"
          onclickEvent={() => handleDeleteChat(actualChat.chatId)}
          closeEvent={() => setOpenModal({ ...openModal, delete: !openModal.delete })}
        />
      }
      <MessageInput
        blocked={chats[index].isBlocked}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </section>
  )
};

export default Chat;
