import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import './ChatOptions.css';

const ChatOptions = ({ setOptions }) => {

  const { openModal, setOpenModal, handleChatOptions } = useContext(ChatContext);

  const handleOpenEraseModal = () => {
    setOpenModal({ ...openModal, erase: !openModal.erase })
    setOptions(false);
  };
  const handleOpenBlockModal = () => {
    setOpenModal({ ...openModal, block: !openModal.block })
    setOptions(false);
  };
  const handleOpenDeleteModal = () => {
    setOpenModal({ ...openModal, delete: !openModal.delete })
    setOptions(false);
  };

  return(
    <aside className="ChatOptions">
      <div className="ChatOptions__container">
        <ul className="ChatOptions__list">
          <li onClick={handleOpenEraseModal}>
            Erase chat
          </li>
          <li onClick={handleOpenBlockModal}>
            Block
          </li>
          <li onClick={handleOpenDeleteModal}>
            Delete
          </li>
        </ul>
      </div>
    </aside>
  )
};

export default ChatOptions;
