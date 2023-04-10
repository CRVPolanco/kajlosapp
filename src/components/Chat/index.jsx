import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Alert from '../Alert';
import LockedChat from '../LockedChat';
import Edit from '../Edit';
import Message from '../Message';
import MessageInput from '../MessageInput/';
import './Chat.css';

const Chat = () => {

  const {
    chats,
    openModal,
    actualChat,
    setOpenModal,
    handleNewMessage,
    handleEditChat,
    handleDeleteChat,
    handleEraseChat,
    handleBlockChat,
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
            key={m.id}
            chat={chats[index]}
            message={m}
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
      {openModal.edit &&
      <Edit
        actualChat={chats[index]}
        closeEvent={() => setOpenModal({ ...openModal, edit: !openModal.edit })}
        onclickEvent={handleEditChat}
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
